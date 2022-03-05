import NavbarLayout from "../../../layout/NavbarLayout";
import SEO from "../../../components/SEO";
import {GetServerSideProps} from "next";
import BasicCard from "../../../components/common/cards/BasicCard";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import LandHeaderBar from "../../../components/stats/land/LandHeaderBar";
import LandGeneralStats from "../../../components/stats/land/LandGeneralStats";
import LandMembersList from "../../../components/stats/land/LandMembersList";
import {useRouter} from "next/router";
import Tab from "../../../components/common/Tab";
import {observer} from "mobx-react-lite";
import {getLandByName} from "../../../core/land";
import {useState} from "react";
import LandTransactions from "../../../components/stats/land/transactions/LandTransactions";
import {isUserInLand} from "../../../core/user/user";
import authStore from "../../../stores/AuthStore";

const LandProfile: NextPageWithLayout = observer(({landname, land}) => {
    const router = useRouter()
    const [page, setPage] = useState("members")

    return (
        <div>
            <SEO seo={{
                title: `${land.name}`,
                description: `${land.name}, a strong band of ${land.members.length === 0 ? "1 player" : ((land.members.length + 1) + " players")}, working together to overcome all challenges thrown at them. Find out more about them here!`,
                imageSRC: `/api/previews/land/${land.name}.jpg`
            }}/>
            <div>
                <BasicCard>
                    <BreadCrumbs pathName={router ? router.asPath : ""}/>
                </BasicCard>
                <div className="flex flex-col gap-4 mt-4">
                    <LandHeaderBar land={land}/>
                    <main className="grid grid-cols-1 2xl:grid-cols-4 2xl:gap-x-4 gap-y-4 items-start">
                        <LandGeneralStats land={land}/>
                        <div className="col-span-3">
                            <ul className="flex flex-wrap">
                                <Tab title="Members" active={page === "members"} onClick={() => setPage("members")}/>
                                {(isUserInLand(landname, authStore.user) || authStore.hasPermission("web.lands.transactions.others.view")) &&
                                    <Tab title="Transactions" active={page === "transactions"}
                                         onClick={() => setPage("transactions")}/>
                                }
                            </ul>
                            {page === "members" && <LandMembersList land={land}/>}
                            {(page === "transactions" && (isUserInLand(landname, authStore.user) || authStore.hasPermission("web.lands.transactions.others.view"))) &&
                                <LandTransactions transactions={land.bank.transactions}/>}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
    const landname = context.params['landname']
    const land = await getLandByName(landname as string)

    return {
        props: {
            landname: landname,
            land: land || null,
        },
        notFound: !land
    }
}

LandProfile.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default LandProfile

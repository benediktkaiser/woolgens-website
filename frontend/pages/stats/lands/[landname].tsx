import NavbarLayout from "../../../layout/NavbarLayout";
import {FC} from "react";
import landStore from "../../../stores/LandStore";
import {useRouter} from "next/router";
import LandHeaderBar from "../../../components/stats/land/LandHeaderBar";
import LandMembersList from "../../../components/stats/land/LandMembersList";
import LandGeneralStats from "../../../components/stats/land/LandGeneralStats";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import BasicCard from "../../../components/common/cards/BasicCard";

interface LandProfileProps {
    land: Land
}

const LandProfile: FC<LandProfileProps> = ({land}) => {
    const router = useRouter()

    const seo = {
        title: `${land.name}`,
        description: "Welcome to the WoolGens homepage! Here you can find stats, news and communicate with other community members!",
        imageSRC: `https://cravatar.eu/helmavatar/${land.owner.name}/128`
    }

    return (
        <NavbarLayout seo={seo}>
            <BasicCard>
                <BreadCrumbs pathName={router ? router.asPath : ""}/>
            </BasicCard>
            <div className="flex flex-col gap-4 mt-4">
                <LandHeaderBar land={land}/>
                <main className="grid grid-cols-1 2xl:grid-cols-4 2xl:gap-x-4 gap-y-4 items-start">
                    <LandGeneralStats land={land}/>
                    <div className="col-span-3">
                        <LandMembersList land={land}/>
                    </div>
                </main>
            </div>
        </NavbarLayout>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    const {landname} = context.query
    const land = await landStore.getLand(landname);
    return {props: {land}}
}

export default LandProfile

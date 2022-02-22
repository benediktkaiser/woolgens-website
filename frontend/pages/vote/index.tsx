import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import Announcement from "../../components/common/Announcement";
import {MdOutlineHowToVote} from "react-icons/md"
import {BsFillSuitHeartFill} from "react-icons/bs"
import {BaseButton} from "../../components/common/BaseButton";
import React from "react";
import authStore from "../../stores/AuthStore";
import TopList from "../../components/stats/TopList";
import SEO from "../../components/SEO";

const VoteIndexPage: NextPageWithLayout = observer(() => {

    return (
        <div>
            <SEO seo={{
                title: "Vote",
                description: "By voting for our server you support our search for new players. In order to that you for your help you will receive small in game rewards you can claim daily. ",
                imageSRC: "/seo/Vote.jpg"
            }} />
            <Announcement
                icon={<MdOutlineHowToVote/>}
                text="Voting helps us and gives you a small reward! Login to track your vote progress!"
                rightComponent={<BaseButton onClick={() => authStore.toggleLoginModal()} type="primary">Login</BaseButton>}
                iconStyles="bg-blue-500 text-white"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
                <TopList title="Vote 1" background={"bg-gradient-to-r from-red-500/80 to-red-900/80"}>
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-200">Rewards:</h2>
                        <ul className="text-gray-400">
                            <li>- Vote Crate</li>
                            <li>- 5000 $</li>
                            <li className="flex items-center">- Our love <BsFillSuitHeartFill className="ml-2" /></li>
                        </ul>
                        <BaseButton type="danger" className="mt-4 w-full">
                            Vote
                        </BaseButton>
                    </div>
                </TopList>
                <TopList title="Vote 2" background={"bg-gradient-to-r from-green-500/80 to-green-900/80"}>
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-200">Rewards:</h2>
                        <ul className="text-gray-400">
                            <li>- Vote Crate</li>
                            <li>- 5000 $</li>
                            <li className="flex items-center">- Our love <BsFillSuitHeartFill className="ml-2" /></li>
                        </ul>
                        <BaseButton type="success" className="mt-4 w-full">
                            Vote
                        </BaseButton>
                    </div>
                </TopList>
                <TopList title="Vote 3" background={"bg-gradient-to-r from-blue-500/80 to-blue-900/80"}>
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-200">Rewards:</h2>
                        <ul className="text-gray-400">
                            <li>- Vote Crate</li>
                            <li>- 5000 $</li>
                            <li className="flex items-center">- Our love <BsFillSuitHeartFill className="ml-2" /></li>
                        </ul>
                        <BaseButton type="primary" className="mt-4 w-full">
                            Vote
                        </BaseButton>
                    </div>
                </TopList>
            </div>
        </div>
    )
})

VoteIndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default VoteIndexPage

import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import StatsUserSearchBar from "../../components/stats/searchbar/StatsUserSearchBar";
import TopList from "../../components/stats/TopList";
import Announcement from "../../components/common/Announcement";
import {BaseButton} from "../../components/common/BaseButton";
import {IoMdTrophy} from "react-icons/io"
import {AiOutlineArrowRight} from "react-icons/ai"

const demoUserNames = [{
    id: 0,
    name: "tsuuukiii",
    type: "player",
}, {
    id: 1,
    name: "ReaperMaga",
    type: "player"
}, {
    id: 3,
    name: "MyLand",
    type: "land"
}]

const StatsIndexPage = observer(() => {

    return (
        <NavbarLayout>
            <div className="my-8 text-center">
                <div className="py-4">
                    <h1 className="text-4xl font-bold">
                        Player and Land Stats
                    </h1>
                </div>
                <StatsUserSearchBar usernames={demoUserNames} />
            </div>
            <div className="hidden lg:block">
                <Announcement
                    icon={<IoMdTrophy />}
                    text="You are currently viewing the player Top Lists! Check out our land Top Lists!"
                    rightComponent={
                        <BaseButton type="primary">
                        <span className="flex items-center">
                            To the Land Top Lists
                            <AiOutlineArrowRight className="ml-2" />
                        </span>
                        </BaseButton>
                    }
                    iconStyles="bg-blue-500 text-white"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 my-6">
                <TopList title="Level" background={"bg-gradient-to-r from-green-500/80 to-green-900/80"} />
                <TopList title="Money" background={"bg-gradient-to-l from-amber-400/80 to-yellow-700/80"} />
                <TopList title="Playtime" background={"bg-gradient-to-r from-purple-400/80 to-purple-900/80"} />
            </div>
        </NavbarLayout>
    )
})

export default StatsIndexPage

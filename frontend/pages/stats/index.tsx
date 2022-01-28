import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import StatsUserSearchBar from "../../components/stats/searchbar/StatsUserSearchBar";
import TopList from "../../components/stats/TopList";

const StatsIndexPage = observer(() => {

    return (
        <NavbarLayout>
            <StatsUserSearchBar />

            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-5">
                <TopList title="Level" background={"bg-gradient-to-r from-green-500/80 to-green-900/80"} />
                <TopList title="Money" background={"bg-gradient-to-l from-amber-400/80 to-yellow-700/80"} />
                <TopList title="Playtime" background={"bg-gradient-to-r from-purple-400/80 to-purple-900/80"} />
            </div>
        </NavbarLayout>
    )
})

export default StatsIndexPage

import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect} from "react";
import SEO from "../../components/SEO";
import VotePartyProgressBox from "../../components/vote/VotePartyProgressBox";
import VoteCard from "../../components/vote/VoteCard";
import informationStore from "../../stores/InformationStore";

const VoteIndexPage: NextPageWithLayout = observer(() => {

    useEffect(() => {
        informationStore.updateVotePartyStatus().catch(error => console.error(error))
    }, [])

    return (
        <div>
            <SEO seo={{
                title: "Vote",
                description: "By voting for our server you support our search for new players. In order to that you for your help you will receive small in game rewards you can claim daily. ",
                imageSRC: "/seo/Vote.jpg"
            }}/>

            <VotePartyProgressBox votes={informationStore.votePartyStatus.count} maxVotes={informationStore.votePartyStatus.maxCount} />
            <div className="flex xl:grid flex-col grid-cols-10 gap-4 items-start mt-5">
                <main className="grid grid-cols-2 lg:grid-cols-3 col-span-7 gap-4">
                    <VoteCard
                        title="Minecraft MP"
                        link="https://minecraft-mp.com/server/301468/vote/"
                        voted={false}
                    />
                    <VoteCard
                        title="Minecraft Servers.org"
                        link="https://minecraftservers.org/vote/623204"
                        voted={false}
                    />
                    <VoteCard
                        title="Minecraft Servers.biz"
                        link="https://minecraftservers.biz/servers/151281/#vote_now"
                        voted={false}
                    />
                    <VoteCard
                        title="Minecraft List"
                        link="https://minecraftlist.org/vote/25024"
                        voted={false}
                    />
                    <VoteCard
                        title="Minecraft Server.net"
                        link="https://minecraft-server.net/vote/woolgenss/"
                        voted={false}
                    />
                    <VoteCard
                        title="TopG"
                        link="https://topg.org/minecraft-servers/server-634043"
                        voted={false}
                    />
                </main>
                <aside className="flex flex-col col-span-3 gap-3">
                    <div className="p-4 bg-gradient-to-r rounded-lg from-purple-700/40 to-purple-900/40">
                        <h1 className="text-2xl text-purple-400 font-minecraft">
                            What do you get for Voting?
                        </h1>
                        <p className="text-purple-300">
                            In order to thank everyone for their vote, we will reward you with some small in game rewards for every vote you do. You can
                            vote every 24 hours, allowing you to collect some small daily rewards in this way. Every 100 votes, we also host a vote party,
                            to celebrate your work! Thank you for your support.
                        </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r rounded-lg from-purple-700/40 to-purple-900/40">
                        <h1 className="text-2xl text-purple-400 font-minecraft">
                            Why should you Vote?
                        </h1>
                        <p className="text-purple-300">
                            By voting you support our search for new players. We are constantly excited about welcoming new players to our server.
                            However we need your help to recommend WoolGens to other players. One way you can do this is by voting on server lists. This
                            helps push us up on their rankings, making us more visible to new players.
                        </p>
                    </div>
                </aside>
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

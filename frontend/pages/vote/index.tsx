import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import SEO from "../../components/SEO";
import VotePartyProgressBox from "../../components/vote/VotePartyProgressBox";
import VoteCard from "../../components/vote/VoteCard";

const VoteIndexPage: NextPageWithLayout = observer(() => {

    return (
        <div>
            <SEO seo={{
                title: "Vote",
                description: "By voting for our server you support our search for new players. In order to that you for your help you will receive small in game rewards you can claim daily. ",
                imageSRC: "/seo/Vote.jpg"
            }}/>

            <VotePartyProgressBox/>

            <div className="flex xl:grid flex-col grid-cols-10 gap-4 items-start mt-5">
                <main className="grid grid-cols-2 lg:grid-cols-3 col-span-7 gap-4">
                    <VoteCard voted={true}/>
                    <VoteCard voted={false}/>
                    <VoteCard voted={true}/>
                    <VoteCard voted={false}/>
                    <VoteCard voted={true}/>
                    <VoteCard voted={false}/>
                    <VoteCard voted={true}/>
                    <VoteCard voted={false}/>
                </main>
                <aside className="flex flex-col col-span-3 gap-3">
                    <div className="p-4 bg-gradient-to-r rounded-lg from-purple-700/40 to-purple-900/40">
                        <h1 className="text-2xl text-purple-400 font-minecraft">
                            Why should you vote?
                        </h1>
                        <p className="text-purple-300">
                            We are a large America based Minecraft Gens server with 5000+ Discord Members and Discord
                            Partner status.
                            We are almost done with completely redesigning our server concept and will be releasing
                            shortly.
                        </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r rounded-lg from-purple-700/40 to-purple-900/40">
                        <h1 className="text-2xl text-purple-400 font-minecraft">
                            What do you get for voting?
                        </h1>
                        <p className="text-purple-300">
                            We are a large America based Minecraft Gens server with 5000+ Discord Members and Discord
                            Partner status.
                            We are almost done with completely redesigning our server concept and will be releasing
                            shortly.
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

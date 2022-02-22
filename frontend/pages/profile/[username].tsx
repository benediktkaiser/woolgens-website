import NavbarLayout from "../../layout/NavbarLayout";
import React, {useState} from "react";
import SEO from "../../components/SEO";
import {GetServerSideProps} from "next";
import ProfileToolBar from "../../components/profile/ProfileToolBar";
import ProfileUserBox from "../../components/profile/ProfileUserBox";
import ProfileSkills from "../../components/profile/ProfileSkills";
import ProfileGeneralStats from "../../components/profile/ProfileGeneralStats";
import {getUserByUsername} from "../../core/user";
import Tab from "../../components/common/Tab";
import ProfilePostsSection from "../../components/profile/posts/ProfilePostsSection";
import ProfileSeasonStats from "../../components/profile/ProfileSeasonStats";
import BasicCard from "../../components/common/cards/BasicCard";
import ProfileBadges from "../../components/profile/about/ProfileBadges";
import UserAbout from "../../components/profile/about/UserAbout";
import {formatMillisecondsToTime} from "../../core/formatters";

const ProfilePage: NextPageWithLayout = ({user}) => {
    const [selectedSeason, setSelectedSeason] = useState(Object.keys(user.minecraftUser.seasons).reverse()[0])
    const [page, setPage] = useState("stats")

    return (
        <div>
            <SEO seo={{
                title: user.name,
                description: `${user.name} is a player on Woolgens! They have played a total of ${formatMillisecondsToTime(user.minecraftUser.stats.playtime, true, true)}. That's impressive! View their profile if you want to find out more about them or in case you want to connect with them!`,
                imageSRC: "/seo/Stats.jpg"
            }}/>
            <section className="flex flex-col gap-3">
                <ProfileToolBar
                    selectedSeason={selectedSeason}
                    user={user}
                    setSelectedSeason={setSelectedSeason}
                />
                <div className="flex flex-col gap-4">
                    <ProfileUserBox user={user} seasonNumber={selectedSeason}/>
                    <section className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-x-4 gap-y-4">
                        <main className="flex flex-col col-span-3">
                            <ul className="flex flex-wrap">
                                <Tab title="Season Stats" active={page === "stats"} onClick={() => setPage("stats")}/>
                                <Tab title="About" active={page === "about"} onClick={() => setPage("about")}/>
                            </ul>
                            <BasicCard withTabs={true}>
                                {page == "stats" && (
                                    <div className="flex flex-col gap-4">
                                        <ProfileSeasonStats selectedSeason={selectedSeason} user={user}/>
                                        <hr className="border-dark-light" />
                                        <ProfileSkills selectedSeason={selectedSeason} user={user}/>
                                    </div>
                                )}
                                {page == "profilePosts" && <ProfilePostsSection user={user}/>}
                                {page == "about" && (
                                    <div className="px-2">
                                        <UserAbout user={user} />
                                        {user.minecraftUser.badges?.length > 0 && (
                                            <div className="mt-4">
                                                <hr className="border-dark-light" />
                                                <ProfileBadges user={user} />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </BasicCard>
                        </main>
                        <aside className="2xl:mt-11">
                            <ProfileGeneralStats user={user}/>
                        </aside>
                    </section>
                </div>
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const username = context.params['username']
    try {
        const user = await getUserByUsername(username);
        return {
            props: {
                user: user || null,
            },
            notFound: !user
        }
    } catch {
        return {
            notFound: true
        }
    }
}

ProfilePage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default ProfilePage

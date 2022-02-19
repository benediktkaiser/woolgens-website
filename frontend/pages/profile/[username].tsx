import NavbarLayout from "../../layout/NavbarLayout";
import React, {useState} from "react";
import SEO from "../../components/SEO";
import {GetServerSideProps} from "next";
import ProfileToolBar from "../../components/profile/ProfileToolBar";
import ProfileUserBox from "../../components/profile/ProfileUserBox";
import ProfileSkills from "../../components/profile/ProfileSkills";
import ProfilePostsSection from "../../components/profile/posts/ProfilePostsSection";
import ProfileGeneralStats from "../../components/profile/ProfileGeneralStats";
import {getUserByUsername} from "../../core/user";

const ProfilePage: NextPageWithLayout = ({ username, user }) => {
    const [selectedSeason, setSelectedSeason] = useState(Object.keys(user.minecraftUser.seasons).reverse()[0])

    return (
        <div>
            <SEO seo={{
                title: username,
                description: "Test",
                imageSRC: `https://i.imgur.com/jwsb0dY.jpg`
            }} />
            <section className="flex flex-col gap-3">
                <ProfileToolBar
                    selectedSeason={selectedSeason}
                    user={user}
                    setSelectedSeason={setSelectedSeason}
                />
                <div className="flex flex-col gap-4">
                    <ProfileUserBox user={user} seasonNumber={selectedSeason}/>
                    <section className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-x-4 gap-y-4">
                        <main className="flex flex-col col-span-3 gap-4">
                            <ProfileSkills selectedSeason={selectedSeason} user={user}/>
                            <ProfilePostsSection user={user}/>
                        </main>
                        <aside>
                            <ProfileGeneralStats selectedSeason={selectedSeason} user={user}/>
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
                username: username,
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

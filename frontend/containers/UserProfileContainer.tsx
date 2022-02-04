import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import userStore from "../stores/UserStore";
import ProfileToolBar from "../components/profile/ProfileToolBar";
import ProfileUserBox from "../components/profile/ProfileUserBox";
import ProfileSkills from "../components/profile/ProfileSkills";
import ProfilePostsSection from "../components/profile/posts/ProfilePostsSection";
import ProfileGeneralStats from "../components/profile/ProfileGeneralStats";
import UserCompareModal from "../components/profile/comparemodal/UserCompareModal";

const UserProfileContainer = () => {
    const router = useRouter()
    const {username} = router.query
    const [selectedSeason, setSelectedSeason] = useState("0")
    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {
        if (username) {
            userStore.getUser(username).then((user) => {
                setSelectedSeason(Object.keys(user.minecraftUser.seasons).reverse()[0])
                setUser(user)
            });
        }
    }, [username])

    return (
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
            <UserCompareModal />
        </section>
    )
}

export default UserProfileContainer

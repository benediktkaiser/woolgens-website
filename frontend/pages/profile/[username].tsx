import NavbarLayout from "../../layout/NavbarLayout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import userStore from "../../stores/UserStore";
import ProfileUserBox from "../../components/profile/ProfileUserBox";
import ProfileToolBar from "../../components/profile/ProfileToolBar";
import ProfileSkills from "../../components/profile/ProfileSkills";
import ProfileGeneralStats from "../../components/profile/ProfileGeneralStats";

const ProfilePage = observer(() => {
    const router = useRouter()
    const {username} = router.query
    const [selectedSeason, setSelectedSeason] = useState("0")
    const [user, setUser] = useState<FullUser | undefined>(undefined)

    useEffect(() => {
        userStore.getUser(username).then((user) => {
            setSelectedSeason(Object.keys(user.minecraftUser.seasons).reverse()[0])
            setUser(user)
        });
    }, [username])

    return (
        <NavbarLayout>
            <section className="flex flex-col gap-3">
                <ProfileToolBar pathName={router ? router.asPath : ""} selectedSeason={selectedSeason} user={user}/>
                <div className="flex flex-col gap-4">
                    <ProfileUserBox user={user} seasonNumber={selectedSeason}/>
                    <section className="grid grid-cols-4 gap-4">
                        <main className="flex flex-col col-span-3 gap-4">
                            <ProfileSkills selectedSeason={selectedSeason} user={user}/>
                        </main>
                        <aside>
                            <ProfileGeneralStats selectedSeason={selectedSeason} user={user}/>
                        </aside>
                    </section>
                </div>
            </section>
        </NavbarLayout>
    )
})

export default ProfilePage

import NavbarLayout from "../../layout/NavbarLayout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import userStore from "../../stores/UserStore";


const ProfilePage = observer(() => {
    const router = useRouter()
    const {username} = router.query

    const [user, setUser] = useState<FullUser | undefined>(undefined)

    useEffect(() => {
        userStore.getUser(username).then((user) => {
            setUser(user)
        });
    }, [username])

    return (
        <NavbarLayout>
            {user && (
                <span>
                    {user.minecraftUser.uuid}
                </span>
            )}
        </NavbarLayout>
    )
})

export default ProfilePage

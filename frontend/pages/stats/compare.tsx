import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import userStore from "../../stores/UserStore";
import UserCompareBox from "../../components/stats/compare/UserCompareBox";
import UserCompareArrows from "../../components/stats/compare/UserCompareArrows";
import {BiGitCompare} from "react-icons/bi";
import Announcement from "../../components/common/Announcement";

const ComparePage: NextPageWithLayout = observer(() => {
    const router = useRouter();
    const userNameOne = router.query["1"] || undefined
    const userNameTwo = router.query["2"] || undefined

    const [userOne, setUserOne] = useState(undefined);
    const [userTwo, setUserTwo] = useState(undefined)
    const [autocompleteList, setAutocompleteList] = useState(undefined)
    const [season] = useState(process.env.NEXT_PUBLIC_CURRENT_SEASON)

    useEffect(() => {
        userStore.getAllFormattedUserNames().then((result) => {
            setAutocompleteList([...result])
        })

        if (userNameOne) {
            userStore.getUser(userNameOne).then(result => setUserOne(result))
        } else {
            setUserOne(undefined)
        }
        if (userNameTwo) {
            userStore.getUser(userNameTwo).then(result => setUserTwo(result))
        } else {
            setUserTwo(undefined)
        }
    }, [userNameOne, userNameTwo])

    const setUser = async (one?, two?) => {
        if (one && two) {
            const url = `/stats/compare?1=${one}&2=${two}`
            await router.push(url, undefined, {shallow: true})
        } else if (one && !two) {
            const url = `/stats/compare?1=${one}`
            await router.push(url, undefined, {shallow: true})
        } else if (two && !one) {
            const url = `/stats/compare?2=${two}`
            await router.push(url, undefined, {shallow: true})
        } else {
            const url = `/stats/compare`
            await router.push(url, undefined, {shallow: true})
        }
        return;
    }

    return (
        <div>
            <Announcement
                icon={<BiGitCompare/>}
                text="Welcome to our stats comparison! Here you can pit two users against each other and see who comes out on top!"
                iconStyles="bg-red-500 text-white"
            />
            <div className="grid grid-cols-9 gap-9 justify-between items-start p-4 pt-5 mt-5 rounded-lg bg-dark-light/50">
                <div className="col-span-4">
                    <UserCompareBox
                        user={userOne}
                        setUser={(userName) => setUser(userName, userNameTwo)}
                        usernames={autocompleteList}
                        season={season}
                    />
                </div>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col flex-initial justify-center my-1 h-32">
                        <h1 className="text-5xl font-bold text-center">
                            VS.
                        </h1>
                    </div>
                    {(userOne || userTwo) && (
                        <div className="h-full">
                            <UserCompareArrows user1={userOne} user2={userTwo} season={season} />
                        </div>
                    )}
                </div>
                <div className="col-span-4">
                    <UserCompareBox
                        user={userTwo}
                        setUser={(userName) => setUser(userNameOne, userName)}
                        usernames={autocompleteList}
                        season={season}
                    />
                </div>
            </div>
        </div>
    )
})

ComparePage.getLayout = function getLayout(page) {
    const seo = {
        title: "Compare",
        description: "Compare yourself to other members of the Woolgens community and rise to the top of the leaderboard!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default ComparePage

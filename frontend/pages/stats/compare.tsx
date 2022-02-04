import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import userStore from "../../stores/UserStore";
import UserCompareBox from "../../components/stats/compare/UserCompareBox";

const ComparePage: NextPageWithLayout = observer(() => {
    const router = useRouter();
    const userNameOne = router.query["1"] || undefined
    const userNameTwo = router.query["2"] || undefined

    const [userOne, setUserOne] = useState(undefined);
    const [userTwo, setUserTwo] = useState(undefined)
    const [autocompleteList, setAutocompleteList] = useState(undefined)
    const [season, setSeason] = useState(process.env.NEXT_PUBLIC_CURRENT_SEASON)

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
            <div className="grid grid-cols-9 gap-9 justify-between items-start">
                <div className="col-span-4">
                    <UserCompareBox
                        user={userOne}
                        setUser={(userName) => setUser(userName, userNameTwo)}
                        usernames={autocompleteList}
                    />
                </div>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col flex-initial justify-center my-1 h-32">
                        <h1 className="text-5xl font-bold text-center">
                            VS.
                        </h1>
                    </div>
                    <div className="h-full">

                    </div>
                </div>
                <div className="col-span-4">
                    <UserCompareBox
                        user={userTwo}
                        setUser={(userName) => setUser(userNameOne, userName)}
                        usernames={autocompleteList}
                    />
                </div>
            </div>
        </div>
    )
})

ComparePage.getLayout = function getLayout(page) {
    const seo = {
        title: "Stats",
        description: "Compare yourself to other members of the Woolgens community and rise to the top of the leaderboard!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default ComparePage

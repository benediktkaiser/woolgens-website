import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import userStore from "../../stores/UserStore";
import UserCompareBox from "../../components/stats/compare/UserCompareBox";
import UserCompareArrows from "../../components/stats/compare/UserCompareArrows";
import {BiGitCompare} from "react-icons/bi";
import Dropdown from "../../components/common/dropdown/Dropdown";
import DropdownItem from "../../components/common/dropdown/DropdownItem";
import BasicCard from "../../components/common/cards/BasicCard";

const ComparePage: NextPageWithLayout = observer(() => {
    const router = useRouter();
    const userNameOne = router.query["1"] || undefined
    const userNameTwo = router.query["2"] || undefined

    const [userOne, setUserOne] = useState(undefined)
    const [userTwo, setUserTwo] = useState(undefined)
    const [userOneLoading, setUserOneLoading] = useState(false)
    const [userTwoLoading, setUserTwoLoading] = useState(false)

    const [autocompleteList, setAutocompleteList] = useState(undefined)
    const [season, setSelectedSeason] = useState(process.env.NEXT_PUBLIC_CURRENT_SEASON)

    useEffect(() => {
        userStore.getAllFormattedUserNames().then((result) => {
            setAutocompleteList([...result])
        })

        if (userNameOne) {
            setUserOneLoading(true)
            userStore.getUser(userNameOne).then(result => {
                setUserOne(result)
                setUserOneLoading(false);
            })
        } else {
            setUserOne(undefined)
        }
        if (userNameTwo) {
            setUserTwoLoading(true)
            userStore.getUser(userNameTwo).then(result => {
                setUserTwo(result)
                setUserTwoLoading(false)
            })
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
            <BasicCard>
                <div className="flex justify-between items-center h-[50px]">
                    <div className="flex items-center">
                        <div className="p-3 text-2xl bg-yellow-500 rounded-xl">
                            <BiGitCompare/>
                        </div>
                        <div className="ml-3">
                            <h1 className="text-xl">
                                Comparing stats from Season {season}!
                            </h1>
                            <h2>
                                After selecting two users you can change the season!
                            </h2>
                        </div>
                    </div>
                    {userOne ? (
                        <Dropdown title={season}>
                            <div className="flex overflow-auto flex-col gap-2 p-2 bg-dark-light max-h-[300px]">
                                {Object.keys(userOne.minecraftUser.seasons).reverse().map((value, index) => (
                                    <div key={index} onClick={() => setSelectedSeason(value)}>
                                        <DropdownItem title={value}/>
                                    </div>
                                ))}
                            </div>
                        </Dropdown>
                    ) : (
                        <div className="w-10" />
                    )}
                </div>
            </BasicCard>
            <div
                className="grid grid-cols-9 gap-9 justify-between items-start p-10 mt-5 rounded-lg bg-dark-light/50">
                <div className="col-span-4">
                    <UserCompareBox
                        user={userOne}
                        setUser={(userName) => setUser(userName, userNameTwo)}
                        usernames={autocompleteList}
                        season={season}
                        isLoading={userOneLoading}
                    />
                </div>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col flex-initial justify-center my-1 h-32">
                        <h1 className="text-5xl font-bold text-center">
                            VS.
                        </h1>
                    </div>
                    <div className="h-full">
                        <UserCompareArrows user1={userOne} user2={userTwo} season={season}/>
                    </div>
                </div>
                <div className="col-span-4">
                    <UserCompareBox
                        user={userTwo}
                        setUser={(userName) => setUser(userNameOne, userName)}
                        usernames={autocompleteList}
                        season={season}
                        isLoading={userTwoLoading}
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
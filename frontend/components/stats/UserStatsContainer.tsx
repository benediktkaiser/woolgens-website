import TopList from "./TopList";
import TopListRow from "./TopListRow";
import {getLatestSeasonStats} from "../../core/minecraftUser";
import LoadingTopList from "./LoadingTopList";
import React, {FC, useEffect, useState} from "react";
import topListStore from "../../stores/TopListStore";
import {formatMillisecondsToTime, formatMoney} from "../../core/formatters";

declare interface UserStatsContainerProps {
    seasonNumber: string
}

const UserStatsContainer: FC<UserStatsContainerProps> = ({seasonNumber}) => {
    const [levelTopList, setLevelTopList] = useState(undefined)
    const [balanceTopList, setBalanceTopList] = useState(undefined)
    const [playTimeTopList, setPlayTimeTopList] = useState(undefined)

    useEffect(() => {
        topListStore.getSimpleTopList("level", `seasons.${seasonNumber}.level`).then((result) => {
            setLevelTopList(result)
        })
        topListStore.getSimpleTopList("balance", `seasons.2.balance`).then((result) => {
            setBalanceTopList(result)
        })
        topListStore.getSimpleTopList("playTime", `stats.playtime`).then((result) => {
            setPlayTimeTopList(result)
        })
    }, [seasonNumber])

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 my-6">
                <TopList title="Level" background={"bg-gradient-to-r from-green-500/80 to-green-900/80"}>
                    {levelTopList ? (
                        <div>
                            {levelTopList.map((user, index) =>
                                <TopListRow
                                    key={index}
                                    minecraftUser={user}
                                    value={getLatestSeasonStats(user).level}
                                    place={index + 1}
                                />
                            )}
                        </div>
                    ) : <LoadingTopList />}
                </TopList>
                <TopList title="Money" background={"bg-gradient-to-l from-amber-400/80 to-yellow-700/80"}>
                    {balanceTopList ? (
                        <div>
                            {balanceTopList.map((user, index) =>
                                <TopListRow
                                    key={index}
                                    minecraftUser={user}
                                    value={formatMoney(getLatestSeasonStats(user).balance)}
                                    label="$"
                                    place={index + 1}
                                />
                            )}
                        </div>
                    ) : <LoadingTopList />}
                </TopList>
                <TopList title="Playtime" background={"bg-gradient-to-l from-purple-400/80 to-purple-700/80"}>
                    {playTimeTopList ? (
                        <div>
                            {playTimeTopList.map((user: MinecraftUser, index) =>
                                <TopListRow
                                    key={index}
                                    minecraftUser={user}
                                    value={formatMillisecondsToTime(user.stats.playtime)}
                                    label="Hours"
                                    place={index + 1}
                                />
                            )}
                        </div>
                    ) : <LoadingTopList />}
                </TopList>
            </div>
        </div>
    )
}

export default UserStatsContainer

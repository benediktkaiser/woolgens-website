import Dropdown from "../common/dropdown/Dropdown";
import DropdownItem from "../common/dropdown/DropdownItem";
import BasicCard from "../common/cards/BasicCard";
import React, {FC} from "react";
import {FiArchive} from "react-icons/fi"

declare interface ProfileToolBarProps {
    selectedSeason: string,
    user?: FullUser,
    setSelectedSeason: (season: string) => void,
}

const ProfileToolBar: FC<ProfileToolBarProps> = ({selectedSeason, user, setSelectedSeason}) => {

    if (!user) {
        return (
            <div className="w-full h-16 rounded-md animate-pulse bg-dark-light/50"/>
        )
    }

    return (
        <BasicCard>
            <div className="flex justify-between items-center px-2">
                <div className="flex items-center">
                    {process.env.NEXT_PUBLIC_CURRENT_SEASON !== selectedSeason && (
                        <div className="flex items-center">
                            <div className="p-3 text-2xl bg-yellow-500 rounded-xl">
                                <FiArchive />
                            </div>
                            <div className="ml-3">
                                <h1 className="font-bold">
                                    You are currently viewing the archives from Season {selectedSeason}!
                                </h1>
                                <h2 className="text-sm">
                                    This data is not up to date anymore.
                                </h2>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex gap-3 items-center">
                    <Dropdown title={`Season ${selectedSeason}`}>
                        <div className="flex overflow-auto flex-col gap-2 p-2 bg-dark-light max-h-[300px]">
                            {Object.keys(user.minecraftUser.seasons).reverse().map((value, index) => (
                                <div key={index} onClick={() => setSelectedSeason(value)}>
                                    <DropdownItem title={`Season ${value}`}/>
                                </div>
                            ))}
                        </div>
                    </Dropdown>
                </div>
            </div>
        </BasicCard>
    )
}

export default ProfileToolBar

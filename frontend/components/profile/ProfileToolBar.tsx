import BreadCrumbs from "../common/BreadCrumbs";
import Dropdown from "../common/dropdown/Dropdown";
import DropdownItem from "../common/dropdown/DropdownItem";
import BasicCard from "../common/cards/BasicCard";
import {FC} from "react";

declare interface ProfileToolBarProps {
    pathName: string,
    selectedSeason: string,
    user?: FullUser,
    setSelectedSeason: (season: string) => void,
}

const ProfileToolBar: FC<ProfileToolBarProps> = ({pathName, selectedSeason, user, setSelectedSeason}) => {

    if (!user) {
        return (
            <div className="w-full h-16 rounded-md animate-pulse bg-dark-light/50" />
        )
    }

    return (
        <BasicCard>
            <div className="flex justify-between items-center px-2">
                <BreadCrumbs pathName={pathName}/>
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

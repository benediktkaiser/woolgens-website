import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useRouter } from 'next/router'
import {FC} from "react";
import {observer} from "mobx-react-lite";
import landStore from "../../stores/LandStore";
import Avatar from "../common/Avatar";
import Image from "next/image"
import grassBlock from "../../public/icons/grass.jpeg"

const styles = {
    zIndex: 2,
    height: "50px",
    fontSize: "20px",
    fontFamily: "Poppins",
    borderRadius: "15px",
    backgroundColor: "rgb(54,56,65)",
    hoverBackgroundColor: "rgb(43,45,53)",
    color: "#f6faff",
    iconColor: "#f6faff",
    lineColor: "#6b747f",
    placeholderColor: "#6b747f",
    border: "none",
    clearIconMargin: "3px 8px 0 0",
    cursor: "pointer",
}

declare interface AutoCompleteItem {
    id: number,
    name: string,
    type: string,
}

declare interface StatsUserSearchBarProps {
    autoCompleteItem: Array<AutoCompleteItem>
}

const StatsUserSearchBar: FC<StatsUserSearchBarProps> = observer(({autoCompleteItem}) => {
    const router = useRouter()

    const formatResult = (item) => {
        if (!!landStore.landNames[item]) {
            return (
                <div key={item} className="flex items-center py-1 space-x-3 w-full cursor-pointer">
                    <Image src={grassBlock} className="rounded" height={35} width={35} alt="Land" />
                    <p className="text-green-400">
                        {item}
                    </p>
                </div>
            )
        }

        return (
            <div key={item} className="flex items-center py-1 space-x-3 w-full cursor-pointer">
                <Avatar player={item} size={35} />
                <p className="text-blue-400">
                    {item}
                </p>
            </div>
        );
    }

    const handleOnSelect = (item: AutoCompleteItem) => {
        if (item.type === "player") {
            router.push(`/profile/${item.name}`).then(() => {
                return null;
            })
        } else if (item.type === "land") {
            router.push(`/stats/lands/${item.name}`).then(() => {
                return null;
            })
        }
    }

    return (
        <div className="mx-auto w-11/12 md:w-8/12 xl:w-1/2">
            <ReactSearchAutocomplete
                items={autoCompleteItem}
                useCaching={true}
                onSelect={handleOnSelect}
                styling={styles}
                showIcon={true}
                placeholder="Search for a player or a land..."
            />
        </div>
    )
})


export default StatsUserSearchBar

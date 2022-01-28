import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useRouter } from 'next/router'
import {FC} from "react";

const styles = {
    zIndex: 2,
    height: "50px",
    fontSize: "20px",
    fontFamily: "Poppins",
    borderRadius: "15px",
    backgroundColor: "rgb(36 38 45)",
    hoverBackgroundColor: "rgb(43,45,53)",
    color: "#f6faff",
    iconColor: "#f6faff",
    lineColor: "#6b747f",
    placeholderColor: "#6b747f",
    border: "none",
    clearIconMargin: "3px 8px 0 0",
}

declare interface Item {
    id: number,
    name: string,
    type: string,
}

declare interface StatsUserSearchBarProps {
    usernames: Array<Item>
}

const StatsUserSearchBar: FC<StatsUserSearchBarProps> = ({usernames}) => {
    const router = useRouter()

    const handleOnSelect = (item: Item) => {
        if (item.type === "player") {
            router.push(`/player/${item.name}`).then(() => {})
        } else if (item.type === "land") {
            router.push(`/stats/land/${item.name}`).then(() => {})
        }
    }

    return (
        <div className="mx-auto w-11/12 md:w-8/12 xl:w-1/2">
            <ReactSearchAutocomplete
                items={usernames}
                useCaching={true}
                onSelect={handleOnSelect}
                styling={styles}
                showIcon={true}
                placeholder="Search for a player or a land..."
            />
        </div>
    )
}


export default StatsUserSearchBar

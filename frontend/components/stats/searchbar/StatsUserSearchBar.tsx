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
    cursor: "pointer",
}

declare interface Item {
    id: number,
    name: string,
    type: string,
}

declare interface StatsUserSearchBarProps {
    items: Array<Item>
}

const formatResult = (item) => {
    return (
        <div key={item} className="flex items-center py-1 space-x-2 cursor-pointer">
            <p>{item}</p>
        </div>
    );
}

const StatsUserSearchBar: FC<StatsUserSearchBarProps> = ({items}) => {
    const router = useRouter()

    const handleOnSelect = (item: Item) => {
        if (item.type === "player") {
            router.push(`/profile/${item.name}`).then(() => {
                return null;
            })
        } else if (item.type === "land") {
            router.push(`/stats/land/${item.name}`).then(() => {
                return null;
            })
        }
    }

    return (
        <div className="mx-auto w-11/12 md:w-8/12 xl:w-1/2">
            <ReactSearchAutocomplete
                items={items}
                formatResult={formatResult}
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

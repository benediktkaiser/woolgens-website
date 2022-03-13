import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useRouter } from 'next/router'
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

declare interface StatsUserSearchBarProps {
    autoCompleteItems: AutoCompleteListItem[]
}

const StatsUserSearchBar = ({autoCompleteItems}: StatsUserSearchBarProps) => {
    const router = useRouter()

    const formatResult = (item: AutoCompleteListItem) => {
        if (item.type === "LAND") {
            return (
                <div key={item.id + "LAND"} className="flex items-center py-1 space-x-3 w-full cursor-pointer">
                    <Image src={grassBlock} className="rounded" height={35} width={35} alt="Land" />
                    <p className="text-green-400">
                        {item.name}
                    </p>
                </div>
            )
        }

        return (
            <div key={item.id + "PLAYER"} className="flex items-center py-1 space-x-3 w-full cursor-pointer">
                <Avatar player={item.name} size={35} />
                <p className="text-blue-400">
                    {item.name}
                </p>
            </div>
        );
    }

    const handleOnSelect = (item: AutoCompleteListItem) => {
        if (item.type === "PLAYER") {
            router.push(`/members/${item.name}`).then(() => {
                return null;
            })
        } else if (item.type === "LAND") {
            router.push(`/stats/lands/${item.name}`).then(() => {
                return null;
            })
        }
    }

    return (
        <div className="mx-auto w-11/12 md:w-8/12 xl:w-1/2">
            <ReactSearchAutocomplete
                items={autoCompleteItems}
                formatResult={formatResult}
                onSelect={handleOnSelect}
                styling={styles}
                showIcon={true}
                placeholder="Search for a player or a land..."
            />
        </div>
    )
}


export default StatsUserSearchBar

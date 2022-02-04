import Avatar from "../../common/Avatar";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {FC} from "react";

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

declare interface Item {
    id: number,
    name: string,
    type: string,
}

interface UserCompareSearchProps {
    setUser: (userName) => void;
    usernames: Array<Item>
}

const UserCompareSearch: FC<UserCompareSearchProps> = ({usernames, setUser}) => {

    const formatResult = (item) => {
        return (
            <div key={item} className="flex items-center py-1 space-x-3 w-full cursor-pointer">
                <Avatar player={item} size={35} />
                <p className="text-blue-400">
                    {item}
                </p>
            </div>
        );
    }

    const handleOnSelect = (item: Item) => {
        setUser(item.name)
    }

    return <ReactSearchAutocomplete
        items={usernames}
        formatResult={formatResult}
        useCaching={true}
        onSelect={handleOnSelect}
        styling={styles}
        showIcon={true}
        maxResults={5}
        placeholder="Search for a player..."
    />
}

export default UserCompareSearch

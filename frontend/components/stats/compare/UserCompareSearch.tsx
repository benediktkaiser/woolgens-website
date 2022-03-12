import Avatar from "../../common/Avatar";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

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

interface UserCompareSearchProps {
    setUser: (userName) => void;
    usernames: AutoCompleteListItem[]
}

const UserCompareSearch = ({usernames, setUser}: UserCompareSearchProps) => {

    const formatResult = (item: AutoCompleteListItem) => {
        return (
            <div key={item.id} className="flex items-center py-1 space-x-3 w-full cursor-pointer">
                <Avatar player={item.name} size={35} />
                <p className="text-blue-400">
                    {item.name}
                </p>
            </div>
        );
    }

    const handleOnSelect = (item: AutoCompleteListItem) => {
        setUser(item.name)
    }

    return <ReactSearchAutocomplete
        items={usernames}
        formatResult={formatResult}
        onSelect={handleOnSelect}
        styling={styles}
        showIcon={true}
        maxResults={5}
        placeholder="Search for a player..."
    />
}

export default UserCompareSearch

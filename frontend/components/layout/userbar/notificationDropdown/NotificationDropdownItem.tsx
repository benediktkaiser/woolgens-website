import {RiInformationLine, RiErrorWarningLine, RiCheckboxCircleLine, RiCloseCircleLine} from "react-icons/ri"

const NotificationDropdownItem = ({ notification }: { notification: WebNotification }) => {

    return (
        <div className="flex items-center p-3 w-full hover:bg-dark-light rounded-lg cursor-pointer">
            {notification.type === "success" && (
                <span className="p-2 bg-green-500 rounded-full">
                    <RiCheckboxCircleLine color="white"/>
                </span>
            )}
            {notification.type === "danger" && (
                <span className="p-2 bg-red-500 rounded-full">
                    <RiCloseCircleLine color="white"/>
                </span>
            )}{notification.type === "warning" && (
            <span className="p-2 bg-yellow-500 rounded-full">
                    <RiErrorWarningLine color="white"/>
                </span>
        )}
            {notification.type === "info" && (
                <span className="p-2 bg-blue-500 rounded-full">
                    <RiInformationLine color="white"/>
                </span>
            )}
            <div className="ml-2 text-sm truncate">
                {notification.title}
            </div>
        </div>
    )
}

export default NotificationDropdownItem

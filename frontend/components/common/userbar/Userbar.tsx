import {FC} from "react";
import UserDropdown from "../dropdown/userDropdown/UserDropdown";
import NotificationDropdown from "../dropdown/notificationDropdown/NotificationDropdown";
import MessageDropdown from "../dropdown/messageDropdown/MessageDropdown";
import UserbarLink from "./UserbarLink";
import {RiDashboard3Line, RiMailLine, RiNotificationLine} from "react-icons/ri"

declare interface UserbarProps {
    username: string;
}

const demoNotifications: WebNotification[] = [
    {
        title: "Response on your Ticket#6564",
        message: "ReaperMaga responded to your Ticket#6564",
        type: "info",
        link: "/support/ticket/6564",
    },
    {
        title: "Your staff application was denied",
        message: "Sadly, your staff application was denied. Thank you for your interest in joining our team.",
        type: "danger",
        link: "/apply/6564",
    },
    {
        title: "Your ban appeal was accepted",
        message: "Congratulations! Your ban appeal was accepted. Welcome back to Woolgens.",
        type: "success",
        link: "/support/appeal/432",
    },
    {
        title: "You received a warning!",
        message: "You received a warning for your behavior on our forums! Please be respectful and read our rules.",
        type: "warning",
        link: "/",
    }
]

const Userbar: FC<UserbarProps> = ({ username }) => {
    return (
        <div className="py-1 w-full bg-dark-light">
            <div className="container flex justify-between mx-auto">
                <div className="flex items-center md:space-x-3">
                    <UserbarLink title="Staff Dashboard" to="/staff" icon={<RiDashboard3Line />} />
                </div>
                <div className="flex items-center md:space-x-4">
                    <div className="hidden sm:flex items-center md:space-x-4">
                        <MessageDropdown />
                        <NotificationDropdown notifications={demoNotifications} />
                    </div>
                    <div className="flex sm:hidden items-center">
                        <UserbarLink title="Messages" to="/messages" icon={<RiMailLine />} />
                        <UserbarLink title="Notifications" to="/notifications" icon={<RiNotificationLine />} />
                    </div>
                    <UserDropdown username={username} />
                </div>
            </div>
        </div>
    )
}

export default Userbar

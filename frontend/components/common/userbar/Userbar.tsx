import {FC} from "react";
import UserDropdown from "../dropdown/userDropdown/UserDropdown";
import NotificationDropdown from "../dropdown/notificationDropdown/NotificationDropdown";
import UserbarLink from "./UserbarLink";
import {RiDashboard3Line, RiNotificationLine} from "react-icons/ri"

declare interface UserbarProps {
    webUser: WebUser
    minecraftUser: MinecraftUser
}

const Userbar: FC<UserbarProps> = ({ webUser, minecraftUser }) => {
    return (
        <div className="py-1 w-full bg-dark-light shadow">
            <div className="container flex justify-between mx-auto">
                <div className="flex items-center md:space-x-3">
                    <UserbarLink title="Staff Dashboard" to="/staff" icon={<RiDashboard3Line />} />
                </div>
                {webUser ? (
                    <div className="flex items-center">
                        <div className="hidden sm:flex items-center md:space-x-4">
                            <NotificationDropdown notifications={webUser.notifications} />
                        </div>
                        <div className="flex sm:hidden items-center">
                            <UserbarLink title="Notifications" to="/notifications" icon={<RiNotificationLine />} />
                        </div>
                        <UserDropdown webUser={webUser} minecraftUser={minecraftUser} />
                    </div>
                ) : (
                    <div className="flex items-center md:space-x-4">
                        <UserbarLink title="Register" to="/auth/register" />
                        <UserbarLink title="Login" to="/auth/login" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Userbar

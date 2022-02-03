import {FC} from "react";
import UserDropdown from "../dropdown/userDropdown/UserDropdown";
import NotificationDropdown from "../dropdown/notificationDropdown/NotificationDropdown";
import UserbarLink from "./UserbarLink";
import {RiDashboard3Line, RiNotificationLine, RiLoginBoxLine, RiUserAddLine} from "react-icons/ri"

declare interface UserbarProps {
    user: User
}

const Userbar: FC<UserbarProps> = ({ user }) => {
    return (
        <div className="py-1 w-full bg-dark-light shadow">
            <div className="container flex justify-between mx-auto">
                <div className="flex items-center md:space-x-3">
                    <UserbarLink title="Staff Dashboard" to="/staff" icon={<RiDashboard3Line />} />
                </div>
                {user ? (
                    <div className="flex items-center">
                        <div className="hidden sm:flex items-center md:space-x-4">
                            <NotificationDropdown notifications={user.webUser.notifications} />
                        </div>
                        <div className="flex sm:hidden items-center">
                            <UserbarLink title="Notifications" to="/notifications" icon={<RiNotificationLine />} />
                        </div>
                        <UserDropdown user={user} />
                    </div>
                ) : (
                    <div className="flex items-center md:space-x-4">
                        <UserbarLink title="Register" to="/auth/register" icon={<RiUserAddLine />} />
                        <UserbarLink title="Login" to="/auth/login" icon={<RiLoginBoxLine />} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Userbar

import {FC} from "react";
import UserDropdown from "../dropdown/userDropdown/UserDropdown";
import NotificationDropdown from "../dropdown/notificationDropdown/NotificationDropdown";
import UserbarLink from "./UserbarLink";
import {RiNotificationLine, RiLoginBoxLine, RiUserAddLine} from "react-icons/ri"
import authStore from "../../../stores/AuthStore";
import {GiPartyPopper} from "react-icons/gi"
import {AiOutlineLoading3Quarters, AiOutlineDashboard} from "react-icons/ai"
import Link from "next/link"

declare interface UserbarProps {
    user: User,
    loading?: boolean,
}

const Userbar: FC<UserbarProps> = ({ user, loading = false }) => {
    return (
        <div className="py-1 w-full shadow bg-dark-light/40">
            <div className="container flex justify-between mx-auto">
                <div className="flex items-center md:space-x-3">
                    {(loading || !user || !user?.webUser.group.isStaff) ? (
                        <span className="flex items-center text-sm">
                            <GiPartyPopper className="mr-2"/>
                            Welcome to the new WoolGens homepage!
                        </span>
                    ) : <Link href="/staff" passHref={true}><a><UserbarLink title="Staff Panel" icon={<AiOutlineDashboard />} /></a></Link>}
                </div>
                {loading ? (
                    <div className="flex items-center md:space-x-2">
                        <UserbarLink title="Logging in..." iconRight={<AiOutlineLoading3Quarters className="animate-spin" />} />
                    </div>
                ): (
                    <div>
                        {user ? (
                            <div className="flex items-center">
                                <div className="hidden sm:flex items-center md:space-x-4">
                                    <NotificationDropdown notifications={user.webUser.notifications} />
                                </div>
                                <div className="flex sm:hidden items-center">
                                    <Link href="/notifications" passHref={true}>
                                        <a>
                                            <UserbarLink title="Notifications" icon={<RiNotificationLine />} />
                                        </a>
                                    </Link>
                                </div>
                                <UserDropdown user={user} />
                            </div>
                        ) : (
                            <div className="flex items-center md:space-x-2">
                                <div onClick={authStore.toggleRegisterModal}>
                                    <UserbarLink title="Register" icon={<RiUserAddLine />} />
                                </div>
                                <div onClick={authStore.toggleLoginModal}>
                                    <UserbarLink title="Login" icon={<RiLoginBoxLine />} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Userbar

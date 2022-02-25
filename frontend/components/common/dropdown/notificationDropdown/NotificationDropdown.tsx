import React, {FC, Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import UserbarLink from "../../userbar/UserbarLink";
import {RiNotificationLine, RiNotificationOffLine} from "react-icons/ri";
import {BaseButton} from "../../BaseButton";
import NotificationDropdownItem from "./NotificationDropdownItem";

declare interface NotificationDropDownProps {
    notifications?: WebNotification[]
}

const NotificationDropdown: FC<NotificationDropDownProps> = ({ notifications}) => {

    return (
        <Menu as="div" className="inline-block relative text-left">
            <Menu.Button>
                <UserbarLink title="Notifications" icon={<RiNotificationLine />} ping={notifications.length > 0} />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="overflow-hidden absolute right-0 z-10 p-3 mt-3 w-80 bg-dark-light rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
                    {notifications.length > 0 ? (
                        <div className="overflow-auto max-h-[300px]">
                            {notifications.map((notification, index) =>
                                <NotificationDropdownItem key={index} notification={notification} />
                            )}
                        </div>
                    ): (
                        <div className="my-4 leading-4 text-center">
                            <RiNotificationOffLine className="my-4 mx-auto" size="2.5rem" />
                            <h1 className="font-semibold">
                                All done here!
                            </h1>
                            <span className="text-xs">
                            You have no new notifications!
                        </span>
                        </div>
                    )}

                    <hr className="my-3 border-gray-700"/>
                    <div className="flex justify-center my-1">
                        <BaseButton type="danger" className="text-xs">
                            Mark all as read
                        </BaseButton>
                        <BaseButton type="primary" className="ml-2 text-xs">
                            All notifications
                        </BaseButton>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NotificationDropdown

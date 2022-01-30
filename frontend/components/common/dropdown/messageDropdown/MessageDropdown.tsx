import React, {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import UserbarLink from "../../userbar/UserbarLink";
import {RiMailLine, RiInboxLine} from "react-icons/ri";
import {BaseButton} from "../../BaseButton";

const MessageDropdown = () => {

    return (
        <Menu as="div" className="inline-block relative text-left">
            <Menu.Button>
                <UserbarLink title="Messages" icon={<RiMailLine />} />
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
                    <div className="my-4 leading-4 text-center">
                        <RiInboxLine className="my-4 mx-auto" size="2.5rem" />
                        <h1 className="font-semibold">
                            All done here!
                        </h1>
                        <span className="text-xs">
                            You have no new messages!
                        </span>
                    </div>

                    <hr className="my-3 border-gray-700"/>
                    <div className="flex justify-center my-1">
                        <BaseButton type="success" className="ml-2 text-xs">
                            New message
                        </BaseButton>
                        <BaseButton type="primary" className="ml-2 text-xs">
                            All messages
                        </BaseButton>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MessageDropdown

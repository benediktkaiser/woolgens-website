import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import {HiChevronDown} from "react-icons/hi";

const Collapse = ({title, children, isOpen = false}: {title: string, children: React.ReactNode, isOpen?: boolean}) => {
    const [isShowing, setIsShowing] = useState(isOpen)

    return (
        <div className="overflow-hidden h-full">
            <div
                className={`cursor-pointer select-none relative z-10 w-full ${isShowing ? 'mb-3': 'mb-0'}`}
                onClick={() => setIsShowing(!isShowing)}
            >
                <div className="flex gap-2 items-center">
                    <HiChevronDown size="1.3rem" className={`transition mt-[1px] ${isShowing && 'rotate-180'}`} />
                    {title}
                </div>
            </div>
            <Transition
                show={isShowing}
                appear={true}
                enter="transition duration-200"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition duration-200"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
            >
                <div className="w-full rounded-lg bg-dark/70">
                    {children}
                </div>
            </Transition>
        </div>
    )
}

export default Collapse

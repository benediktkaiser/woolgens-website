import React, {FC} from "react";
import {Transition} from '@headlessui/react'

interface AnimatedFadeDownProps {
    children?: React.ReactNode
    duration?: string
}

const AnimatedFadeDown: FC<AnimatedFadeDownProps> = ({duration = "duration-500", children}) => {
    return (
        <Transition
            appear={true}
            show={true}
            enter={`transition ${duration}`}
            enterFrom="opacity-0 -translate-y-1/2"
            enterTo="opacity-100 translate-y-0"
        >
            {children}
        </Transition>
    )
}

export default AnimatedFadeDown

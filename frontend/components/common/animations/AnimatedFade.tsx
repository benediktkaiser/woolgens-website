import React, {FC} from "react";
import {Transition} from '@headlessui/react'

interface AnimatedFadeProps {
    children?: React.ReactNode
    duration?: string
}

const AnimatedFade: FC<AnimatedFadeProps> = ({duration = "duration-500", children}) => {
    return (
        <Transition
            appear={true}
            show={true}
            enter={`transition ${duration}`}
            enterFrom="opacity-0"
            enterTo="opacity-100"
        >
            {children}
        </Transition>
    )
}

export default AnimatedFade

import React from "react";
import {Transition} from '@headlessui/react'

interface AnimatedFadeProps {
    duration?: string,
    children?: React.ReactNode
}

const AnimatedFade = ({duration = "duration-500", children}: AnimatedFadeProps) => {
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

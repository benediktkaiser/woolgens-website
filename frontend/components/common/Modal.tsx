import {Dialog, Transition} from '@headlessui/react'
import React, {FC, Fragment} from 'react'

declare interface ModalProps {
    isOpen: boolean
    toggleModal: () => void
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({isOpen, toggleModal, children}) => {

    const toggle = () => {
        toggleModal()
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10"
                onClose={toggle}
            >
                <div className="min-h-screen text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black/80" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95" >
                        <div className="inline-block overflow-hidden w-full text-left align-middle shadow-2xl transition-all transform">
                            { children }
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal

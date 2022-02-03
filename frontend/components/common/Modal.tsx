import {Dialog, Transition} from '@headlessui/react'
import React, {FC, Fragment} from 'react'

declare interface ModalProps {
    isOpen: boolean
    title: string
    classes: string
    toggleModal: () => void
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({isOpen, title, classes, toggleModal, children}) => {

    const styles = [
        classes,
        "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
    ].join(' ')

    const toggle = () => {
        toggleModal()
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="overflow-y-auto fixed inset-0 z-10"
                onClose={toggle}
            >
                <div className="px-4 min-h-screen text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm" />
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
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className={styles}>
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                { title }
                            </Dialog.Title>
                            { children }
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal

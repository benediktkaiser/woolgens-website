import {AiFillStar} from "react-icons/ai"
import {useState} from "react";
import Modal from "../../../common/Modal";
import {COLOR_CODES} from "../../../../core/constants";

const ProfileBadge = ({badge}: {badge: Badge}) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="group relative text-center cursor-pointer" onClick={() => setOpen(true)}>
                <svg className="fill-dark-light" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"
                     width="120px" height="150px" viewBox="0 0 216 232">
                    <path fill="current" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
                </svg>
                <div className="flex absolute top-0 flex-col justify-between w-full h-full">
                    <div className="py-2 rounded-t-xl" style={{backgroundColor: COLOR_CODES[badge.color]}}>
                        <h1 className="px-4 font-bold leading-5 text-dark-light">
                            {badge.title}
                        </h1>
                    </div>
                    <div className="text-xs text-gray-500">
                        {new Date(badge.received).toLocaleDateString()}
                    </div>
                    <div className="flex gap-0 group-hover:gap-1 items-center mx-auto mb-9 w-min transition-all" style={{color: COLOR_CODES[badge.color]}}>
                        <AiFillStar size="0.6rem" />
                        <AiFillStar size="0.6rem" />
                        <AiFillStar size="0.6rem" />
                    </div>
                </div>
            </div>
            <Modal isOpen={open} toggleModal={() => setOpen(!open)} maxWidth="w-[250px]">
                <div className="group relative text-center">
                    <svg className="fill-dark-light" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"
                         width="250px" height="240px" viewBox="0 0 216 232">
                        <path fill="current" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
                    </svg>
                    <div className="flex absolute top-0 flex-col justify-between w-full h-full">
                        <div className="py-5 rounded-xl" style={{backgroundColor: COLOR_CODES[badge.color]}}>
                            <h1 className="text-2xl font-bold leading-5 text-dark-light">
                                {badge.title}
                            </h1>
                            <hr className="my-2 mx-8 border-dark-light" />
                            <h2 className="px-4 text-sm font-light text-dark-dark">
                                {badge.description}
                            </h2>
                        </div>
                        <div className="text-gray-500">
                            Acquired: <br />
                            {new Date(badge.received).toLocaleDateString()}
                        </div>
                        <div className="flex gap-0 group-hover:gap-2 items-center mx-auto mb-9 w-min transition-all" style={{color: COLOR_CODES[badge.color]}}>
                            <AiFillStar size="0.8rem" />
                            <AiFillStar size="0.8rem" />
                            <AiFillStar size="0.8rem" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProfileBadge

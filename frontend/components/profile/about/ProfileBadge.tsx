import {AiFillStar} from "react-icons/ai"
import {FC} from "react";
import {colorCodes} from "../../../core/formatters";

interface ProfileBadeProps {
    badge: Badge
}

const ProfileBadge: FC<ProfileBadeProps> = ({badge}) => {
    return (
        <div className="group relative text-center">
            <svg className="fill-dark-light" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"
                 width="105px" height="140px" viewBox="0 0 216 232">
                <path fill="current" d="M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169 c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z" />
            </svg>
            <div className="flex absolute top-0 flex-col justify-between w-full h-full">
                <div className="py-3 rounded-t-xl" style={{backgroundColor: colorCodes[badge.color]}}>
                    <h1 className="px-4 font-bold leading-5 text-dark-light">
                        {badge.title}
                    </h1>
                </div>
                <div className="flex gap-0 group-hover:gap-2 items-center mx-auto mb-9 w-min transition-all" style={{color: colorCodes[badge.color]}}>
                    <AiFillStar size="0.8rem" />
                    <AiFillStar size="0.8rem" />
                    <AiFillStar size="0.8rem" />
                </div>
            </div>
        </div>
    )
}

export default ProfileBadge

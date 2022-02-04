import {FC} from "react";
import {FiArrowLeft, FiArrowRight, FiMinus} from "react-icons/fi"

interface UserCompareArrowRowProps {
    value1: number
    value2: number
}

const UserCompareArrowRow: FC<UserCompareArrowRowProps> = ({ value1, value2 }) => {
    if (value1 > value2 || value2 == undefined && value1) {
        return (
            <div className="flex flex-col justify-center mx-auto text-4xl text-gray-400 h-[54px]">
                <FiArrowLeft />
            </div>
        )
    }

    if (value1 < value2 || value1 == undefined && value2) {
        return (
            <div className="py-2 my-auto mx-auto text-4xl text-gray-400 h-[54px]">
                <FiArrowRight />
            </div>
        )
    }

    return (
        <div className="py-2 my-auto mx-auto text-4xl text-gray-400 h-[54px]">
            <FiMinus />
        </div>
    )
}

export default UserCompareArrowRow

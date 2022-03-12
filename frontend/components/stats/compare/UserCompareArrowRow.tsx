import {FiMinus} from "react-icons/fi"
import {GiCrown} from "react-icons/gi";

interface UserCompareArrowRowProps {
    value1: number
    value2: number
}

const UserCompareArrowRow = ({ value1, value2 }: UserCompareArrowRowProps) => {
    if (value1 > value2 || value2 == undefined && value1) {
        return (
            <div className="flex justify-center items-center mx-auto text-4xl text-gray-400 h-[54px]">
                <GiCrown size="1.8rem" className="text-yellow-600" />
                <div className="w-10" />
                <GiCrown size="1.8rem" className="text-shark-200" />
            </div>
        )
    }

    if (value1 < value2 || value1 == undefined && value2) {
        return (
            <div className="flex justify-center items-center mx-auto text-4xl text-gray-400 h-[54px]">
                <GiCrown size="1.8rem" className="text-shark-200" />
                <div className="w-10" />
                <GiCrown size="1.8rem" className="text-yellow-600" />
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

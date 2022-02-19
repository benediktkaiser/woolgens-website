import React, {FC} from "react";
import UserCompareSearch from "./UserCompareSearch";
import {FiX} from "react-icons/fi"
import Link from "next/link"
import Avatar from "../../common/Avatar";
import UserCompareStats from "./UserCompareStats";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

interface UserCompareBoxProps {
    user?: User
    setUser: (userName) => void;
    usernames: Array<AutoCompleteListItem>
    season: string
    isLoading: boolean
}

const UserCompareBox: FC<UserCompareBoxProps> = ({user, setUser, usernames, season, isLoading}) => {

    if (!user) {
        return (
            <div className="h-full">
                <div className="relative w-full rounded-lg">
                    <div className="my-2 h-24">
                        <h1 className="mb-2 text-2xl text-center">
                            Select a user to compare
                        </h1>
                        <UserCompareSearch setUser={setUser} usernames={usernames} />
                    </div>
                </div>
                <div className="relative p-6 bg-dark-light rounded-lg h-[914px]">
                    {isLoading ? (
                        <div className="flex absolute top-0 left-0 flex-col justify-center w-full h-full text-center rounded-lg">
                            <AiOutlineLoading3Quarters size="2rem" className="mx-auto animate-spin" />
                            <h1 className="my-2 text-xl">Loading...</h1>
                        </div>
                    ): (
                        <div className="flex absolute top-0 left-0 flex-col justify-center w-full h-full text-center rounded-lg">
                            <h1 className="my-2 text-2xl">Please select a user!</h1>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="w-full rounded-lg">
                <div className="flex justify-center items-start h-28">
                    <div className="flex items-center h-full">
                        <Avatar player={user.uuid} size={60} />
                        <Link href={`/profile/${user.name}`} passHref={true}>
                            <a className="ml-4 text-4xl text-gray-300 hover:text-white">
                                {user.minecraftUser.name}
                            </a>
                        </Link>
                        <FiX size="1.5rem" className="p-1 ml-3 text-white bg-red-500 hover:bg-red-400 rounded-full cursor-pointer" onClick={() => setUser(undefined)} />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden p-6 bg-dark-light rounded-lg h-[914px]">
                <UserCompareStats user={user} season={season} />
            </div>
        </div>
    )
}
export default  UserCompareBox

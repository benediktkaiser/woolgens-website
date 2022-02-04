import {FC} from "react";
import UserCompareSearch from "./UserCompareSearch";
import {FiX} from "react-icons/fi"
import Link from "next/link"
import Avatar from "../../common/Avatar";
import UserCompareStats from "./UserCompareStats";

declare interface Item {
    id: number,
    name: string,
    type: string,
}

interface UserCompareBoxProps {
    user?: User
    setUser: (userName) => void;
    usernames: Array<Item>
    season: string
}

const UserCompareBox: FC<UserCompareBoxProps> = ({user, setUser, usernames, season}) => {

    if (!user) {
        return (
            <div className="h-full">
                <div className="w-full rounded-lg">
                    <div className="my-2 h-24">
                        <h1 className="mb-2 text-2xl text-center">
                            Select a user to compare
                        </h1>
                        <UserCompareSearch setUser={setUser} usernames={usernames} />
                    </div>
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
            <div className="p-6 bg-dark-light rounded-lg">
                <UserCompareStats user={user} season={season} />
            </div>
        </div>
    )
}
export default  UserCompareBox

import {FC} from "react";
import Link from "next/link"
import Avatar from "../../common/Avatar";

declare interface LandMemberRowProps {
    member: LandMember
}

const LandMemberRow: FC<LandMemberRowProps> = ({member}) => {
    return (
        <Link href={`/profile/${member.name}`} passHref={true}>
            <a className="p-3 w-full hover:bg-dark-light rounded-xl cursor-pointer">
                <div className="flex justify-between items-center">
                    <div className="flex overflow-hidden items-center max-w-[65%]">
                        <div className="flex-none">
                            <Avatar player={member.uuid} size={40}/>
                        </div>
                        <div className="ml-4">
                            <h1 className="flex items-center mb-px text-lg sm:text-2xl">
                                {member.name}
                            </h1>
                        </div>
                    </div>
                    <span className="py-2 px-4 text-white rounded-full"
                          style={{backgroundColor: member.landRole.color}}>
                            {member.landRole.name}
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default LandMemberRow

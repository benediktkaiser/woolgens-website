import Link from "next/link"
import Avatar from "../../common/Avatar";

const LandMemberRow = ({member}: {member: LandMember}) => {
    let backgroundColor = '#ea0a0a'

    if (member.landRole.color === "RED") {
        backgroundColor = "#ff5656"
    }
    if (member.landRole.color === "LIGHT_BLUE") {
        backgroundColor = "#55beff"
    }
    if (member.landRole.color === "LIME") {
        backgroundColor = "#88b52d"
    }


    return (
        <Link href={`/members/${member.name}`} passHref={true}>
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
                          style={{backgroundColor}}>
                            {member.landRole.name}
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default LandMemberRow

import Image from "next/image";
import {FC} from "react";

declare interface AvatarProps {
    player: string,
    size: number
}

const Avatar: FC<AvatarProps> = ({player, size}) => {
    return (
        <div>
            <Image height={size} width={size} className="rounded" src={`https://cravatar.eu/helmavatar/${player}/${size}`} alt="" />
        </div>
    )
}

export default Avatar

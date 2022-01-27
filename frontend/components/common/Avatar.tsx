import Image from "next/image";
import {FC} from "react";

declare interface AvatarProps {
    player: string,
    size: number
}

const Avatar: FC<AvatarProps> = ({player, size}) => {
    return <Image height={size} width={size} className="rounded" src={`https://cravatar.eu/helmavatar/${player}/${size}`} alt="" />
}

export default Avatar

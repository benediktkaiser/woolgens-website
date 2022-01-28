import {FC} from "react";
import Image from "next/image";

declare interface BustProps {
    uuid: string,
    size: number,
}

const Bust: FC<BustProps> = ({uuid, size}) => {
    return <Image height={size} width={size} className="rounded" src={`https://visage.surgeplay.com/bust/${size}/${uuid}`} alt="" />

}

export default Bust

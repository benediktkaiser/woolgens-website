import Image from "next/image";

interface BustProps {
    uuid: string,
    size: number,
    facing?: "left" | "right" | "forward",
}

const Bust = ({uuid, size, facing= "right"}: BustProps) => {
    if (facing === "forward") {
        return <Image height={size} width={size} className="rounded png-shadow" src={`https://visage.surgeplay.com/front/${size}/${uuid}`} alt="" />
    }
    if (facing === "left") {
        return (
            <div style={{transform: "scaleX(-1)"}} >
                <Image height={size} width={size} className="rounded png-shadow" src={`https://visage.surgeplay.com/bust/${size}/${uuid}`} alt="" />
            </div>
        )
    }

    return <Image height={size} width={size} className="rounded png-shadow" src={`https://visage.surgeplay.com/bust/${size}/${uuid}`} alt="" />
}

export default Bust

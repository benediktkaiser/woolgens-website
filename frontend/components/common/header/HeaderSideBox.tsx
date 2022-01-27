import React, {FC} from "react";

declare interface HeaderSideBoxProps {
    icon: React.ReactNode,
    title: string,
    subtitle: string,
    count: number,
    color: string,
    onClick?: () => void,
}

const HeaderSideBox: FC<HeaderSideBoxProps> = ({ title, subtitle, color, count, onClick, icon }) => {

    return (
        <div onClick={onClick} className="group hidden md:block relative mt-14 transition ease-in-out hover:scale-105 cursor-pointer select-none">
            <div className="flex justify-between items-center py-4 px-8 rounded-2xl bg-dark-dark/60 group-hover:bg-dark-dark/80">
                {icon}
                <div className="hidden lg:block ml-5 leading-3">
                    <h1 className="text-lg">{title}</h1>
                    <p className="text-sm text-gray-400">{subtitle}</p>
                </div>
            </div>
            <span className="absolute -top-3 -right-5">
                <span className={`inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping ${color}`} />
                <span className={`inline-flex relative px-3 pt-0.5 rounded-lg ${color}`}>{count}</span>
            </span>
        </div>
    )
}

export default HeaderSideBox

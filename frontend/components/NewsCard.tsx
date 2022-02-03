import Avatar from "./common/Avatar";
import React, {FC} from "react";
import McText from 'mctext-react'
import Link from "next/link"

declare interface NewsContainerProps {
    changelog: ChangeLog
}

const NewsCard: FC<NewsContainerProps> = ({changelog}) => {
    const month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    return (
        <div className="group relative w-full transition ease-in-out hover:scale-101">
            <div className="hidden xl:block absolute top-8 left-0 z-0 h-full transition ease-in-out group-hover:-translate-x-full">
                <div
                    className="py-4 pr-1 pl-2 leading-none text-center bg-red-600 rounded-l-lg border-b-4 border-red-800">
                    <h1 className="text-2xl font-bold">
                        {new Date(changelog.timestamp).getDate()}
                    </h1>
                    <h2 className="text-xl uppercase">
                        {month[new Date(changelog.timestamp).getUTCMonth()]}
                    </h2>
                </div>
            </div>
            <div className="relative z-10 p-4 w-full bg-dark-light rounded-lg shadow-xl min-h-[200px]">
                <div className="flex justify-between items-center">
                    <h1 className="flex-grow mr-5 text-3xl font-bold">
                        {changelog.title ? changelog.title : `Version ${changelog.id}`}
                        <hr className="mt-4 border-gray-700"/>
                    </h1>
                    <Link href={`/profile/${changelog.author}`} passHref={true}>
                        <a className="cursor-pointer">
                            <Avatar player={changelog.author} size={70}/>
                        </a>
                    </Link>
                </div>
                <div className="my-3">
                    {changelog.lines.map((content, index) => (
                        <p key={index} className="text-xl tracking-wider min-h-[18px]">
                            <McText prefix="&" style={{fontFamily: "poppins"}}>
                                {content}
                            </McText>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsCard

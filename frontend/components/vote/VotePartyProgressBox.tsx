import Image from "next/image";
import chest from "../../public/assets/chest.webp";
import React from "react";

const VotePartyProgressBox = () => {
    return (
        <div className="overflow-hidden relative p-5 bg-gradient-to-r rounded-lg from-purple-700/80 to-purple-900/80">
            <div className="absolute -top-5 -right-5">
                <Image src={chest} alt="chest" height="175px" width="175px" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700/50 to-purple-900/50" />

            <div className="flex relative justify-between items-end">
                <div className="max-w-[80%]">
                    <h1 className="text-2xl font-bold">
                        Vote Party counter
                    </h1>
                    <h3 className="text-sm text-purple-300">
                        Every 100 votes, we will host a <span className="font-bold">Vote Party</span>. When this vote party
                        happens every online user, who has also voted, will receive some more bonus rewards on top of their
                        vote rewards!
                        Make sure to follow the progress of the <span className="font-bold">Vote Party</span> and join once it is about to start!
                    </h3>
                </div>
                <h4 className="hidden lg:block text-2xl font-bold">
                    54/100
                </h4>
            </div>
            <div className="overflow-hidden relative mt-2 w-full h-4 rounded-full bg-dark-light/50">
                <div
                    className="absolute py-0.5 pl-4 w-full h-full text-sm leading-3 text-gray-100 bg-purple-400 rounded-l-full"
                    style={{width: `50%`}}/>
            </div>
        </div>
    )
}

export default VotePartyProgressBox

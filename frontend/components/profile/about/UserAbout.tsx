import React from "react";

const UserAbout = () => {
    return (
        <div>
            <h1 className="mb-2 text-xl text-gray-300">
                About:
            </h1>
            <hr className="mb-2 border-dark-light" />
            <div className="flex justify-between w-full">
                <div className="text-lg leading-10 text-gray-500">
                    <h1>
                        Birthday:
                    </h1>
                    <h1>
                        Age:
                    </h1>
                    <h1>
                        Pronouns:
                    </h1>
                    <h1>
                        Discord:
                    </h1>
                </div>
                <div className="text-lg leading-10 text-right text-gray-400">
                    <h1>
                        22 September 2001
                    </h1>
                    <h1>
                        20 years old
                    </h1>
                    <h1>
                        All pronouns
                    </h1>
                    <h1>
                        tsuuki#6991
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default UserAbout

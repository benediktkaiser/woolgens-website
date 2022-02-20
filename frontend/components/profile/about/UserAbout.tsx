import React, {FC} from "react";

interface UserAboutProps {
    user: User
}

const UserAbout: FC<UserAboutProps> = ({user}) => {
    if (!user.webUser) {
        return (
            <div className="mt-2">
                <div className="leading-10 text-center">
                    <h1 className="text-xl">
                        This account has not been verified yet.
                    </h1>
                    <h2 className="text-gray-400">
                        If this is your account claim it by executing <span className="py-1 px-2 bg-dark-dark rounded">/register</span> on woolgens.net!
                    </h2>
                </div>
            </div>
        )
    }

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

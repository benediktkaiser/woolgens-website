interface OnlinePingProps {
    status?: "online" | "offline" | "idle"
}

const OnlinePing = ({status = "offline"}: OnlinePingProps) => {
    if (status === "online") {
        return (
            <div className="flex gap-2 items-center py-1.5 px-2 rounded-lg shadow-2xl bg-dark-light/75">
                <span className="relative w-3 h-3">
                    <span className={`inline-flex w-full h-full absolute top-0 left-0 rounded-full bg-green-500`} />
                    <span className={`inline-flex absolute top-0 left-0 w-full h-full rounded-full opacity-75 animate-ping bg-green-500`}/>
                </span>
                <span className="text-xs">
                    Online
                </span>
            </div>
        )
    }

    if (status === "idle") {
        return (
            <div className="flex gap-2 items-center py-1.5 px-2 rounded-lg shadow-2xl bg-dark-light/75">
                <span className="relative w-3 h-3">
                    <span className={`inline-flex w-full h-full absolute top-0 left-0 rounded-full bg-yellow-500`} />
                </span>
                <span className="text-xs">
                    Idle
                </span>
            </div>
        )
    }

    return (
        <div className="flex gap-2 items-center py-1.5 px-2 rounded-lg shadow-2xl bg-dark-light/75">
            <span className="relative w-3 h-3">
                <span className={`inline-flex w-full h-full absolute top-0 left-0 rounded-full bg-red-500`} />
            </span>
            <span className="text-xs">
                Offline
            </span>
        </div>
    )
}

export default OnlinePing

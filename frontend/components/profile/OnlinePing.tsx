const OnlinePing = () => {
    return (
        <span className="relative mx-1.5 w-3 h-3">
            <span className={`inline-flex w-full h-full absolute top-0 left-0 rounded-full bg-green-500`}/>
            <span className={`inline-flex absolute top-0 left-0 w-full h-full rounded-full opacity-75 animate-ping bg-green-500`}/>
        </span>
    )
}

export default OnlinePing

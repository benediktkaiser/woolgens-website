import {FC} from "react";

interface TicketStatusButtonProps {
    status: TicketStatus
    select: (statusId: string) => void,
}

const TicketStatusButton: FC<TicketStatusButtonProps> = ({status, select}) => {
    return (
        <div onClick={() => select(status.id)} className="flex justify-between items-center py-2 px-4 w-full hover:bg-dark-light rounded-lg cursor-pointer">
            <div>
                <h1 className="text-lg text-gray-200">
                    {status.label}
                </h1>
                <h3 className="text-sm text-gray-500">
                    {status.id}
                </h3>
            </div>
        </div>
    )
}

export default TicketStatusButton

import ChangeLogItem from "./ChangeLogItem";
import {FC} from "react";

declare interface ChangeLogGridProps {
    changelogs: ChangeLog[]
}

const ChangeLogGrid: FC<ChangeLogGridProps> = ({changelogs}) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {changelogs.map((changeLog, index) => <ChangeLogItem key={index} changelog={changeLog} />)}
        </div>
    )
}

export default ChangeLogGrid

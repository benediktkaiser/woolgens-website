import {SortableContainer} from "react-sortable-hoc";
import SortableFormBlock from "./SortableFormBlock";

const SortableFormBlocks = SortableContainer(({items, deleteBlock}: {items: TicketInput[], deleteBlock: (id: string) => void}) => {
    return (
        <ul className="flex flex-col space-y-2">
            {items.map((value, index) => (
                <SortableFormBlock key={index} index={index} value={value} deleteBlock={deleteBlock} />
            ))}
        </ul>
    );
});

export default SortableFormBlocks

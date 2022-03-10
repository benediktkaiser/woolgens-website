import {SortableContainer} from "react-sortable-hoc";
import SortableFormBlock from "./SortableFormBlock";

const SortableFormBlocks = SortableContainer(({items, deleteBlock, selectBlock}: {items: TicketInput[], deleteBlock: (id: string) => void, selectBlock: (input: TicketInput) => void}) => {
    return (
        <ul className="flex overflow-y-auto flex-col space-y-2 max-h-[600px]">
            {items.map((value, index) => (
                <SortableFormBlock key={index} index={index} value={value} deleteBlock={deleteBlock} selectBlock={selectBlock} />
            ))}
        </ul>
    );
});

export default SortableFormBlocks

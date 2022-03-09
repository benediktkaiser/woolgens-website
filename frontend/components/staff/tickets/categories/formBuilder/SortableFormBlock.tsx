import {SortableElement} from "react-sortable-hoc";

const SortableItem = SortableElement(({value, deleteBlock}: { value: TicketInput, deleteBlock: (id: string) => void }) => {

    return (
        <li className="p-4 w-full rounded cursor-pointer bg-dark-light/60" style={{listStyle: "none"}}>
            <div className="flex justify-between items-center">
                <h1 className="text-xl">
                    {value.label}
                </h1>
                <div className="flex items-center">
                    <button className="flex items-center py-2 px-6 bg-shark-300 hover:bg-shark-200 rounded-l-lg border-l-8 border-blue-400">
                        Edit
                    </button>
                    <button onClick={() => deleteBlock(value.id)} className="flex items-center py-2 px-6 bg-shark-300 hover:bg-shark-200 rounded-r-lg border-r-8 border-red-500">
                        Remove
                    </button>
                </div>
            </div>
        </li>
    )
});

export default SortableItem

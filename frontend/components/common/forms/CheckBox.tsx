import {ChangeEvent, FC} from "react";

interface CheckBoxProps {
    title: string,
    checked: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: FC<CheckBoxProps> = ({title, checked, onChange}) => {
    return (
        <div className="mx-1">
            <label className="inline-flex items-center text-lg">
                {title}
                <input
                    checked={checked}
                    onChange={onChange}
                    className="ml-2 w-5 h-5 text-accent-500 bg-shark-500 rounded border border-shark-400 focus:ring-shark-400 focus:ring-offset-0"
                    type="checkbox" />
            </label>
        </div>
    )
}

export default CheckBox

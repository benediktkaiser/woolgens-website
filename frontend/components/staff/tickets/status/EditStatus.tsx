import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import React from "react";
import InputWithPrefilledValue from "../../../common/forms/InputWithPrefilledValue";

const EditStatus = ({status, setStatus}: {status: TicketStatus, setStatus: (status: TicketStatus) => void}) => {
    return (
        <div>
            <form className="flex flex-col space-y-2">
                <BaseInputWithLabel
                    defaultValue={status.label}
                    label="Label"
                    onChange={(event => setStatus({...status, label: event.target.value}))}
                />
                <InputWithPrefilledValue
                    defaultValue={status.color}
                    prefilledValue={<span className="mr-3">{status.color}</span>}
                    label="Color"
                    type="color"
                    onChange={(event => setStatus({...status, color: event.target.value}))}
                />
                <div>
                    <BaseInputWithLabel
                        defaultValue={status.willClose.toString()}
                        label="Close on assigned"
                        onChange={(event => setStatus({...status, willClose: event.target.value === "true"}))}
                    />
                    <p className="pt-2 pl-1 text-sm text-gray-400">
                        Please enter only one of the following: <span className="px-1 bg-shark-700 rounded">true, false</span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default EditStatus

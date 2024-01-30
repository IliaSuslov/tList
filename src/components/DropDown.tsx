import { ChangeEventHandler } from "react"
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid"
interface IDropDown extends React.SelectHTMLAttributes<HTMLSelectElement> {
    data: { value: string, label: string }[]
    value: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    resetValue: () => void
}
export function DropDown({ data, value, onChange, resetValue }: IDropDown) {
    return (
        <div className="flex relative justify-between">
            <select
                className="py-2 px-4 appearance-none border rounded w-[300px] outline-none"
                onChange={onChange}
                value={value}
            >
                <option value=''>Select status</option>
                {data.map(({ label, value }, i) => <option key={i} value={value}>{label}</option>)}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {value && <XMarkIcon className="w-6 h-6" onClick={resetValue} />}
                <ChevronDownIcon className="w-6 h-6" />
            </div>
        </div>
    )
}
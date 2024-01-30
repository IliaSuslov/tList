'use client'
import { FunnelIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import { DropDown } from "./DropDown";
import { Table } from "./Table";
import { useRef, useState } from "react";
import { Input } from "./Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Modal } from "./Modal";


const options = [{ value: 'active', label: 'Active' }, { value: 'inactive', label: 'Inactive' }]

export function ControlledTable({ data }: { data: Record<string, unknown>[] }) {
    const [tableData, setTableData] = useState(data)
    const searchRef = useRef<HTMLInputElement>(null)
    const [selectedValue, setSelectValue] = useState<string>('')
    const [filters, setFilters] = useState<{ status: string | undefined, search: string | undefined }>({ status: undefined, search: undefined })
    const [selectedItem, setSelectedItem] = useState<Record<string, unknown>>({})
    const [isOpened, setOpened] = useState<boolean>(false)

    function onClick() {
        setFilters({ status: selectedValue, search: searchRef?.current?.value })
    }
    function selectValue(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value
        setSelectValue(value)
    }
    function resetValue() {
        setSelectValue('')
    }
    function selectItem(item: Record<string, unknown>) {
        setSelectedItem(item)
        setOpened(true)
    }
    function closeModal() {
        setOpened(false)
    }

    function saveItem(updatedItem: Record<string, unknown>) {
        const newData = tableData.map(item => (item.id === updatedItem.id ? updatedItem : item));
        setTableData(newData)
        setOpened(false)
    }

    return (
        <>
            <div className="flex justify-end gap-2">
                <div className="flex border items-center px-4 rounded-md">
                    <Input ref={searchRef} placeholder="Search" />
                    <MagnifyingGlassIcon className="w-6 h-6" />
                </div>
                <DropDown data={options} value={selectedValue} onChange={selectValue} resetValue={resetValue} />
                <Button variant="gray" onClick={onClick} icon={<FunnelIcon className="w-4 h-4" />}>
                    Filter
                </Button>
            </div>
            <Table data={tableData} filters={filters} onEditClick={selectItem} />

            {isOpened &&
                <Modal data={selectedItem} onSave={saveItem} onClose={closeModal} />
            }
        </>
    )
}
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface IModal {
    data: Record<string, unknown>,
    onSave: (item: Record<string, unknown>) => void
    onClose: () => void
}
export function Modal({ data, onSave, onClose }: IModal) {
    const itemKey = Object.entries(data).filter((v) => typeof v[1] === 'string')[0]
    const itemString = Object.values(data).filter(v => typeof v === 'string')[0] as string
    const [name, setName] = useState<string>(itemString);

    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setName(value);
    }

    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        onSave({ ...data, [itemKey[0]]: name })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="z-10 fixed inset-0 bg-black bg-opacity-50 transition-opacity ease-out duration-300">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className="text-3xl font=semibold">Edit</h3>
                            <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={onClose}
                            >
                                <XMarkIcon className="w-8 h-8" />
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">

                            <p>Name</p>
                            <Input className="border-2 border-slate-500 rounded-md p-2 w-1/2" value={name} onChange={handleChangeName} />

                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <Button type="submit" variant="gray">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

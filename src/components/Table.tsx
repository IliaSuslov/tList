import moment from "moment";
import { Button } from "./Button";
import { twMerge } from "tailwind-merge";

interface ITableProps {
    data: Record<string, unknown>[];
    filters: { status?: string, search?: string }
    onEditClick: (item: Record<string, unknown>) => void
}

export function Table({ data, filters, onEditClick }: ITableProps) {
    if (!data || data.length === 0) {
        return <p>No data available.</p>;
    }

    const headers = Object.keys(data[0]).filter(v => v !== 'id');

    function handleUniqueRows(header: string, row: unknown): string {
        switch (header) {
            case 'active':
                return row ? 'Active' : 'Inactive'
            case 'createdAt':
                return moment(row as string).format("DD/MM/YYYY hh:mm")
            case 'updatedAt':
                return moment(row as string).format("DD/MM/YYYY hh:mm")
            case 'publishedAt':
                return moment(row as string).format("DD/MM/YYYY hh:mm")
            case 'removedAt':
                return moment(row as string).format("DD/MM/YYYY hh:mm")
        }
        return row as string
    }

    const headersHandler: Record<string, string> = {
        'name': 'name',
        'title': 'name',
        'description': 'name',
        'active': "status",
        'createdAt': 'created',
        'updatedAt': 'updated',
        'publishedAt': "published",
        'removedAt': "removed",
    }

    function filterName(item: Record<string, unknown>): boolean {
        let NameMatch = true;
        if (filters.search) {
            NameMatch = Object.values(item).filter(v => typeof v === 'string').some(v => {
                if (typeof v == 'string' && filters?.search) {
                    return v.toLowerCase().includes(filters?.search?.toLowerCase())
                }
            })
        }

        const StatusMatch = !filters.status || item.active == (filters.status == 'active')

        return NameMatch && StatusMatch
    }

    return (
        <table className="w-full rounded-md bg-slate-100">
            <thead >
                <tr >
                    {headers.map((header) => (
                        <th className="text-left p-2 capitalize text-slate-800" key={header} >{headersHandler[header]}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.filter(filterName).map((row, index) => (
                    <tr key={index} className={twMerge(index % 2 == 0 && 'bg-white')} >
                        {headers.map((header, i) => (
                            <td className={twMerge("p-2", i == 0 && 'text-blue-400 w-1/2')} key={header}>{handleUniqueRows(header, row[header])}</td>
                        ))}
                        <td className="flex justify-center py-2"><Button variant="lightGray" onClick={() => onEditClick(row)}>Edit</Button></td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
};


import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    icon?: ReactNode
    variant?: 'lightGray' | 'gray'
}

export function Button({ children, icon, variant, className, onClick, ...props }: IButtonProps) {
    return <button
        className={twMerge("bg-black p-4 rounded-md flex gap-2 text-white font-semibold items-center",
            variant === 'lightGray' && "bg-slate-50 text-slate-500",
            variant === 'gray' && "bg-slate-500",
            className
        )}
        onClick={onClick}
        {...props}
    >
        {icon}
        {children}
    </button>
}
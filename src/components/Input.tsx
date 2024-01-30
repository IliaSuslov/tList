import { LegacyRef, forwardRef } from "react"

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

export const Input = forwardRef(function Input({ placeholder, ...rest }: IInput, ref: LegacyRef<HTMLInputElement>) {
    return (
        <input
            className="outline-none"
            placeholder={placeholder}
            ref={ref}
            {...rest}
        />
    )
})
import { Field, Input as HeadLessInput, Label } from "@headlessui/react";
import { SearchIcon } from "../../../../public/static/svg";
import { ChangeEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";
import "./input.css";

interface InputProps {
    className?: string;
    onClick?: () => void;
    placeholder?: string;
    onIconClick?: () => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    icon?: ReactNode;
    ariaLabel?: string;
    id?: string;
}
export default function Input({ id, onKeyDown, className, placeholder, onClick, onIconClick, onChange, icon, ariaLabel }: InputProps) {
    return (
        <Field
            className={cn(
                " w-full  border relative border-des flex gap-2 h-9 bg-white/5  text-sm text-title",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                className
            )}
            htmlFor="search"
            as="label"
            aria-label={ariaLabel}
        >
            <HeadLessInput
                onKeyDown={onKeyDown}
                autoComplete="off"
                placeholder={placeholder}
                onClick={onClick}
                onChange={onChange}
                id={id ?? "search"}
                className={"w-full pl-2   pr-9  py-1 outline-none bg-transparent"}
            />

            {icon ?? <SearchIcon onClick={onIconClick} className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2" />}
        </Field>
    );
}

import Input from "@/components/UI/headless/input";
import { cn } from "@/lib/cn";
import { Control, Controller } from "react-hook-form";

export const FormField = ({
    label,
    name,
    control,
    type = "text",
    error,
    className,
}: {
    label: string;
    name: string;
    control: any;
    type?: string;
    error?: boolean;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col sm:flex-row gap-1", className)}>
            <label className="block text-sm font-medium w-40 text-default">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        className={cn(" bg-dark4 max-h-[36px]  outline-none w-full  px-3 py-2", {
                            "border border-red-500": error,
                        })}
                        type={type}
                    />
                )}
            />
        </div>
    );
};

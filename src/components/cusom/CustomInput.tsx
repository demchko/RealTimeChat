import { cn } from "@/lib/utils"
import { Input, InputProps } from "../ui/input"

export const CustomInput = ({className, ...props}: InputProps) => {
    return (
        <Input className={cn("bg-gray-900 py-5 rounded-xl border-none focus-visible:ring-offset-0", className)} {...props} />
    )
}
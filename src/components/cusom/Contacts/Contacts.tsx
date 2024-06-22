import { Input } from "@/components/ui/input"
import { ContactsList } from "./ContactsList"

export const Contacts = () => {
    return (
        <div className="my-7 overflow-y-scroll h-full" >
            <Input placeholder="Search..." className="bg-transparent" />
            <ContactsList />
            <ContactsList />
        </div>
    )
} 
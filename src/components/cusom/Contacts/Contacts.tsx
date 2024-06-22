import { ContactsList } from "./ContactsList"
import { CustomInput } from "../CustomInput"

export const Contacts = () => {
    return (
        <div className="my-7 overflow-y-auto h-full" >
            <CustomInput placeholder="Search" />
            <ContactsList />
        </div>
    )
} 
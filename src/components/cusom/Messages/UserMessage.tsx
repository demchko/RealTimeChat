import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Notebook, Video } from "lucide-react"

export const UserMessage = () => {
    return (
        <div className="w-[70%] h-full border-r border-gray-500 flex flex-col justify-between" >
            <div className="flex items-center justify-between border-b border-gray-500 px-3 py-3" >
               <div className="flex items-center" >
                <Avatar className="w-24 h-24" >
                    <AvatarImage src="/1.jpg" />
                </Avatar>
                <p className="text-2xl ml-5" >Володя</p>
               </div>
                <div className="flex items-center" >
                    <Button variant="ghost" size="icon" ><Video /></Button>
                    <Button variant="ghost" size="icon" ><Notebook /></Button>
                </div>
            </div>
            <div className="flex border-t border-gray-500 p-5" >
                <Input placeholder="Send a message" className="bg-gray-900 border-none p-3" />
                <Button>Send</Button>
            </div>
        </div>
    )
}
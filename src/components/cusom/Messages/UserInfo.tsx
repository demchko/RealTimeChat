import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const UserInfo = () => {
    return (
        <div className="w-[30%] h-full flex-1 flex flex-col justify-between p-4" >
            <div className="flex justify-center items-center py-7 border-b border-gray-500" >
                <div>
                    <Avatar className="w-24 h-24" >
                        <AvatarImage src="/1.jpg" />
                    </Avatar>
                    <p className="text-2xl" >Володя</p>
                </div>
            </div>
            <Button className="w-full bg-blue-500" >Допобачення</Button>
        </div>
    )
}
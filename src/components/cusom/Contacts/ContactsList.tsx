import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const ContactsList = () => {
    return (
        <div className="px-4">
            <div className="flex items-center border-b border-gray-400 py-4 hover:scale-105 transition-all duration-500 cursor-pointer" >
                <Avatar className="w-20 h-20" >
                    <AvatarImage src="/1.jpg" />
                </Avatar>
                <div className="ml-5" >
                    <p className="text-xl" >Володя</p>
                    <p>Привіт....</p>
                </div>
            </div>
            <div className="flex items-center border-b border-gray-400 py-4 hover:scale-105 transition-all duration-500 cursor-pointer" >
                <Avatar className="w-20 h-20" >
                    <AvatarImage src="/2.jpg" />
                </Avatar>
                <div className="ml-5" >
                    <p className="text-xl" >Роман</p>
                    <p>Привіт....</p>
                </div>
            </div>
            <div className="flex items-center border-b border-gray-400 py-4 hover:scale-105 transition-all duration-500 cursor-pointer" >
                <Avatar className="w-20 h-20" >
                    <AvatarImage src="/3.jpg" />
                </Avatar>
                <div className="ml-5" >
                    <p className="text-xl" >Ілля</p>
                    <p>Привіт....</p>
                </div>
            </div>
            <div className="flex items-center border-b border-gray-400 py-4 hover:scale-105 transition-all duration-500 cursor-pointer" >
                <Avatar className="w-20 h-20" >
                    <AvatarImage src="/4.jpg" />
                </Avatar>
                <div className="ml-5" >
                    <p className="text-xl" >Максим</p>
                    <p>Привіт....</p>
                </div>
            </div>
        </div>
    )
} 
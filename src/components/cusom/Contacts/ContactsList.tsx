import { Avatar, AvatarImage } from "@/components/ui/avatar"

type TestUsers = {
    id: number;
    name: string;
    avatar: string;
}

const testUsers: TestUsers[] = [
    {id: 1, name: "Володя", avatar: "/1.jpg"},
    {id: 2, name: "роман", avatar: "/2.jpg"},
    {id: 3, name: "Ілля", avatar: "/3.jpg"},
    {id: 4, name: "Макс", avatar: "/4.jpg"},
]

export const ContactsList = () => {
    return (
        <div className="px-4">
            {
                testUsers.map(item => (
                    <div key={item.id} className="flex items-center border-b border-gray-400 py-4 hover:scale-105 transition-all duration-500 cursor-pointer">
                        <Avatar className="w-20 h-20" >
                            <AvatarImage src={item.avatar} />
                        </Avatar>
                        <div className="ml-5" >
                            <p className="text-xl" >{item.name}</p>
                            <p>Привіт....</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
} 
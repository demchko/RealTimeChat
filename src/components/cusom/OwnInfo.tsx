import { Notebook, Video } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

export const OwnInfo = () => {
    return (
        <div className="flex justify-between items-center" >
            <div className="flex items-center" >
                <Avatar className="w-20 h-20" >
                    <AvatarImage src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg" />
                </Avatar>
                <p className="text-xl ml-4" >Sandra Clark</p>
            </div>
            <div className="flex items-center" >
                <Button variant="ghost" size="icon" ><Video /></Button>
                <Button variant="ghost" size="icon" ><Notebook /></Button>
            </div>
        </div>
    )
}
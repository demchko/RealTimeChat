'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import { Contacts } from "./Contacts/Contacts"
import { UserInfo } from "./Messages/UserInfo"
import { UserMessage } from "./Messages/UserMessage"
import { OwnInfo } from "./OwnInfo"
import { Login } from "./Login/Login"

export const Container = () => {
    const [login, setLogin] = useState(true);
    return (
        <div className="flex bg-gray-900 w-[80%] h-[80%] bg-opacity-30 backdrop-blur-xl rounded-lg text-white" >
            {
                login
                    ? <div className="w-full flex" >
                         <div className="flex flex-col w-[30%] p-4 border-r border-gray-500 h-full" >
                            <OwnInfo />
                            <Contacts />
                        </div>
                        <div className="w-[70%] h-full flex" >
                            <UserMessage />
                            <UserInfo setLogin={setLogin} />
                        </div>
                    </div>
                    : <Login setLogin={setLogin} />
            }
        </div>
    )
}
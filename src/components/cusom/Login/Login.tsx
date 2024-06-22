import { Button } from "@/components/ui/button"
import { CustomInput } from "../CustomInput";

interface ILogin{
    setLogin: (login: boolean) => void;
}

export const Login = ({setLogin}: ILogin) => {
    return (
        <div className="flex justify-center items-center w-full" >
            <div className="w-1/2" >
                <p className="text-center text-3xl" >Login</p>
                <CustomInput placeholder="Login" />
                <CustomInput className="mt-3" placeholder="Password" type="password" />
                <Button className="w-full mt-6 bg-transparent border border-gray-900" onClick={() => setLogin(true)} >Login</Button>
            </div>
        </div>
    )
}
import Image from "next/image"
import { signIn } from "next-auth/react"

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://links.papareact.com/5me"
                width={200} height={200}
                objectFit="contain"
            />
            <h1 onClick={() => signIn()} className="p-5 cursor-pointer bg-blue-500 rounded-full text-center">Login with Facebook</h1>
        </div>
    )
}

export default Login

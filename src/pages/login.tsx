import type { NextPage } from "next"
import { GoogleLogin } from "../components/googleLogin"
const Login: NextPage = () => {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <GoogleLogin />
            </main>
        </div>
    )
}

export default Login
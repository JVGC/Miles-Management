/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { signIn } from "next-auth/react";
import Image from "next/image"

import googleIcon from '../assets/images/btn_google_light_normal_ios.svg'

export const GoogleLogin: React.FC = () => {

    return (
        <button
          className="flex items-center justify-items-center"
          onClick={() => void signIn("google")}
        >
          <Image src={googleIcon} alt="Google Sign In Icon" className="h-10"/>
          <span className="h-10 font-semibold text-white text-lg text-center bg-googleBlue">Sign in with google </span>
        </button>
    );
  };

import { signIn } from "next-auth/react";

export const GoogleLogin: React.FC = () => {

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">
        </p>
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={() => void signIn("google")}
        >
          Sign in with google
        </button>
      </div>
    );
  };

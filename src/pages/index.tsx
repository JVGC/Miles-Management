import { type NextPage } from "next";
import { signOut } from "next-auth/react";
import Head from "next/head";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Miles Management</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <header>
            <h2>Welcome to your Miles Management System</h2>
        </header>
        <main className="">
            <button type="button" onClick={() => void signOut()}>Sign Out</button>
        </main>
      </div>
    </>
  );
};

export default Home;

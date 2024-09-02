"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=" items-center mt-96 h-24 justify-center flex flex-col font-mono text-sm l">
        <div className=" h-screen  grid grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-5xl">
              Secure Voting <br /> made{" "}
              <span className="text-red-400">Sample </span>{" "}
            </h1>{" "}
            <br />
            <h5>
              Empowering Democracy with Secure Blockchain Voting
              <br /> - Your Vote, Your Voice, Your Security
            </h5>
          </div>
          <div className=" justify-center h-screen items-center ml-44">
            <h2 className="mt-5 text-lg">Be a part of Decision</h2>
            <h1 className="text-5xl text-red-400">Vote Today</h1>
            <div className=" grid grid-cols-2 gap-8">
              <div className="mt-5">
                <button className="bg-indigo-500 rounded-lg w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-color">
                  <Link href="/admin"> Admin</Link>
                </button>
              </div>
              <div className="mt-5">
                <button className="bg-indigo-500 rounded-lg w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-color">
                  <Link href="/register">Register</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center">FEATURES</h1>
      <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 mr-20 ml-20 text-center mb-24">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block1.png"
            width={100}
            height={100}
          />
          <h2>BLOCKCHAIN</h2>
          <p>
            Our Voting system is a blockchain based system and it provides a
            transparent voting system, eliminatede the problem of vote tempering
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block2.png"
            height={100}
            width={100}
          />
          <h2>DECENTRALIZED</h2>
          <p>
            Our voting application is completely decentralized and this results
            to the elimination of the interfarence of any person in voting
            results
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block3.png"
            height={100}
            width={100}
          />
          <h2>USER FRIENDLY</h2>
          <p>
            Our website is very easy to user and people can like vote just in
            three clicks
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block4.png"
            height={100}
            width={100}
          />
          <h2>ONLINE VOTING</h2>
          <p>
            The system is totally online and now the users can vote while
            sitting at home
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-24">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block5.png"
            height={100}
            width={100}
          />
          <h2>FUTURE</h2>
          <p>
            Learn how to take beautiful portraits with minimal equipment; how
            light affects your images and how to make the very best of any
            location.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block6.png"
            height={100}
            width={100}
          />
          <h2>TRANSPARENT VOTING</h2>
          <p>
            Our Voting system is a blockchain based system and it provides a
            transparent voting system, eliminatede the problem of vote tempering
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block7.png"
            height={100}
            width={100}
          />
          <h2>DEVELOPED COUNTRY</h2>
          <p>
            Our voting system will result a loyal election and a true leader
            will be elected that will put the country on the way of development
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/block8.png"
            height={100}
            width={100}
          />
          <h2>KYC</h2>
          <p>
            We have introduced the decentralized KYC of the voters so no double
            voting can be done through the system and eliminated the fake vote
            count
          </p>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

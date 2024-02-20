import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import BabyImage from "@/images/BabyImage.jpg";
import Image from "next/image";
import Script from "next/script";
import logo from "../images/logo.jpg";
import { useSession } from "next-auth/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  // const session = useSession();

  return (
    <>
      <Head>
        <title>LiLu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
      ></Script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div className="bg-pink-100 p-4 flex justify-center items-center flex-col">
        <div className="text-center flex items-center flex-col md:flex-row">
          <Image
            src={logo}
            alt="LiLu Logo"
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold mt-4 md:mt-0 md:ml-4">
            Welcome to LiLu, Your Digital Midwife
          </h1>
        </div>

        <div className="bg-red-50 50 p-8">
          <Image src={BabyImage} alt="My Image" className="rounded-full mb-4" />
          <div className="flex text-black flex-col items-center">
            <p className="text-lg mt-4">Here's what you can do with LiLu:</p>
            <br />
            <Link
              href="/alternativemap"
              className="flex-1 text-black bg-blue-200 text-white font-semibold text-sm py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Explore Maps
            </Link>
            <br />
            {/* <li>
              Get your pregnancy questions answered by approved midwives -{" "}
              <Link href="/questions" className="text-blue-500 underline">
                Ask Questions
              </Link>
            </li> */}

            <Link
              href="/tips"
              className="flex-1 text-black bg-red-200 text-white font-semibold text-sm py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Browse our Tips
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

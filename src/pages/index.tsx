import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import BabyImage from "@/images/BabyImage.jpg";
import Image from "next/image";
import Script from "next/script";
import logo from "../images/logo.jpg";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  console.log("process.env.MONGODB_URI :>> ", process.env.MONGODB_URI);

  return (
    <>
      <Head>
        <title>LiLu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        ></Script>
      </Head>
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

        <div className="mt-4">
          <Image
            src={BabyImage}
            alt="Baby Image"
            width={700}
            height={700}
            className="m-auto rounded-full object-cover"
          />
        </div>
        <p className="text-md mt-4 px-2">
          LiLu supports your parenting journey with expert advice and resources.
        </p>

        <div className="flex flex-col items-center mt-4 space-y-3">
          <a
            href="/alternativemap"
            className="bg-blue-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-300 transition-colors duration-150"
          >
            Explore Maps
          </a>
          <a
            href="/questions"
            className="bg-yellow-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-300 transition-colors duration-150"
          >
            Ask Questions
          </a>
          <a
            href="/tips"
            className="bg-purple-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-purple-300 transition-colors duration-150"
          >
            Browse Tips
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

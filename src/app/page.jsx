import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <div>
      <title>Google Clone Next js 13</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Google clone created by Next js 13" />
      <link rel="icon" href="/favicon.svg" />
      <>
        {/* header */}
        <HomeHeader />

        {/* body */}
        <div className="flex flex-col items-center mt-24">
          <Image
            width="300"
            height="100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            alt="google-logo"
          />
          <HomeSearch />
        </div>
      </>
    </div>
  );
}

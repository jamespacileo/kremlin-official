import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useAsync } from "react-use";
import { LoadingContent } from "../../components/LoadingContent";
import { NavBar } from "../../components/NavBar";
import { PlaceholderContent } from "../../components/PlaceholderContent";
import { trpc } from "../../utils/trpc";
import YouTube, { YouTubeProps } from "react-youtube";
import { NewsCard } from "../../components/NewsCard";
import { Modal } from "../../components/Modal";

const Article: NextPage = () => {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);

  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const [readyToPlay, setReadyToPlay] = useState<boolean>(false);

  useAsync(async () => {
    // wait 1 second
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    if (readyToPlay) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setReadyToPlay(true);
    // fetch data
    // click iframe

    console.log("iframeRef", iframeRef);
    iframeRef?.click();
  }, [readyToPlay]);

  const onPlayerReady = async (event: any) => {
    // access to player in all event handlers via event.target

    // wait 5 seconds
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    event.target.playVideo();
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main className="container items-center justify-center min-h-screen p-4 mx-auto">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-7">
            <div className="flex justify-center">
              <img src="/img/banner.png" className="max-w-2xl" />
            </div>
          </div>
          <div className="col-span-2">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className="col-span-5">
            {/* <h1 className="text-4xl" style={{ fontFamily: "Russo One" }}>
              This content may not exist...{" "}
            </h1> */}
            <div
              role="status"
              className="max-w-xl animate-pulse flex items-center space-x-2 w-full mt-4"
            >
              <div className="h-6 bg-gray-400 rounded-full w-52 mb-4"></div>
              <div className="h-6 bg-gray-400 rounded-full w-16 mb-4"></div>
              <div className="h-6 bg-gray-400 rounded-full w-28 mb-4"></div>
              <div className="h-6 bg-gray-400 rounded-full w-48 mb-4"></div>
            </div>
            {/* <p className="text-md my-2 text-gray-700">
              Клиент очень важен, за клиентом последует клиент. Но распутник,
              ненавижу это говорить, просто маленький авиалайнер, в чистая
              улыбка и салат Первым делом в горло перед ним установить...
            </p> */}
            <div className="mb-4">
              <div
                role="status"
                className="flex justify-center items-center max-w-xl h-56 bg-red-300 rounded-lg animate-pulse dark:bg-red-700"
              >
                <svg
                  className="w-12 h-12 text-red-600 dark:text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="my-4">
              <PlaceholderContent />
            </div>

            {/* <LoadingContent /> */}
          </div>
        </div>
        {/* <Modal /> */}
        {readyToPlay ? (
          <div
            className="fixed inset-0"
            //   style={{ width: "100%", height: "100%" }}
          >
            <YouTube
              videoId="4fNz4KLxD8A"
              opts={{
                width: `${windowWidth}px`,
                height: `${windowHeight}px`,
                playerVars: { autoplay: 1 },
                controls: 0,
                allowfullscreen: 1,
                showinfo: 0,
              }}
              onPlayerReady={onPlayerReady}
            />
          </div>
        ) : null}
      </main>
    </>
  );
};

export default Article;
function useEffectAsync(arg0: () => Promise<void>, arg1: never[]) {
  throw new Error("Function not implemented.");
}

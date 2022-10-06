import type { NextPage } from "next";
import Head from "next/head";
import { LegacyRef, useState } from "react";
import { useAsync } from "react-use";
import { LoadingContent } from "../../components/LoadingContent";
import { NavBar } from "../../components/NavBar";
import { PlaceholderContent } from "../../components/PlaceholderContent";
import { trpc } from "../../utils/trpc";
import YouTube, { YouTubeProps } from "react-youtube";
import { NewsCard } from "../../components/NewsCard";
import { Modal } from "../../components/Modal";
import { SocialMediaIcons } from "../../components/SocialMediaIcons";

const Article: NextPage = () => {
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);
  const [audioRef, setAudioRef] = useState<
    LegacyRef<HTMLAudioElement> | undefined
  >(undefined);

  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [mute, setMute] = useState<number>(1);

  const [readyToPlay, setReadyToPlay] = useState<boolean>(false);

  useAsync(async () => {
    // wait 1 second
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    if (readyToPlay) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));

    const url = "https://www.youtube.com/watch?v=4fNz4KLxD8A";
    // redirect to youtube
    window.location.href = url;

    // setReadyToPlay(true);
    // fetch data
    // click iframe

    // console.log("iframeRef", iframeRef);
    // iframeRef?.click();
  }, [readyToPlay]);

  const onPlayerReady: YouTubeProps["onReady"] = (event: any) => {
    // access to player in all event handlers via event.target
    // wait 5 seconds
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // event.target.playVideo();
    // event.target.playVideo();
    // event.target.playVideo();
    // event.target.click();
    // audioRef?.current?.play();
  };

  return (
    <>
      <Head>
        <title>Kremlin Official - Russia have finally nailed training</title>
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
        {/* twitter card title */}
        <meta
          name="twitter:title"
          content="Kremlin Official - Russia have finally nailed training"
        />
        {/* twitter card description */}
        <meta
          name="twitter:description"
          content="Russian recruit training surpasses NATO standards. Here's how..."
        />
        {/* twitter card image */}
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/wMGJB69K/image.png"
        />
        {/* twitter card type */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* twitter card site */}
        <meta name="twitter:site" content="Kremlin Official" />
        {/* twitter card creator */}
        <meta name="twitter:creator" content="Aleksei Kovalev" />

        <meta property="og:article.author" content="Aleksei Kovalev" />
        <meta
          property="og:title"
          content="Kremlin Official - Russia have finally nailed training"
        />
        <meta property="og:type" content="image.jpeg" />
        {/* description  */}
        <meta
          property="og:description"
          content="Russian recruit training surpasses NATO standards. Here's how..."
        />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/wMGJB69K/image.png"
        />
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
            <div className="mb-4 flex gap-2 align-center items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="/img/author.png"
                alt="Rounded avatar"
              />
              <h2
                className="russo text-gray-800"
                style={{ fontFamily: "Russo One" }}
              >
                Aleksei Kovalev
              </h2>
            </div>
            <div className="mb-4">
              <SocialMediaIcons />
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
            <iframe
              src="SOME_EMPTY_VIDEO_WITH_SILENCE_URL"
              //   type="video/mp4"
              allow="autoplay"
              id="video"
              style={{ display: "none" }}
            ></iframe>
            <YouTube
              videoId="4fNz4KLxD8A"
              opts={{
                width: `${windowWidth}px`,
                height: `${windowHeight}px`,
                // playerVars: { autoplay: 1, mute: mute },
                controls: 0,
                allowfullscreen: 1,
                showinfo: 0,
                // autoplay: 1,
                // mute: mute,
              }}
              onReady={onPlayerReady}
            />
            {/* autoplay audio */}
            <audio
              autoPlay
              ref={audioRef}
              loop
              src="https://rr1---sn-5hne6nzy.googlevideo.com/videoplayback?expire=1665056123&ei=G2k-Y8zYKcH2W6zBh9gN&ip=92.233.166.139&id=o-AAd0LyWnQ15_igEL91-OaTixTGXa6zWDLCYEfNuwa-Km&itag=140&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fmp4&ns=AAO0LR52xw1JL8MJgDyZLGwI&gir=yes&clen=785136&otfp=1&dur=48.436&lmt=1657306989102842&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=6211224&n=P1cEkgk-8LnHBBFYYOG6&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAI8O8ga8Vz_-4KAl4PiIO6a_jNWmfRNyOIIr9c0ioRJWAiEApfHVB4Z9KolBS8IFrNgqO3NyfxflF7ibDM0Nz9YS3QM=&cm2rm=sn-8pgbpohxqp5-ajtz7l,sn-8pgbpohxqp5-aigr7e,sn-aigesk76&req_id=edd956244b37a3ee&ipbypass=yes&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=c1&mm=34&mn=sn-5hne6nzy&ms=ltu&mt=1665034123&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgOwc8vSbTqyD3v_c6WJbU76ZMfpYU8kiKgZsbGhqlG5ICIFK5qg-q25TiNQwpkPrJQd2efs0B09OqOnsefhG7Bqcc"
            ></audio>
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

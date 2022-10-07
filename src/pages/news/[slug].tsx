import type { NextPage } from "next";
import Head from "next/head";
import { LegacyRef, useRef, useState } from "react";
import { useAsync } from "react-use";
import { LoadingContent } from "../../components/LoadingContent";
import { NavBar } from "../../components/NavBar";
import { PlaceholderContent } from "../../components/PlaceholderContent";
import { trpc } from "../../utils/trpc";
import YouTube, { YouTubeProps } from "react-youtube";
import { NewsCard } from "../../components/NewsCard";
import { Modal } from "../../components/Modal";
import { SocialMediaIcons } from "../../components/SocialMediaIcons";
import { useRouter } from "next/router";
import Image from "next/future/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

import insuranceBanner from "../../../public/img/banner.png";
import bestFoodBanner from "../../../public/img/best food.jpg";
import yardSaleBanner from "../../../public/img/banner3.png";
import { usePageLeave } from "react-use";

const Article: NextPage = (params) => {
  // get slug from params
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  const { isLoading, error, data } = trpc.article.getArticle.useQuery(
    slug as string
  );
  console.log("article", data);

  console.log("params", params);
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);

  const videoPlayerRef = useRef();
  const [videoVisibility, setVideoVisibility] = useState(false);

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

    window.onbeforeunload = function () {
      return "Stay and watch the video 😂";
    };
    // if (readyToPlay) {
    //   return;
    // }
    await new Promise((resolve) => setTimeout(resolve, 10000));

    const url = data?.redirectUrl;

    // const url = "https://www.youtube.com/watch?v=4fNz4KLxD8A";
    // redirect to youtube
    if (url) {
      // window.location.href = url;
    }
    // window.location.href = url;

    // setReadyToPlay(true);
    // fetch data
    // click iframe

    // console.log("iframeRef", iframeRef);
    // iframeRef?.click();
  }, [readyToPlay, data]);

  const onStartVideoClick = (event: any) => {
    event.preventDefault();
    // videoPlayerRef.current?.click();
  };

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

  const onVideoPlay = () => {
    setVideoVisibility(true);
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Kremlin Official - {data.title}</title>
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
          content={`Kremlin Official - ${data.title}`}
        />
        {/* twitter card description */}
        <meta name="twitter:description" content={data.description} />
        {/* twitter card image */}
        <meta
          name="twitter:image"
          data-react-helmet="true"
          content={data.coverImageUrl}
        ></meta>
        {/* <meta
          name="twitter:image"
          content="https://i.postimg.cc/wMGJB69K/image.png"
        /> */}
        {/* twitter card type */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* twitter card site */}
        <meta name="twitter:site" content="Kremlin Official" />
        {/* twitter card creator */}
        <meta name="twitter:creator" content="Aleksei Kovalev" />

        <meta property="og:article.author" content="Aleksei Kovalev" />
        <meta
          property="og:title"
          content={`Kremlin Official - ${data.title}`}
        />
        <meta property="og:type" content="image.jpeg" />
        {/* description  */}
        <meta property="og:description" content={data.description} />
        <meta
          property="og:url"
          content={`https://kremlinofficial.com/news/${data.slug}`}
        />
        <meta
          property="og:image:width"
          data-react-helmet="true"
          content="600"
        />
        <meta
          property="og:image:height"
          data-react-helmet="true"
          content="315"
        />
        <meta
          property="og:image"
          data-react-helmet="true"
          content={data.coverImageUrl}
        />
        <meta property="og:type" data-react-helmet="true" content="article" />
      </Head>
      <NavBar />
      <main className="container items-center justify-center min-h-screen p-4 mx-auto">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-8">
            <div className="flex justify-center">
              <a
                href="https://visitukraine.today/ru/blog/928/how-not-to-join-the-russian-army-or-surrender-step-by-step-instructions-for-the-occupiers"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={insuranceBanner}
                  alt="Get your life insurance now!"
                  className="max-w-2xl"
                />
              </a>
            </div>
          </div>
          {/* <img
            src={`data:image/png;base64,${data?.coverImageBlob}`}
            className="col-span-7"
          /> */}
          <div className="col-span-2 flex flex-col">
            {/* <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard /> */}
            <a
              href="https://visitukraine.today/ru/blog/928/how-not-to-join-the-russian-army-or-surrender-step-by-step-instructions-for-the-occupiers"
              target="_blank"
              className="inline-block my-4"
              rel="noreferrer"
            >
              <Image src={yardSaleBanner} width={200} alt="Call now!" />
            </a>
            <a
              href="https://visitukraine.today/ru/blog/928/how-not-to-join-the-russian-army-or-surrender-step-by-step-instructions-for-the-occupiers"
              target="_blank"
              className="inline-block my-4"
              rel="noreferrer"
            >
              <Image src={bestFoodBanner} width={200} alt="Treat yourself!" />
            </a>
          </div>
          <div className="col-span-6">
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
                className="flex justify-center relative items-center max-w-xl h-56 bg-red-300 rounded-lg animate-pulse dark:bg-red-700"
              >
                <div
                  style={{ backgroundImage: `url(${data.coverImageUrl})` }}
                  className="opacity-10 absolute inset-0 bg-cover"
                ></div>
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
        <div
          className={
            videoVisibility ? "fixed inset-0" : "opacity-0 fixed inset-0"
          }
        >
          <ReactPlayer
            ref={videoPlayerRef as any}
            onPlay={onVideoPlay}
            width={"100%"}
            height={"100%"}
            controls={false}
            loop={true}
            url={data.redirectUrl}
          />
        </div>
        {videoVisibility ? (
          <div className="opacity-0 fixed inset-0"></div>
        ) : null}
      </main>
    </>
  );
};

export default Article;

// export async function getStaticProps({ params }) {}

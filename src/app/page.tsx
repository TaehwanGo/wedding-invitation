"use client";

import Section from "@/components/Section";
import styles from "./Home.module.css";
import clsx from "clsx";
import Image from "next/image";
import Contact from "@/components/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as Swiper1 } from "swiper";
import ReactPlayer from "react-player";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { CSSProperties, useState } from "react";
import Link from "next/link";
import KakaoIcon from "@/components/icon/KakaoIcon";
import { useRecoilState } from "recoil";
import { kakaoLoadState } from "@/state/kakaoLoadState";

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper1 | null>(null);
  const [isKakaoLoad] = useRecoilState(kakaoLoadState);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = () => {
    if (!isKakaoLoad) {
      console.log("kakao not loaded");
      return;
    }
    const { Kakao } = window;

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "우리 결혼합니다",
        description: "고태환 & 김성진 결혼식에 초대합니다",
        imageUrl:
          "https://wedding-invitation-peach-seven.vercel.app/images/edit2.jpg",
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
    });
  };

  const images: { fileName: string }[] = [
    {
      fileName: "edit1.jpg",
    },
    {
      fileName: "edit2.jpg",
    },
    {
      fileName: "edit3.jpg",
    },
    {
      fileName: "edit4.jpg",
    },
    {
      fileName: "edit5.jpg",
    },
    {
      fileName: "edit6.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center max-w-screen-sm m-auto">
      <Section>
        <div className={styles.cover}>
          <div className={clsx(styles.coverTextLayer)}>
            <h1 className="text-[2rem]">우리 결혼합니다</h1>
            <h2 className="text-[22px] mt-[22px]">고태환 & 김성진</h2>
            <p className="mt-[30px]">2024년 05월 12일 일요일 오후 1시</p>
            <p className="mt-[10px]">더빈컨벤션웨딩홀 4F 그랜드볼룸</p>
            <p className="mt-[30px]">충북 청주시 흥덕구 강내면 학천길 5</p>
          </div>
        </div>
      </Section>
      <Section
        className={`text-center p-[52px] pb-[37px] ${styles.koPubBatang}`}
      >
        <Image
          className="m-auto"
          src="/images/greeting.png"
          width={96}
          height={40}
          alt="greeting"
        ></Image>
        <div className={`mt-[22px]`}>
          <p>삶의 새로운 장을 열며</p>
          <p>저희는 서로의 동반자로 걸음을</p>
          <p>내딛기로 결심했습니다</p>
          <p>여러분의 따듯한 마음과 축복 속에서</p>
          <p>저희의 약속을 공유하는</p>
          <p>시간을 갖고 싶습니다</p>
          <p>새로운 시작을 함께</p>
          <p>축하해 주시면</p>
          <p>감사하겠습니다</p>
        </div>
        <Image
          className="m-auto mt-[11px] mb-[12px]"
          src={"/images/vLine1.png"}
          width={1}
          height={42}
          alt="line"
        ></Image>
        <p>고상호·김복희의 장남 고태환</p>
        <p>김인택·허명숙의 장녀 김성진</p>
      </Section>
      <Section className="bg-[#FFE7D1]">
        <Contact text="신랑에게 연락하기" contactNumber={"01071023094"} />
        <Contact text="신부에게 연락하기" contactNumber={"01043838392"} />
      </Section>
      <Section className="bg-[#FAEEE4]">
        <h2 className={styles.contactTitle}>혼주에게 연락하기</h2>
        <h3 className={styles.contactSubTitle}>신랑 측 혼주</h3>
        <Contact text="아버지 고상호" contactNumber={"01094173094"} />
        <Contact text="어머니 김복희" contactNumber={"01056693582"} />
      </Section>
      <Section className="bg-[#FAEEE4]">
        <h3 className={styles.contactSubTitle}>신부 측 혼주</h3>
        <Contact text="아버지 김인택" contactNumber={"01029560452"} />
        <Contact text="어머니 허명숙" contactNumber={"01071440452"} />
      </Section>
      <Section>
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as CSSProperties
          }
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((image) => (
            <SwiperSlide key={image.fileName}>
              <img
                src={`/images/${image.fileName}`}
                className="aspect-square object-cover object-center"
                alt={image.fileName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={4}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={clsx("mt-1", styles.swiperWrapper)}
        >
          {images.map((image) => (
            <SwiperSlide key={image.fileName} className={styles.thumbSlide}>
              <img
                src={`/images/${image.fileName}`}
                className="aspect-square object-cover object-center"
                alt={image.fileName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
      <Section>
        <div className="mt-[55px] mb-4 flex justify-center">
          <Image
            src="/images/textMovie.png"
            width={79}
            height={40}
            alt="movie"
          ></Image>
        </div>
        <div className="flex">
          <ReactPlayer url="https://www.youtube.com/watch?v=lIvq30yGNZM&ab_channel=Tony" />
        </div>
      </Section>
      <Section>
        <div className="mt-[37px] mb-4 flex justify-center">
          <Image
            src={"/images/locationText.png"}
            alt="location-text"
            width={102}
            height={40}
          />
        </div>
        {/* https://naver.me/5vIYiCmj */}
        <div className="text-center text-[18px]">
          <p>더빈컨벤션 웨딩홀</p>
          <p className="mt-[5px]">충북 청주시 흥덕구 강내면 학천길 5</p>
        </div>
        <div className="flex justify-center mt-[17px]">
          <Link href={"https://naver.me/5vIYiCmj"} target="_blank">
            <img
              src="/images/weddingMap.png"
              width={360}
              height={219}
              alt="map"
            />
          </Link>
        </div>
      </Section>
      <hr className="mt-[30px] w-full m" />
      <Section>
        <div className={styles.busTextWrapper}>
          <Image src="/images/busText.png" width={54} height={40} alt="bus" />
        </div>
        <div className="text-center text-[18px] mb-[10px]">
          <p>버스시간</p>
          <p className="mt-[3px]">잠실역에서 출발하는 시간 오전 10시</p>
          <p className="mt-[5px]">웨딩홀에서 출발하는 시간 오후 3시</p>
          <p className="mt-[35px]">잠실역 4번출구에서 직진,</p>
          <p>롯데마트 제타플렉스 잠실점 앞</p>
        </div>
        <div className="flex justify-center">
          <Link href="https://naver.me/FU39qtyx" target="_blank">
            <img src="/images/busMap.png" width={360} height={219} alt="bus" />
          </Link>
        </div>
      </Section>
      <hr className="mt-[30px] w-full" />
      <Section>
        <div className="mt-[49px] mb-[31px] text-[18px] pl-2 pr-2">
          <p className="text-center ">마음 전하는 곳</p>
          <h5 className="mt-[18px] flex">
            <img
              className="mr-1"
              src="/images/heart.png"
              alt="heart"
              width={24}
            />
            <div>신랑측</div>
          </h5>
          <ul style={{ listStyle: "inherit" }} className=" pl-[20px]">
            <li className="mt-[9px]">신랑 고태환 농협은행 302-0027-8567-11</li>
            <li className="mt-[9px]">
              아버지 고상호 농협은행 401061-56-012923
            </li>
            <li className="mt-[9px]">어머니 김복희 우리은행 1002500577323</li>
          </ul>
          <h5 className="mt-[18px] flex">
            <img
              className="mr-1"
              src="/images/heart.png"
              alt="heart"
              width={24}
            />
            <div>신부측</div>
          </h5>
          <ul style={{ listStyle: "inherit" }} className=" pl-[20px]">
            <li className="mt-[9px]">신부 김성진 카카오뱅크 3333-05-2014727</li>
            <li className="mt-[9px]">
              아버지 김인택 하나은행 145-910016-74307
            </li>
            <li className="mt-[9px]">어머니 허명숙 KB국민 017002-04-209513</li>
          </ul>
        </div>
      </Section>
      <Section className="bg-[#FFEB3B]" onClick={handleShare}>
        <div className="flex justify-center items-center mt-[9px] mb-[9px]">
          <KakaoIcon />
          <p className="text-[18px] ml-[10px]">카카오톡 공유하기</p>
        </div>
      </Section>
      <Section className="bg-[#333333]">
        <div className={styles.congratulation}>
          <Image
            src="/images/congratulation.png"
            width={182}
            height={40}
            alt="notice"
          ></Image>
          <p className="mt-[10px]">축하해주시는 모든분께 감사합니다</p>
        </div>
      </Section>
    </main>
  );
}

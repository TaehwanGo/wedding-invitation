"use client";

import Section from "@/components/Section";
import styles from "./Home.module.css";
import clsx from "clsx";
import Image from "next/image";
import Contact from "@/components/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as Swiper1 } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { CSSProperties, useState } from "react";

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper1 | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center max-w-screen-sm m-auto">
      <Section>
        <div className={styles.cover}>
          <div className={clsx(styles.coverTextLayer)}>
            <h1 className="text-[2rem]">우리 결혼합니다</h1>
            <h2 className="text-[22px] mt-[30px]">고태환 & 김성진</h2>
            <p className="mt-[38px]">2024년 05월 12일 일요일 오후 1시</p>
            <p className="mt-[10px]">더빈컨벤션웨딩홀 4F 그랜드볼룸</p>
            <p className="mt-[36px]">충북 청주시 흥덕구 강내면 학천길 5</p>
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
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img
              src="/images/cover.png"
              className="aspect-square object-cover object-top"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={clsx("mt-2", styles.swiperWrapper)}
        >
          <SwiperSlide className={styles.thumbSlide}>
            <img
              src="/images/cover.png"
              className="aspect-square object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.thumbSlide}>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className={styles.thumbSlide}>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className={styles.thumbSlide}>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
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
      </Section>
    </main>
  );
}

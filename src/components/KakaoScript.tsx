"use client";

import { kakaoLoadState } from "@/state/kakaoLoadState";
import Script from "next/script";
import { useRecoilState } from "recoil";

export default function KakaoScript() {
  const [, setKakaoLoad] = useRecoilState(kakaoLoadState);
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    setKakaoLoad(true);
  };
  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  );
}

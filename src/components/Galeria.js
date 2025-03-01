// src/components/Galeria.js
"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Galeria() {
  const [autoplay, setAutoplay] = useState(true);  // Estado para controlar o autoplay

  // Função para pausar o autoplay
  const handleVideoPlay = () => {
    setAutoplay(false);  // Desliga o autoplay quando o vídeo começar
  };

  // Função para retomar o autoplay
  const handleVideoPause = () => {
    setAutoplay(true);  // Retoma o autoplay quando o vídeo é pausado
  };

  return (
    <section className="py-10 bg-[#D5C7A3] text-white">
      <h2 className="text-4xl text-center font-bold mb-8">Momentos Especiais vai tankando duvido</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true, enabled: autoplay }}  // Controla o autoplay
        effect="fade"
        loop={true}
        className="w-full max-w-4xl mx-auto"
      >
        <SwiperSlide>
          <img
            src="/images/1.jpg"
            alt="Momentos Juntos"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            src="/videos/v1.mp4"
            controls
            className="w-full h-[600px] object-cover rounded-lg"
            onPlay={handleVideoPlay}  // Pausa o autoplay quando o vídeo começar
            onPause={handleVideoPause}  // Retoma o autoplay quando o vídeo for pausado
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/2.jpg"
            alt="Viagem Inesquecível"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/3.jpg"
            alt="Viagem Inesquecível"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            src="/videos/v2.mp4"
            controls
            className="w-full h-[600px] object-cover rounded-lg"
            onPlay={handleVideoPlay}  // Pausa o autoplay quando o vídeo começar
            onPause={handleVideoPause}  // Retoma o autoplay quando o vídeo for pausado
          />
        </SwiperSlide>
      </Swiper>
      <h2 className="text-4xl text-center font-bold mb-8">Sim apenas fotos e videos nao tenho criatividade</h2>

    </section>
  );
}

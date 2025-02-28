// src/components/Hero.js
"use client";

import Typist from 'react-typist';
import Heart from '@/components/Heart';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* Fundo Borrado */}
      <div
        className="absolute inset-0 -z-10 blur-lg scale-125"
        style={{
          backgroundImage: "url('/images/pastel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(30px)",
          transform: "scale(1.1)"
        }}
      ></div>

      {/* GIF Centralizado em Tamanho Original */}
      <img
        src="/images/bg.gif"
        alt="Pixel Art Animado"
        className="absolute inset-0 m-auto w-[600px] h-[600px] object-contain z-0"
      />

      {/* Conteúdo da Hero */}
      <div className="relative flex flex-col items-center justify-center h-full text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          <Typist avgTypingDelay={50} cursor={{ show: true, blink: true, element: '❤️' }}>
            Feliz Aniversário de Namoro meu amor! 💖
            <Typist.Backspace count={35} delay={1000} />
            Mais um ano de amor e felicidade. 💫
            <Typist.Backspace count={32} delay={1000} />
            Te amo hoje e sempre! ❤️
            <Typist.Backspace count={25} delay={1000} />
            Muito brega mas deu um trabalhinho nao me xinga
            <Typist.Backspace count={39} delay={1000} />
          </Typist>
        </h1>
        <Heart />
      </div>
    </section>
  );
}

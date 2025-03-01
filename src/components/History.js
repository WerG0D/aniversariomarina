"use client";

export default function History() {
    return (
        <section className="relative h-screen w-full overflow-hidden text-white " style={{ backgroundColor: '#F2E2B1' }}>
        
        <div className="relative flex flex-col items-center justify-center h-full text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg" style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7), -2px -2px 4px rgba(0, 0, 0, 0.7)' 
          }}> 4 anos de nós! Te amo dms marina <br/> 
          Meu frontend é pessimo desculpa</h1>
        </div>
        
        <img
        src="/images/eu e marina.jpeg"
        alt="Pixel Art Animado"
        className="absolute inset-0 m-auto w-[600px] h-[600px] object-contain z-0"
      />    
        
      </section>

    );
}
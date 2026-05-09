import React, { useEffect, useRef } from 'react';

export default function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb946a3dd25aa2a8e936f.png', alt: 'Logo 1' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb9463f4447300c24da53.png', alt: 'Logo 2' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb9463f4447300c24da54.png', alt: 'Logo 3' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb946a3dd25aa2a8e9370.png', alt: 'Logo 4' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb9463f4447300c24da55.png', alt: 'Logo 5' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb9467285562721b0df4e.png', alt: 'Logo 6' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb9463f4447300c24da57.png', alt: 'Logo 7' },
    { src: 'https://assets.cdn.filesafe.space/uUwEUa6rp4Gx1NEi2KiM/media/69fdb9467285562721b0df4d.png', alt: 'Logo 8' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const updateScale = () => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const maxDist = containerRect.width / 2;

      const items = container.querySelectorAll('.logo-item');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - itemCenterX);
        
        // Ефект риб'ячого ока: 1 по центру, менше по краях
        // Використовуємо ступінь 2 для більш плавного ефекту
        let scale = 1 - Math.pow(dist / maxDist, 2) * 0.4;
        scale = Math.max(0.4, Math.min(1, scale));
        
        // Застосовуємо масштаб до зображення всередині
        const img = item.querySelector('img');
        if (img) {
          img.style.transform = `scale(${scale})`;
        }
      });

      animationFrameId = requestAnimationFrame(updateScale);
    };

    updateScale();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black py-10 overflow-hidden relative border-t border-b border-white/10 flex flex-col pt-12">
      
      <div className="text-white/40 uppercase tracking-[4px] text-xs font-medium mb-8 text-center w-full z-20 pointer-events-none font-sans">
        PRODUCER UJAY's Colabs
      </div>

      {/* Градієнти по краях для плавного зникнення */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Контейнер для біжучої строки */}
      <div className="flex w-max animate-marquee">
        {/* Перший набір логотипів */}
        <div className="flex gap-16 pr-16 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="logo-item h-[48px] md:h-[64px] flex items-center justify-center px-4"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 filter invert brightness-0 origin-center"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        {/* Другий набір логотипів (дублікат для безшовного циклу) */}
        <div className="flex gap-16 pr-16 items-center">
          {logos.map((logo, index) => (
            <div 
              key={`dup1-${index}`}
              className="logo-item h-[48px] md:h-[64px] flex items-center justify-center px-4"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 filter invert brightness-0 origin-center"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        {/* Третій набір логотипів (дублікат для дуже широких екранів) */}
        <div className="flex gap-16 pr-16 items-center">
          {logos.map((logo, index) => (
            <div 
              key={`dup2-${index}`}
              className="logo-item h-[48px] md:h-[64px] flex items-center justify-center px-4"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 filter invert brightness-0 origin-center"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        {/* Четвертий набір логотипів */}
        <div className="flex gap-16 pr-16 items-center">
          {logos.map((logo, index) => (
            <div 
              key={`dup3-${index}`}
              className="logo-item h-[48px] md:h-[64px] flex items-center justify-center px-4"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-full w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 filter invert brightness-0 origin-center"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Вбудований CSS для кастомної анімації */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            /* Зсув рівно на 50% ширини батьківського контейнера, 
               який містить 4 однакових блоки. 50% означає зсув на 2 блоки, що дає ідеальний цикл */
            transform: translateX(-50%); 
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}

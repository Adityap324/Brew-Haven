import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-200/60 z-[100] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#A855F7] to-[#7C3AED] transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

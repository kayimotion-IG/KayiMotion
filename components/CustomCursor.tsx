import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Only render on devices that support hover (non-touch)
  if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference" style={{ display: isVisible ? 'block' : 'none' }}>
      {/* Main Dot */}
      <div 
        className="fixed w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`
        }}
      />
      
      {/* Outer Ring / Hover State */}
      <div 
        className={`fixed border border-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isHovering ? '64px' : '32px',
          height: isHovering ? '64px' : '32px',
          backgroundColor: isHovering ? 'white' : 'transparent',
          opacity: isHovering ? 0.9 : 0.5,
          mixBlendMode: 'difference'
        }}
      >
        {isHovering && <span className="text-[8px] font-bold text-black uppercase tracking-widest">View</span>}
      </div>
    </div>
  );
};

export default CustomCursor;
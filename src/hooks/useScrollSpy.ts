import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height,
          };
        })
        .filter((section): section is NonNullable<typeof section> => section !== null);

      if (sections.length === 0) return;

      const threshold = 200;
      
      let activeSection = sections[0];
      
      for (const section of sections) {
        if (section.top <= threshold && section.bottom > threshold) {
          activeSection = section;
          break;
        }
        if (section.top > threshold) {
          break;
        }
        activeSection = section;
      }

      if (activeSection.id !== activeId) {
        setActiveId(activeSection.id);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, activeId]);

  return activeId;
};

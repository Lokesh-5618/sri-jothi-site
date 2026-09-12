import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = document.querySelectorAll('.reveal, .text-reveal, .blur-reveal');
    
    if (reduceMotion) {
      revealEls.forEach(el => el.classList.add('is-visible'));
    } else {
      document.querySelectorAll('[data-stagger]').forEach(group => {
        [...group.children].forEach((el, i) => el.style.setProperty('--i', i));
      });
      document.querySelectorAll('.reveal-stagger').forEach(group => {
        [...group.children].forEach((el, i) => el.style.setProperty('--i', i));
      });
      
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { 
            e.target.classList.add('is-visible'); 
            io.unobserve(e.target); 
          }
        });
      }, { threshold: .14, rootMargin: '0px 0px -60px' });
      
      revealEls.forEach(el => io.observe(el));
      
      return () => {
        io.disconnect();
      };
    }
  }, []);
}

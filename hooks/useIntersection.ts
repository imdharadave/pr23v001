import { useState, useEffect, Ref, RefObject } from 'react';

export const useIntersection = (element, rootMargin: string) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );

    element?.current && observer.observe(element?.current);

    return () => observer.unobserve(element?.current);
  }, []);

  return isVisible;
};

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const useNav = () => {
  const main = useRef<any>(null);

  const [navMode, setNavMode] = useState<boolean>(true);

  useEffect(() => {
    main.current = document.getElementById('scrollable');
  }, []);

  const { scrollYProgress } = useScroll({
    container: main,
    layoutEffect: false
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setNavMode(value === 0);
  });

  return navMode;
};

export default useNav;

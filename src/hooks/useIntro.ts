import { useEffect, useState } from 'react';

export const useIntro = (isTest: boolean) => {
  const [showIntro, setShowIntro] = useState(true);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    if (isTest) {
      setShowIntro(false);
      setIntroVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIntroVisible(false);
      setTimeout(() => setShowIntro(false), 1000);
    }, 4500);

    return () => clearTimeout(timer);
  }, [isTest]);

  return { showIntro, introVisible };
};

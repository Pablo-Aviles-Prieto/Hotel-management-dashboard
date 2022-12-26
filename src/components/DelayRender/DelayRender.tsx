import React, { useState, useEffect } from 'react';

type Props = {
  children: JSX.Element;
  waitBeforeShow?: number;
};

export const Delayed: React.FC<Props> = ({
  children,
  waitBeforeShow = 400,
}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

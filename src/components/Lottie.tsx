import React, {
  useEffect,
  useRef,
  Dispatch,
  useState,
  CSSProperties,
} from 'react';
import lottie, { AnimationConfig, AnimationItem } from 'lottie-web';

type Props = {
  animationData: any;
  containerStyle?: CSSProperties;
  option?: Partial<AnimationConfig>;
  setAnimationItem?: Dispatch<AnimationItem | null>;
};

const Lottie: React.FC<Props> = ({
  animationData,
  containerStyle,
  option: optionProps,
  setAnimationItem: setAnimationItemProps,
}) => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const [setAnimationItem] = useState(() => setAnimationItemProps);
  const [option] = useState(optionProps);

  useEffect(() => {
    const animationItem =
      lottieContainer.current &&
      lottie.loadAnimation({
        renderer: 'svg',
        loop: true,
        autoplay: true,
        container: lottieContainer.current,
        ...option,
        animationData,
      });
    setAnimationItem && setAnimationItem(animationItem);
  }, [animationData, option, setAnimationItem]);

  return <div ref={lottieContainer} style={containerStyle} />;
};
export default Lottie;

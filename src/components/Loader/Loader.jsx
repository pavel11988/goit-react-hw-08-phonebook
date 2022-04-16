import { Dot, Spinner } from './Loader.styled';

const Loader = () => (
  <Spinner>
    <Dot rotateDeg="0deg" animationDelay="0s" />
    <Dot rotateDeg="30deg" animationDelay="-1.1s" />
    <Dot rotateDeg="60deg" animationDelay="-1s" />
    <Dot rotateDeg="90deg" animationDelay="-0.9s" />
    <Dot rotateDeg="120deg" animationDelay="-0.8s" />
    <Dot rotateDeg="150deg" animationDelay="-0.7s" />
    <Dot rotateDeg="180deg" animationDelay="-0.6s" />
    <Dot rotateDeg="210deg" animationDelay="-0.5s" />
    <Dot rotateDeg="240deg" animationDelay="-0.4s" />
    <Dot rotateDeg="270deg" animationDelay="-0.3s" />
    <Dot rotateDeg="300deg" animationDelay="-0.2s" />
    <Dot rotateDeg="330deg" animationDelay="-0.1s" />
  </Spinner>
);

export default Loader;

import styled from '@emotion/styled';

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

export const Dot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #f4f4f4;
    border-radius: 100%;

    animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    animation-delay: ${({ animationDelay }) => {
      return animationDelay;
    }};
  }
  transform: ${({ rotateDeg }) => {
    return ` rotate(${rotateDeg})`;
  }};

  @keyframes sk-circleBounceDelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

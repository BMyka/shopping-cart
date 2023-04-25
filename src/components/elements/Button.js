import React from "react";
import styled, { css } from "styled-components";

const Button = ({ onClick, content, shape, size, color, animation }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      shape={shape}
      size={size}
      color={color}
      animation={animation}
    >
      {content}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 700;
  /* Size */
  ${({ size }) =>
    size === "big" &&
    css`
      width: 39rem;
      font-size: 4rem;
    `}

  ${({ size }) =>
    size === "wide" &&
    css`
      width: 100%;
    `}

    /* Shape */
    ${({ shape }) =>
    shape === "round" &&
    css`
      border-radius: 50px;
      padding: 2rem;
    `}

    /* Color */

    ${({ color }) =>
    color === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.dark};
    `}


    ${({ color }) =>
    color === "red" &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.dark};
    `}

    ${({ color }) =>
    color === "grey" &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.dark};
    `}

    ${({ color }) =>
    color === "dark" &&
    css`
      background-color: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
    `}

    /* Animation */

    ${({ animation }) =>
    animation === "scale" &&
    css`
      transition: transform 0.15s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(1.02);
      }
    `}
`;

export default Button;

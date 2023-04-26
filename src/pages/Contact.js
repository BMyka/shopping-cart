import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <ContactWrapper>
      <SocialMedia>
        <SocialLink href="https://github.com/BMyka" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaFacebookF />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaFacebookMessenger />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaInstagram />
        </SocialLink>
      </SocialMedia>
      <ContactInfo>
        <p>Fake Store</p>
        <p>Verkių g. 50, LT-09109, Vilnius m. sav.</p>
      </ContactInfo>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  margin-top: 14rem;
  margin-bottom: 26.5rem;

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;

  @media (max-width: 768px) {
    gap: 5rem;
    font-size: 8rem;
  }

  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default Contact;

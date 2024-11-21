import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/women_profile.avif'; // Import the image

const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(to bottom, #f0f8ff, #d6e8ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.p`
  font-size: 20px;
  color: #333;
  margin: 20px 0;
  max-width: 600px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Image src={profileImage} alt="Profile" />
      <Title>About Me</Title>
      <Content>
        Hi! I'm a pet enthusiast who loves creating tools to make pet adoption
        easier and more enjoyable. With a passion for technology and animal
        welfare, I designed this app to help you explore amazing pets available
        for adoption. Let's make a difference together!
      </Content>
    </Container>
  );
};

export default AboutMe;

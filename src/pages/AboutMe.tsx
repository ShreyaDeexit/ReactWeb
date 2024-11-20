import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #007bff;
`;

const Content = styled.p`
  font-size: 18px;
  color: #333;
  margin: 20px 0;
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Content>
        Hi! I'm a pet enthusiast who loves creating tools to make pet adoption
        easier and more enjoyable. This app is designed to help you explore
        amazing pets available for adoption.
      </Content>
    </Container>
  );
};

export default AboutMe;

import React from 'react';
import styled from 'styled-components';
import PetList from '../components/PetList';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 20px;
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>Available Pets Images</Title>
      <PetList />
    </Container>
  );
};

export default HomePage;

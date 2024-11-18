import React from 'react';
import PetList from '../components/PetList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Available Pets Images</h1>
      <PetList />
    </div>
  );
};

export default HomePage;

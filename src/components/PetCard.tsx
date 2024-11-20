import React from 'react';
import styled from 'styled-components';
import { Pet } from '../types/Pet';

interface PetCardProps {
  pet: Pet;
  isSelected: boolean;
  onSelect: () => void;
}

// Styled-components
const Card = styled.div<{ isSelected: boolean }>`
  border: 1px solid ${(props) => (props.isSelected ? '#007bff' : '#ccc')};
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Checkbox = styled.input`
  position: absolute;
  top: 8px;
  right: 8px;
  transform: scale(1.2);
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px; /* Slightly larger font size */
  font-weight: bold;
  margin: 8px 0;
  color: #333; /* Ensure high contrast for better visibility */
  text-align: center; /* Center-align the title */
  white-space: nowrap; /* Prevent the text from breaking into multiple lines */
  overflow: hidden; /* Hide any overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for overflowed text */
`;


const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;

const Date = styled.p`
  font-size: 12px;
  color: #999;
`;

const PetCard: React.FC<PetCardProps> = ({ pet, isSelected, onSelect }) => {
  return (
    <Card isSelected={isSelected}>
      <Checkbox
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
      />
      <Image src={pet.url} alt={pet.title} />
      <Title>{pet.title}</Title>
      <Description>{pet.description}</Description>
      <Date>{pet.created}</Date>
    </Card>
  );
};

export default PetCard;

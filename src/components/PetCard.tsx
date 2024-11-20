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
  border: ${(props) => (props.isSelected ? '3px solid #007bff' : '1px solid #ccc')};
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, border 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 4px;
  appearance: none;
  outline: none;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }

  &:checked::after {
    content: '✔';
    font-size: 14px;
    color: white;
    display: block;
    text-align: center;
    line-height: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
  color: #333;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;

const StyledDate = styled.p`
  font-size: 12px;
  color: #999;
`;

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  } catch (error) {
    console.error('Invalid date:', dateString);
    return 'Invalid Date';
  }
};

const PetCard: React.FC<PetCardProps> = ({ pet, isSelected, onSelect }) => {
  return (
    <Card isSelected={isSelected}>
      <CheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
        />
      </CheckboxContainer>
      <Image src={pet.url} alt={pet.title} />
      <Title>{pet.title}</Title>
      <Description>{pet.description}</Description>
      <StyledDate>{formatDate(pet.created)}</StyledDate>
    </Card>
  );
};

export default PetCard;

import React from 'react';
import { Pet } from '../types/Pet';
import styles from '../styles/PetCard.module.css';

interface PetCardProps {
  pet: Pet;
  isSelected: boolean;
  onSelect: () => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, isSelected, onSelect }) => {
  return (
    <div className={`${styles.card} ${isSelected ? styles.selected : ''}`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className={styles.checkbox}
      />
      <img src={pet.url} alt={pet.title} className={styles.image} />
      <h2 className={styles.title}>{pet.title}</h2>
      <p className={styles.description}>{pet.description}</p>
      <p className={styles.date}>{new Date(pet.created).toLocaleDateString()}</p>
    </div>
  );
};

export default PetCard;

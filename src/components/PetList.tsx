import React, { useEffect, useState } from 'react';
import { fetchPets } from '../services/api';
import PetCard from './PetCard';
import { Pet } from '../types/Pet';
import styles from '../styles/PetList.module.css';

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPets = async () => {
      try {
        const data = await fetchPets();
        setPets(data);
      } catch (err) {
        setError('Failed to load pets');
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  const toggleSelectImage = (url: string) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(url)
        ? prevSelected.filter((image) => image !== url)
        : [...prevSelected, url]
    );
  };

  const selectAllImages = () => {
    setSelectedImages(pets.map((pet) => pet.url));
  };

  const clearSelection = () => {
    setSelectedImages([]);
  };

  const downloadSelectedImages = () => {
    selectedImages.forEach((url) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop() || 'image.jpg';
      link.click();
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className={styles.buttons}>
        <button
          className={styles.actionButton}
          onClick={selectAllImages}
          disabled={pets.length === 0}
        >
          Select All
        </button>
        <button
          className={styles.actionButton}
          onClick={clearSelection}
          disabled={selectedImages.length === 0}
        >
          Clear Selection
        </button>
        <button
        className={styles.downloadButton}
        onClick={downloadSelectedImages}
        disabled={selectedImages.length === 0}
      >
        Download Selected Images
      </button>
      </div>
      <div className={styles.list}>
        {pets.map((pet) => (
          <PetCard
            key={pet.url}
            pet={pet}
            isSelected={selectedImages.includes(pet.url)}
            onSelect={() => toggleSelectImage(pet.url)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default PetList;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPets } from '../services/api';
import PetCard from './PetCard';
import { Pet } from '../types/Pet';

// Styled-components
const Container = styled.div`
  padding: 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  display: block;
  margin: 0 auto 20px auto;
  padding: 10px;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPets = async () => {
      try {
        const data = await fetchPets();
        setPets(data);
        setFilteredPets(data); // Initially, filtered pets are the same as all pets
      } catch (err) {
        setError('Failed to load pets');
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = pets.filter(
      (pet) =>
        pet.title.toLowerCase().includes(query) ||
        pet.description.toLowerCase().includes(query)
    );
    setFilteredPets(filtered);
  }, [searchQuery, pets]);

  const toggleSelectImage = (url: string) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(url)
        ? prevSelected.filter((image) => image !== url)
        : [...prevSelected, url]
    );
  };

  const selectAllImages = () => {
    setSelectedImages(filteredPets.map((pet) => pet.url));
  };

  const clearSelection = () => {
    setSelectedImages([]);
  };

  const downloadSelectedImages = () => {
    if (selectedImages.length === 0) {
      alert('No images selected for download.');
      return;
    }

    selectedImages.forEach((url) => {
      window.open(url, '_blank');
    });
  };

  const sortByTitleAscending = () => {
    setFilteredPets((prevPets) =>
      [...prevPets].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  const sortByTitleDescending = () => {
    setFilteredPets((prevPets) =>
      [...prevPets].sort((a, b) => b.title.localeCompare(a.title))
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search by title or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ButtonsContainer>
        <ActionButton onClick={selectAllImages} disabled={filteredPets.length === 0}>
          Select All
        </ActionButton>
        <ActionButton
          onClick={clearSelection}
          disabled={selectedImages.length === 0}
        >
          Clear Selection
        </ActionButton>
        <ActionButton onClick={sortByTitleAscending}>
          Sort A-Z
        </ActionButton>
        <ActionButton onClick={sortByTitleDescending}>
          Sort Z-A
        </ActionButton>
        <ActionButton
          onClick={downloadSelectedImages}
          disabled={selectedImages.length === 0}
        >
          Download Selected Images
        </ActionButton>
      </ButtonsContainer>
      <ListContainer>
        {filteredPets.map((pet) => (
          <PetCard
            key={pet.url}
            pet={pet}
            isSelected={selectedImages.includes(pet.url)}
            onSelect={() => toggleSelectImage(pet.url)}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default PetList;

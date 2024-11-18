export const fetchPets = async (): Promise<Pet[]> => {
    const response = await fetch('https://eulerity-hackathon.appspot.com/pets');
    if (!response.ok) {
      throw new Error('Failed to fetch pets');
    }
    return response.json();
  };
  
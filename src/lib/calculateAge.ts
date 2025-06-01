// File: lib/calculateAge.ts

export default function calculatePetAge(
    species: 'dog' | 'cat',
    direction: 'toHuman' | 'toPet',
    age: number
  ): string {
    let converted: number;
  
    if (species === 'dog') {
      // Common rule of thumb: First 2 years = 24 human years, each year after = 5 human years
      if (direction === 'toHuman') {
        if (age <= 2) {
          converted = age * 12;
        } else {
          converted = 24 + (age - 2) * 5;
        }
        return `A ${age}-year-old dog is about ${converted} in human years.`;
      } else {
        if (age <= 24) {
          converted = age / 12;
        } else {
          converted = 2 + (age - 24) / 5;
        }
        return `${age} human years is about ${converted.toFixed(1)} in dog years.`;
      }
    }
  
    if (species === 'cat') {
      // Cat formula: 1st year = 15, 2nd = 9 more, then +4 per year
      if (direction === 'toHuman') {
        if (age === 1) converted = 15;
        else if (age === 2) converted = 24;
        else converted = 24 + (age - 2) * 4;
        return `A ${age}-year-old cat is about ${converted} in human years.`;
      } else {
        if (age <= 15) converted = 1;
        else if (age <= 24) converted = 2;
        else converted = 2 + (age - 24) / 4;
        return `${age} human years is about ${converted.toFixed(1)} in cat years.`;
      }
    }
  
    return 'Invalid species or direction.';
  }
  
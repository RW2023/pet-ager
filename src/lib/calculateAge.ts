type Species = 'dog' | 'cat';
type Direction = 'toHuman' | 'toPet';
type DogSize = 'small' | 'medium' | 'large';

export function calculateDogToHuman(age: number, size: DogSize = 'medium'): number {
  if (age <= 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;

  const rate = size === 'small' ? 4 : size === 'large' ? 6 : 5;
  return 24 + (age - 2) * rate;
}

export function calculateDogToPet(humanAge: number, size: DogSize = 'medium'): number {
  if (humanAge <= 0) return 0;
  if (humanAge <= 15) return 1;
  if (humanAge <= 24) return 2;

  const rate = size === 'small' ? 4 : size === 'large' ? 6 : 5;
  return 2 + (humanAge - 24) / rate;
}

export function calculateCatToHuman(age: number): number {
  if (age <= 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;
  return 24 + (age - 2) * 4;
}

export function calculateCatToPet(humanAge: number): number {
  if (humanAge <= 0) return 0;
  if (humanAge <= 15) return 1;
  if (humanAge <= 24) return 2;
  return 2 + (humanAge - 24) / 4;
}

export default function calculatePetAge(
  species: Species,
  direction: Direction,
  age: number,
  size?: DogSize
): string {
  let converted: number;

  if (species === 'dog') {
    converted =
      direction === 'toHuman'
        ? calculateDogToHuman(age, size)
        : calculateDogToPet(age, size);
    return direction === 'toHuman'
      ? `A ${age}-year-old ${size ?? 'medium'} dog is about ${converted} in human years.`
      : `${age} human years is about ${converted.toFixed(1)} in ${size ?? 'medium'} dog years.`;
  }

  if (species === 'cat') {
    converted =
      direction === 'toHuman'
        ? calculateCatToHuman(age)
        : calculateCatToPet(age);
    return direction === 'toHuman'
      ? `A ${age}-year-old cat is about ${converted} in human years.`
      : `${age} human years is about ${converted.toFixed(1)} in cat years.`;
  }

  return 'Invalid species or direction.';
}

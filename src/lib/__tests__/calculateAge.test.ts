import { describe, it, expect } from 'vitest';
import {
  calculateDogToHuman,
  calculateDogToPet,
  calculateCatToHuman,
  calculateCatToPet,
  default as calculatePetAge,
} from '../calculateAge';

describe('calculateAge utilities', () => {
  it('converts dog years to human years', () => {
    expect(calculateDogToHuman(1)).toBe(15);
    expect(calculateDogToHuman(5, 'large')).toBe(42);
  });

  it('converts human years to dog years', () => {
    expect(calculateDogToPet(20)).toBe(2);
    expect(calculateDogToPet(50, 'large')).toBeCloseTo(6.3, 1);
  });

  it('converts cat years to human years', () => {
    expect(calculateCatToHuman(3)).toBe(28);
  });

  it('converts human years to cat years', () => {
    expect(calculateCatToPet(28)).toBe(3);
  });

  it('uses the generic calculatePetAge function', () => {
    expect(calculatePetAge('dog', 'toHuman', 2)).toMatch('about 24');
    expect(calculatePetAge('cat', 'toPet', 28)).toMatch('about 3');
  });
});

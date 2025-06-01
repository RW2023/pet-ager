'use client'

import { useState } from 'react';
import calculatePetAge from '@/lib/calculateAge';

export default function CalculatorForm({ onResult }: { onResult: (result: string) => void }) {
    const [species, setSpecies] = useState<'dog' | 'cat'>('dog');
    const [direction, setDirection] = useState<'toHuman' | 'toPet'>('toHuman');
    const [age, setAge] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numericAge = parseFloat(age);
        if (!isNaN(numericAge)) {
            const result = calculatePetAge(species, direction, numericAge);
            onResult(result);
        } else {
            onResult('Please enter a valid number.');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-8 p-6 rounded-lg shadow-md bg-base-100"
        >
            <div className="form-control">
                <label htmlFor="species" className="label">
                    <span className="label-text text-base font-medium">Species</span>
                </label>
                <select
                    id="species"
                    className="select select-bordered"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value as 'dog' | 'cat')}
                >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="direction" className="label">
                    <span className="label-text text-base font-medium">Direction</span>
                </label>
                <select
                    id="direction"
                    className="select select-bordered"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value as 'toHuman' | 'toPet')}
                >
                    <option value="toHuman">Pet → Human Years</option>
                    <option value="toPet">Human → Pet Years</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="age" className="label">
                    <span className="label-text text-base font-medium">Age</span>
                </label>
                <input
                    id="age"
                    type="number"
                    className="input input-bordered"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="0"
                    placeholder="Enter age in years"
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary w-full">
                Calculate
            </button>

            <button
                type="reset"
                className="btn btn-ghost w-full"
                onClick={() => setAge('')}
            >
                Reset
            </button>
        </form>
    );
}

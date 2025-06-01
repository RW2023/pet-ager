// File: components/calculator/CalculatorForm.tsx

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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
                <label className="label">Species</label>
                <select
                    title='species'
                    className="select select-bordered"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value as 'dog' | 'cat')}
                >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
            </div>

            <div className="form-control">
                <label className="label">Direction</label>
                <select
                    title='direction'
                    className="select select-bordered"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value as 'toHuman' | 'toPet')}
                >
                    <option value="toHuman">Pet → Human Years</option>
                    <option value="toPet">Human → Pet Years</option>
                </select>
            </div>

            <div className="form-control">
                <label className="label">Age</label>
                <input
                    title='age'
                    type="number"
                    className="input input-bordered"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="0"
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary w-full">
                Calculate
            </button>
        </form>
    );
}

'use client'

import { useState } from 'react'
import { Calculator, RotateCcw } from 'lucide-react'
import calculatePetAge from '@/lib/calculateAge'

export default function CalculatorForm({ onResult }: { onResult: (result: string) => void }) {
    const [species, setSpecies] = useState<'dog' | 'cat'>('dog')
    const [direction, setDirection] = useState<'toHuman' | 'toPet'>('toHuman')
    const [age, setAge] = useState('')
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const numericAge = parseFloat(age)
        if (!isNaN(numericAge)) {
            const result = calculatePetAge(
                species,
                direction,
                numericAge,
                species === 'dog' ? size : undefined
            )
            onResult(result)
        } else {
            onResult('Please enter a valid number.')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="card bg-base-100 shadow-md p-6 space-y-8"
        >
            {/* Species Select */}
            <div className="form-control">
                <label htmlFor="species" className="label font-medium mb-1">
                    Species
                </label>
                <select
                    id="species"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value as 'dog' | 'cat')}
                    className="select select-bordered w-full"
                >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
            </div>

            {/* Dog Size */}
            {species === 'dog' && (
                <div className="form-control">
                    <label htmlFor="size" className="label font-medium mb-1">
                        Dog Size
                    </label>
                    <select
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value as 'small' | 'medium' | 'large')}
                        className="select select-bordered w-full"
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
            )}

            {/* Direction */}
            <div className="form-control">
                <label htmlFor="direction" className="label font-medium mb-1">
                    Direction
                </label>
                <select
                    id="direction"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value as 'toHuman' | 'toPet')}
                    className="select select-bordered w-full"
                >
                    <option value="toHuman">Pet → Human Years</option>
                    <option value="toPet">Human → Pet Years</option>
                </select>
            </div>

            {/* Age Input */}
            <div className="form-control">
                <label htmlFor="age" className="label font-medium mb-1">
                    Age
                </label>
                <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age in years"
                    min="0"
                    required
                    className="input input-bordered w-full"
                />
            </div>

            {/* Buttons */}
            <button
                type="submit"
                className="btn btn-primary w-full"
            >
                <Calculator className="w-4 h-4" />
                Calculate
            </button>

            <button
                type="reset"
                className="btn btn-outline w-full"
                onClick={() => setAge('')}
            >
                <RotateCcw className="w-4 h-4" />
                Reset
            </button>
        </form>
    )
}

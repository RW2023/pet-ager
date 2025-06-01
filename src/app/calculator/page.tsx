'use client';

import CalculatorForm from "@/components/calculator/CalculatorForm";
import CalculatorResult from "@/components/calculator/CalculatorResult";
import { useState } from "react";

export default function CalculatorPage() {
    const [result, setResult] = useState<string | null>(null);

    return (
        <main className="min-h-screen py-10 px-4 md:px-10">
            <h1 className="text-4xl font-bold text-center mb-6">Pet Age Calculator</h1>
            <div className="max-w-2xl mx-auto">
                <CalculatorForm onResult={setResult} />
                {result && <CalculatorResult result={result} />}
            </div>
        </main>
    );
}

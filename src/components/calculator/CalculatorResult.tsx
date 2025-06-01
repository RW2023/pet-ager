export default function CalculatorResult({ result }: { result: string }) {
    return (
        <div className="mt-8 p-6 rounded-lg bg-base-200 text-base-content shadow">
            <h2 className="text-xl font-semibold mb-2">Result</h2>
            <p className="text-lg">{result}</p>
        </div>
    );
}

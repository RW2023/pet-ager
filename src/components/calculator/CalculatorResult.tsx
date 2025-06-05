export default function CalculatorResult({ result }: { result: string }) {
    return (
        <div className="alert bg-info text-info-content shadow-lg mt-8">
            <div>
                <h2 className="font-semibold text-xl">Result</h2>
                <p className="text-lg">{result}</p>
            </div>
        </div>
    );
}

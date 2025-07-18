export default function SpoilerWheelButton({ spinWheel, filteredOptions }) {
    return (
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" onClick={spinWheel} disabled={filteredOptions.length === 0}>
            Spin
        </button>
    );
}

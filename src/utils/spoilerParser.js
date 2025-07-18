export function parseSpoilerLog(text) {
    const fromStorage = getItemsFromLocalStorage();
    return fromStorage || parseTxtSpoilerLog(text);
}

function getItemsFromLocalStorage() {
    try {
        const data = localStorage.getItem("keyItems");
        if (!data) return null;
        return JSON.parse(data);
    } catch (err) {
        console.error("Failed to parse keyItems from localStorage:", err);
        return null;
    }
}

function parseTxtSpoilerLog(text) {
    const includeRanges = [
        [101, 128],
        [163, 170],
        [173, 175],
    ];

    const shouldInclude = (index) =>
        includeRanges.some(([start, end]) => index >= start && index <= end);

    return text
        .split('\n')
        .map((line, index) => ({ line, index }))
        .filter(({ line, index }) =>
            shouldInclude(index) &&
            line.trim() !== '' &&
            !line.trim().startsWith('--')
        )
        .map(({ line, index }) => {
            const [item, location] = line.split(':');
            return {
                option: item?.trim() || 'Unknown item',
                location: location?.trim() || 'Unknown location',
                revealed: false,
                id: index // use i here if you want renumbering
            };
        });
}


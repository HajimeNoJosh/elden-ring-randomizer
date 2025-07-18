import { useEffect, useState } from 'react';
import Button from "../components/button";
import Text from "../components/text"
import SpoilerWheel from './spoilerWheel';

export default function SpoilerWheelMain({ keyItems, setKeyItems, setSelectedItem, selectedItem }) {
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    useEffect(() => {
        setFilteredOptions(keyItems.filter(item => !item.revealed));
    }, [keyItems]);

    const spinWheel = () => {
        const randomIndex = Math.floor(Math.random() * filteredOptions.length);
        setPrizeNumber(randomIndex);
        setMustSpin(true);
    };

    const wheelStop = () => {
        const selected = filteredOptions[prizeNumber];

        const updatedKeyItems = keyItems.map(item =>
            item.id === selected.id ? { ...item, revealed: true } : item
        );

        setKeyItems(updatedKeyItems);
        setSelectedItem(selected);
        localStorage.setItem('keyItems', JSON.stringify(updatedKeyItems));
    };

    return (
        <div className="main-wrapper">
            <Text tag={"h2"} text={selectedItem?.option} ></Text>
            <Text tag={"h3"} text={selectedItem?.location} ></Text>
            <SpoilerWheel filteredOptions={filteredOptions} mustSpin={mustSpin} prizeNumber={prizeNumber} setMustSpin={setMustSpin} wheelStop={wheelStop}></SpoilerWheel>
            <Button onClickEvent={spinWheel} shouldDisable={filteredOptions.length === 0} text={"spin"}></Button>
        </div>
    );
}

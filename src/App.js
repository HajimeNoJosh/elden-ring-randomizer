import { useEffect, useState } from 'react';
import SpoilerWheelMain from './wheel/spoilerWheelMain';
import { parseSpoilerLog } from './utils/spoilerParser';

export default function SpoilerWheelApp() {
  const [keyItems, setKeyItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/spoiler-log.txt')
      .then((res) => res.text())
      .then((text) => {
        const parsedItems = parseSpoilerLog(text);
        const unrevealed = parsedItems.filter(item => !item.revealed);
        setKeyItems(unrevealed);
      });
  }, []);

  return (
    <div className='main'>
      <SpoilerWheelMain keyItems={keyItems} setKeyItems={setKeyItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></SpoilerWheelMain>
    </div>
  )
}

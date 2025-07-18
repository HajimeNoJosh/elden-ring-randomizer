import { Wheel } from 'react-custom-roulette';

export default function SpoilerWheel({ filteredOptions, mustSpin, prizeNumber, setMustSpin, wheelStop }) {
  return (
    <div className='main-wheel'>
      {
        filteredOptions.length > 0 && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={filteredOptions}
            backgroundColors={['#1a1a40', '#3a476f', '#8aa9d6']}
            textColors={['#f0e6d2']}
            outerBorderColor="#333"
            radiusLineColor="#0f0f23"
            spinDuration={.05}
            fontSize={10}
            textDistance={55}
            onStopSpinning={() => {
              setMustSpin(false);
              wheelStop();
            }}
          />
        )
      }
    </div>
  );
}

import React, { useState } from 'react';


const SpinTheWheel = () =>
{
    const wheelOptions = [
        'Prishtine!',
        'Prizren!',
        'Istog!',
        'Mitrovice!',
        'Gjakove!',
        'Ferizaj!',
        'Peje!',
        'Gjilan!'
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const spinWheel = () =>
    {
        setIsSpinning(true);
        const randomIndex = Math.floor(Math.random() * wheelOptions.length);
        setTimeout(() =>
        {
            setSelectedOption(wheelOptions[randomIndex]);
            setIsSpinning(false);
        }, 800);
    };

    return (
        <div>
            <h1 style={{fontFamily:'Inter'}}>Spin the Wheel</h1>
            <div className="wheel">
                {isSpinning ? (
                    <div className="spinner">
                        <div className="inner-spinner"></div>
                    </div>
                ) : (
                    <div className="selected-option" style={{fontFamily:'Inter', color:'#1a3264'}}>{selectedOption}</div>
                )}
            </div>
            <button onClick={spinWheel} disabled={isSpinning}>
                {isSpinning ? 'Spinning...' : 'Spin'}
            </button>
        </div>
    );
};

export default SpinTheWheel;
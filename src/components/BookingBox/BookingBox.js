/* import React from 'react';

function BookingBox({ option, quantity, onClick }) {
    const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
    const handleClick = () => {
        onClick({ option, quantity: currentQuantity });
    };
    return (
        <div>
            <div>
                <p>
                    <h3>{option}</h3><br />
                </p>
            </div>
            <div>
                <input
                    className="input"
                    type="number"
                    value={currentQuantity}
                    onChange={({ target }) => setCurrentQuantity(target.value)}
                    />
            </div>
                <button className="button is-info" onClick={handleClick}>
                +
                </button>
        </div>
    );
}

export default BookingBox;
 */
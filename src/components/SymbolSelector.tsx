import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { setCurrentSymbol } from '../store/slices/priceDataSlice';

const SymbolSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentSymbol = useSelector((state: RootState) => state.priceData.currentSymbol);
  const [isOpen, setIsOpen] = useState(false);
  const [newSymbol, setNewSymbol] = useState(currentSymbol);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCurrentSymbol(newSymbol.toUpperCase())); 
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="button">
        Change Symbol
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Change Symbol</h2>
            <p>Example: ETH, BTC, USDT, BNB, SOL </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newSymbol}
                onChange={(e) => setNewSymbol(e.target.value.toUpperCase())} 
              />
              <button type="button" onClick={() => setIsOpen(false)} className="button">
                Cancel
              </button>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymbolSelector;

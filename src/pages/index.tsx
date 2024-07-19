// src/pages/index.tsx
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { updatePriceData } from '../store/slices/priceDataSlice';
import { fetchPriceData, fetchAllPriceData } from '../utils/api';
import PriceTable from '../components/PriceTable';
import SymbolSelector from '../components/SymbolSelector';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentSymbol = useSelector((state: RootState) => state.priceData.currentSymbol);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchPriceData(currentSymbol);
      dispatch(updatePriceData(data));
    } catch (error) {
      console.error('Error fetching price data:', error);
    }
  }, [dispatch, currentSymbol]);

  const fetchAllData = useCallback(async () => {
    try {
      const data = await fetchAllPriceData();
      dispatch(updatePriceData(data));
    } catch (error) {
      console.error('Error fetching all price data:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData(); // Fetch data for current symbol or all data initially

    const interval = setInterval(() => {
      if (currentSymbol) {
        fetchData(); // Fetch data for current symbol at intervals
      } else {
        fetchAllData(); // Fetch all data at intervals
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [dispatch, currentSymbol, fetchData, fetchAllData]);

  const handleReset = () => {
    fetchAllData(); 
  };

  return (
    <div className="container">
      <h1>Real-time Crypto Data</h1>
      <div className="controls">
        <SymbolSelector />
        <button onClick={handleReset} className="all">ALL Data</button>
      </div>
      <PriceTable />
    </div>
  );
};

export default Home;

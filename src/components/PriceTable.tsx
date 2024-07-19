import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import moment from 'moment';

const PriceTable: React.FC = () => {
  const { data, currentSymbol } = useSelector((state: RootState) => state.priceData);

  const formatDelta = (delta: any): string => {
    if (typeof delta === 'number') {
      return `${delta.toFixed(2)}%`;
    } else if (delta && typeof delta.day === 'number') {
      return `${delta.day.toFixed(2)}%`;
    } else {
      return 'N/A';
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{moment(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{item.code}</td>
              <td>${item.rate.toFixed(2)}</td>
              <td>${item.volume.toLocaleString()}</td>
              <td>${item.cap.toLocaleString()}</td>
              <td>{formatDelta(item.delta)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
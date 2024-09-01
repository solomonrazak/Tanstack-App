
import React, { useEffect, useState } from 'react';
import { useSearch } from '@tanstack/react-router';
import { fetchData, Endpoint } from '../utils/fetchData'; 


const DataDisplay: React.FC = () => {
  const search = useSearch({ from: '/dataDisplay' }) as { endpoint?: Endpoint };
  const endpoint = search.endpoint || 'ip'; 

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const fetchedData = await fetchData(endpoint); 
        setData(fetchedData);
      } catch (err: any) {
        console.error('Error fetching data:', err); 
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [endpoint]);

  if (loading) return <div className="loading-message">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="data-display-container">
      <h3>Data from Endpoint: {endpoint}</h3>
      <pre className="data-display-json">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataDisplay;


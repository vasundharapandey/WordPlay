import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchPlayers = async () => {
      try {
        // Mocking an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = [
          { rank: 1, name: 'Alice', rating: 2400 },
          { rank: 2, name: 'Bob', rating: 2300 },
          { rank: 3, name: 'Charlie', rating: 2200 },
          { rank: 4, name: 'David', rating: 2100 },
          { rank: 5, name: 'Eve', rating: 2000 },
        ];
        setPlayers(data);
      } catch (error) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Leaderboard</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="w-1/4 py-2">Rank</th>
            <th className="w-1/2 py-2">Name</th>
            <th className="w-1/4 py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.rank} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="text-center py-2">{player.rank}</td>
              <td className="text-center py-2">{player.name}</td>
              <td className="text-center py-2">{player.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

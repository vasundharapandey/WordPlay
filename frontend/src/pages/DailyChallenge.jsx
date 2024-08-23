import React, { useState, useEffect } from 'react';

const DailyChallenge = () => {
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        // Simulate fetching challenge data with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = {
          title: 'Solve the Puzzle',
          description: 'Use your skills to solve today\'s wordy puzzle.',
        };
        setChallenge(data);
      } catch (error) {
        setError('Failed to load challenge data');
      } finally {
        setLoading(false);
      }
    };

    fetchChallenge();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Daily Challenge</h1>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
        <p className="text-gray-600 mb-4">{challenge.description}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Attempt Challenge
        </button>
      </div>
    </div>
  );
};

export default DailyChallenge;

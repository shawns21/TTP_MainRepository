import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseView from './ExerciseView';

const BeginnerWorkout = () => {
  const [beginnerData, setBeginnerData] = useState([]);

  const fetchData = async (params) => {
    const config = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params,
      headers: {
        'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(config);
      const exercise = response.data[1];
      return exercise;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchAllExercises = async () => {
    const exercises = [];
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'glutes' }));
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'chest' }));
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'middle_back' }));
    exercises.push(await fetchData({ difficulty: 'beginner', muscle: 'biceps'}));
    return exercises;
  };

  useEffect(() => {
    const fetchExercises = async () => {
      const exercises = await fetchAllExercises();
      setBeginnerData(exercises);
    };
    
    fetchExercises();
  }, []);

  return (
    <div>
      <p>Beginner Routine</p>
      {beginnerData.map((exercise, index) => (
        <div key={index}>
          {index === 0 && <p>Legs</p>}
          {index === 1 && <p>Chest</p>}
          {index === 2 && <p>Back</p>}
          {index === 3 && <p>Arms</p>}
          <ExerciseView exercise={exercise} />
        </div>
      ))}
    </div>
  );
};

export default BeginnerWorkout;


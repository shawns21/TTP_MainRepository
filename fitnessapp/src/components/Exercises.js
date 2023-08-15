import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles/Excercise.css';
import { useExerciseContext } from './ExerciseContext';
import { useMyWorkoutContext } from './MyWorkoutContext';
import ExerciseView from './ExerciseView';

const Exercises = () => {
  const { exerciseList, updateList } = useExerciseContext();
  const { addExercise, error } = useMyWorkoutContext();
  const [searchTerm, setSearchTerm] = useState("");

  const searchExercise = async () => {
    
    const exerciseData = await {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {name: `${searchTerm}`},
      headers: {
        'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    console.log(exerciseData);
    updateList(exerciseData);
  }

  const addIntoWorkout = (exercise) => {
    addExercise(exercise);
  };



  return (
    <div>  
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
      <button onClick={searchExercise}></button>
      {exerciseList.map((exercise) => 
          <div>
            <div style={{ backgroundColor: "red" }}>
              <ExerciseView exercise={exercise}></ExerciseView>
            </div>
            <button onClick={() => addIntoWorkout(exercise)}>Add workout</button>
            <p>{error}</p>
            <div className='seperator'></div>
          </div>
      )}  
      
    </div>
  );
};

export default Exercises;

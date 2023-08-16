import React, { useState, useEffect, useContext } from 'react';
import './styles/Excercise.css';
import { useExerciseContext } from './ExerciseContext';
import { useMyWorkoutContext } from './MyWorkoutContext';
import ExerciseDetail from './ExerciseDetail';
import ButtonComponent from './ButtonComponent';

const Exercises = () => {
  const { exerciseList, updateList } = useExerciseContext();
  const { addExercise, error } = useMyWorkoutContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetails, setShowDetails] = useState([]);
  const [exerciseDifficulty, setExerciseDifficulty] = useState("");
  const [exerciseMuscle, setExerciseMuscle] = useState(""); 
  const [exerciseType, setExerciseType] = useState("");

  const searchExercise = async () => {
    const exerciseData = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {name: `${searchTerm}`, difficulty: `${exerciseDifficulty}`, muscle: `${exerciseMuscle}`, type: `${exerciseType}` },
      headers: {
        'X-RapidAPI-Key': '31572d2061mshe3469ce2d83480dp1d5232jsn187abbe9e10e',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    updateList(exerciseData);
    resetExerciseDetails();
  }

  const resetExerciseDetails = () => {
    setShowDetails(new Array(exerciseList.length).fill(false));
  };

  const addIntoWorkout = (exercise) => {
    addExercise(exercise);
  };

  const toggleDetails = (index) => {
    setShowDetails(prevState => {
      const updatedDetails = [...prevState];
      updatedDetails[index] = !prevState[index];
      return updatedDetails;
    });
  };

  const handleExerciseDifficulty = (difficulty) => {
    setExerciseDifficulty(difficulty);
  };

  const handleExerciseMuscle = (muscle) => {
    setExerciseMuscle(muscle);
  }

  const handleExerciseType = (type) => {
    setExerciseType(type);
  }


  return (
    <div>  
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
      <button onClick={searchExercise}>Search</button>
      <div> 
        <ButtonComponent handleExerciseDifficulty={handleExerciseDifficulty} handleExerciseMuscle={handleExerciseMuscle} handleExerciseType={handleExerciseType} exerciseDifficulty={exerciseDifficulty} exerciseMuscle={exerciseMuscle} exerciseType={exerciseType}></ButtonComponent>
      </div>
      {exerciseList.map((exercise, index) => 
          <div key={index}>
            <p>{exercise.name}</p>
            <button onClick={() => toggleDetails(index)}>
              {showDetails[index] ? "Hide Details" : "View Details"}
            </button>
            {showDetails[index] && (
            <div>
              <ExerciseDetail exercise={exercise}></ExerciseDetail>
            </div>
            )}
            <button onClick={() => addIntoWorkout(exercise)}>Add workout</button>
            <p>{error}</p>
            <div className='seperator'></div>
          </div>
      )}  
      
    </div>
  );
};

export default Exercises;


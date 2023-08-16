import React from "react";
import './styles/ButtonComponent.css';

const ButtonComponent = ({ handleExerciseDifficulty, handleExerciseMuscle, handleExerciseType, exerciseDifficulty, exerciseMuscle, exerciseType }) => {
  const muscleOptions = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'];

  const difficultyOptions = ['beginner', 'intermediate', 'expert'];

  const typeOptions = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman'];

  const toggleMuscleOption = (muscle) => {
    if (exerciseMuscle === muscle) {
      handleExerciseMuscle("");
    } else {
      handleExerciseMuscle(muscle);
    }
  };
  
  const toggleDifficultyOption = (difficulty) => {
    if (exerciseDifficulty === difficulty) {
      handleExerciseDifficulty("");
    } else {
      handleExerciseDifficulty(difficulty);
    }
  };

  const toggleTypeOption = (type) => {
    if (exerciseType === type) {
        handleExerciseType("");
    } else {
        handleExerciseType(type);
    }
  };

  return (
    <div>  
      <div style={{ backgroundColor: "red"}}>
       <p>Difficulty</p>
        {difficultyOptions.map(difficulty => (
          <button
            key={difficulty}
            className={exerciseDifficulty === difficulty ? "selected" : ""}
            onClick={() => toggleDifficultyOption(difficulty)}
          >
            {difficulty}
          </button>
        ))}
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <p>Muscle</p>
        {muscleOptions.map(muscle => (
          <button
            key={muscle}
            className={exerciseMuscle === muscle ? "selected" : ""}
            onClick={() => toggleMuscleOption(muscle)}
          >
            {muscle}
          </button>
        ))}
      </div>
      <div style={{ backgroundColor: "green"}}>
       <p>Type</p>
        {typeOptions.map(type => (
          <button
            key={type}
            className={exerciseType === type ? "selected" : ""}
            onClick={() => toggleTypeOption(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonComponent;

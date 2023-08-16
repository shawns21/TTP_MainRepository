import React, { useState } from "react";
import { useMyWorkoutContext } from "./MyWorkoutContext";
import ExerciseView from "./ExerciseView";


const MyRoutine = () => {
    const { savedExercises, removeExercise, setSavedExercises } = useMyWorkoutContext();

    const handleSetDetailsChange = (index, setEntry) => {
        const updatedExercises = [...savedExercises];
        updatedExercises[index].sets = setEntry;
        localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
        setSavedExercises(updatedExercises);
    };

    const handleRepsDetailsChange = (index, repsEntry) => {
        const updatedExercises = [...savedExercises];
        updatedExercises[index].reps = repsEntry;
        localStorage.setItem('savedExercises', JSON.stringify(updatedExercises));
        setSavedExercises(updatedExercises);
    };

    const takeOutWorkout = (exerciseIndex) => {
        removeExercise(savedExercises[exerciseIndex]);
    };

    return (
        <div>
            {console.log(savedExercises)}
            {savedExercises.map((exercise, index) => (
                <div key={index}>
                    <div>
                        <ExerciseView exercise={exercise}></ExerciseView>
                    </div>
                    <p>Reps:</p>
                    <input
                        value={exercise.reps}
                        onChange={(event) => handleRepsDetailsChange(index, event.target.value)}
                    />
                    <p>Sets per Rep:</p>
                    <input
                        value={exercise.sets}
                        onChange={(event) => handleSetDetailsChange(index, event.target.value)}
                    /> 
                    <button onClick={() => takeOutWorkout(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default MyRoutine;
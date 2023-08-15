import React from "react";
import { useMyWorkoutContext } from "./MyWorkoutContext";
import ExerciseView from "./ExerciseView";


const MyRoutine = () => {
    const { savedExercises, removeExercise } = useMyWorkoutContext();

    const takeOutWorkout = (exercise) => {
        removeExercise(exercise)
    }

    const setDetails = () => {
        const sets = "";
        const reps = "";
    }

    return (
        <div>
            {console.log(savedExercises)}
            {savedExercises.map((exercise) => 
                <div>
                    <ExerciseView exercise={exercise} />
                    <p>Sets: </p>
                    <p>Reps: </p>
                    <button onClick={() => takeOutWorkout(exercise)}>Remove</button>
                </div>
            )}
        </div>
    );
}

export default MyRoutine;
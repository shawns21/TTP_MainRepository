import React from "react";

const ExerciseView = ({ exercise }) => {
    return (
        <div style={{backgroundColor: 'red'}}>
            <p>{exercise.name}</p>
            <p>Equipment: {exercise.equipment}</p>
            <p>Instruction: {exercise.instructions}</p>
        </div>
    );
}

export default ExerciseView;


import React from "react";

const ExerciseView = ({ exercise }) => {
    return (
        <div style={{backgroundColor: 'red'}}>
            <p>Name: {exercise.name}</p>
            <p>Instruction: {exercise.instructions}</p>
        </div>
    );
}

export default ExerciseView;


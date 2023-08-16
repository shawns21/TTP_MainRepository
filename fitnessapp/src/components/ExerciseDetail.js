import React from "react";

const ExerciseDetail = ({ exercise }) => {
    return (
        <div style={{backgroundColor: 'blue'}}>
            {exercise.equipment == "other" ? "" : <p>Equipment: {exercise.equipment}</p>}
            <p>Muscle: {exercise.muscle}</p>
            <p>Difficulty: {exercise.difficulty}</p>
            <p>Instruction: {exercise.instructions}</p>
        </div>
    );
}

export default ExerciseDetail;
import React from 'react';
import { Link } from 'react-router-dom';

const Workouts = () => {    

    return (
        <div>
           <Link to="/workouts/my-routine">My Routine</Link>
           <Link to="/workouts/beginner-routine">Beginner Routine</Link>
        </div>
    );
};

export default Workouts;
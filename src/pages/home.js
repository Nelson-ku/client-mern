//fetching data we import two functions the useEffect and the useState from react 
import { useEffect, useState } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails"



const Home = () => {

    const[workouts,setWorkouts]=useState(null)


// ensure we only render the data once when the home component is first rendered
//  http://localhost:8000/api/workouts
useEffect(()=>{
    const fetchWorkouts= async ()=>{
       const response= await fetch('/api/workouts')
       const json =await response.json()

       if (response.ok){
        setWorkouts(json)

       }
    }
    fetchWorkouts()
},[])


  return (
    <div className="Home">
      <div className="workouts">
        {workouts && workouts.map((Workout)=>(
            //fetching data after che the conditions
            <WorkoutDetails key={Workout._id} Workout={Workout}/>
        ))}
      </div>
    </div>
  );
};

export default Home;

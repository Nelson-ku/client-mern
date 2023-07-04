//fetching data we import two functions the useEffect and the useState from react 
import { useEffect, useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const baseUrl = "http://localhost:8000"

const Home = () => {

  const {workouts, dispatch}=useWorkoutContext()
    // const[workouts,setWorkouts]=useState(null)
// ensure we only render the data once when the home component is first rendered
//  http://localhost:8000/api/workouts
useEffect(()=>{
    const fetchWorkouts= async ()=>{
       const response= await fetch(`${baseUrl}/api/workouts/allWorkouts`)
       const json =await response.json()
       if (response.ok){
        dispatch({type:'SET_WORKOUTS',payload:json})
       }
    }
    fetchWorkouts()
},[dispatch])
  return (
    <div className="Home">
      <div className="workouts">
        {workouts && workouts.map((Workout)=>(
            //fetching data after che the conditions
            <WorkoutDetails key={Workout._id} Workout={Workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;

import { useWorkoutContext } from "../hooks/useWorkoutContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const baseUrl = "http://localhost:8000"

const WorkoutDetails =({Workout})=>{
  console.log('Workout obj', Workout)
  const {dispatch}=useWorkoutContext()

  const handleClick=async()=>{
    const response= await fetch(`${baseUrl}/api/workouts/deleteworkout/`+Workout._id,{
      method:'DELETE'
    })
    const json=await response.json()

    if (response.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }
  }
    return(
        <div className="workout-details">
          <h4>{Workout.title}</h4>
          <p><strong>Load (kg)</strong>{Workout.load}</p>
          <p><strong>reps(kg)</strong>{Workout.reps}</p>
          <p>{formatDistanceToNow(new Date(Workout.createdAt),{addSuffix:true})}</p>
          <span className="material-icons" onClick={handleClick} >delete</span>
        </div>
    )
}

export default  WorkoutDetails;

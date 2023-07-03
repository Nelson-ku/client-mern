import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
const baseUrl = "http://localhost:8000"




const WorkoutForm = ()=>{
    const{dispatch}=useWorkoutContext()
   //create states for each attribute of the form for creation
   const [title,setTitle]= useState('')
   const [load,setLoad]= useState('')
   const [reps,setReps]= useState('')
   const [error,setError]=useState(null)

   const handleSubmit=async(e)=>{
    e.preventDefault()

    const workout={title,load,reps}

    const response= await fetch(`${baseUrl}/api/workouts/createworkouts`,{
        method:'POST',
        body:JSON.stringify(workout),
        headers:{'Content-Type':'application/json'}
    })
    const json =await response.json()

    if (!response.ok){
        setError(json.error)

    }
    if(response.ok)
    setTitle('')
    setLoad('')
    setReps('')
    setError(null)
    console.log('workout added', json)
    dispatch({type:'CREATE_WORKOUT',payload:json})
   }

    return(
         //create a form
         <form className='create' onSubmit={handleSubmit}>
         <h3> Add a New Workout</h3>
         <label>Exercise Title:</label>
         <input type='text' onChange={(e)=> setTitle(e.target.value)
         }/>
          <label>Exercise Load in Kg:</label>
         <input type='number' onChange={(e)=> setLoad(e.target.value)
         }/>
          <label>Exercise reps :</label>
         <input type='number' onChange={(e)=> setReps(e.target.value)
         }/>
         <button>Adding Workout</button>
         {error && <div className="error" >{error}</div>}
            
        </form>

    )
           
}

export default WorkoutForm
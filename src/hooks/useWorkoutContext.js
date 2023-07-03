import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

//EXPORTING FOR USE OF THE CONTEXTS

export const useWorkoutContext =()=>{
    const context =useContext(WorkoutContext)

    if (!context){
        throw Error( "useWorkoutContext must be used inside an Workout ContextProvider ")
    }

    return context
}



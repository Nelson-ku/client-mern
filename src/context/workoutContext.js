import { createContext, useReducer } from "react";

export const WorkoutContext =createContext()
//changing the state of the workouts depending with the specified actions
export const workoutsReducer=(state,action)=>{
    switch(action.type){
        case 'SET_WORKOUTS':
            return{
                workouts:action.payload
            }
        case "CREATE_WORKOUT":
            return{
                workouts:[action.payload,...state.workouts]
            }
        default:
            return state
    }
}

export const WorkoutContextProvider=({children}) =>{

    const [state,dispatch]=useReducer(workoutsReducer,{
        workouts:null
    })
    //dispatchEvent({type:'set_workouts',payload:})
    return(
        <WorkoutContext.Provider value={{...state,dispatch}}>
         {children}
        </WorkoutContext.Provider>
    )
}
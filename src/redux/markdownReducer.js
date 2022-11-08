import {createSlice} from '@reduxjs/toolkit'


export const markDownReducer = createSlice({
    name:'markdown',
    initialState:{
       markdownText:{
          
       }
    },
    reducers:{
      setMarkdown:(state,action)=>{
         return{
            ...state,
            markdownText:action.payload
         }
      }
    }
})

export default markDownReducer.reducer;
export const {setMarkdown} = markDownReducer.actions;
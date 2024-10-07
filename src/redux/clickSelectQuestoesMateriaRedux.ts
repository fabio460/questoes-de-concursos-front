import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    select:'Conteudo'
}

const clickSelectQuestoesMateria = createSlice({
  name: "clickSelectQuestoesMateria",
  initialState,
  reducers: {
    clickSelect:(state, actions)=>{
       state.select = actions.payload
    }
  }
});

export const {clickSelect} = clickSelectQuestoesMateria.actions

export default clickSelectQuestoesMateria.reducer
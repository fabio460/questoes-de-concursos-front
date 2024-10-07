import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pagina:1
}

const paginaRedux = createSlice({
  name: "paginaRedux",
  initialState,
  reducers: {
    getPagina:(state, action)=>{
        state.pagina = action.payload
    }
  }
});

export const {getPagina} = paginaRedux.actions

export default paginaRedux.reducer
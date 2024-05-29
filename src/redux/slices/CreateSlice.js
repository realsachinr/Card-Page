import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
    name : 'cards',
    initialState : {},
    reducers : {
        removeCard: (state, action) => {
            state.cards = state.cards.filter((card) => 
                card.id !== action.payload
            )
        },
        nextpage : (state) => {
            
        }
    }
})

export const { } = CreateSlice.actions;
export default CreateSlice.reducer;
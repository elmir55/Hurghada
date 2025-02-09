import { configureStore } from '@reduxjs/toolkit'
import authSlice from "../features/Auth/store/slice"

const reducer = { 
	auth: authSlice,
}; 

export const store = configureStore({ 
	reducer: reducer, 
});
import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

const todoStore = configureStore({
    reducer : {
        todoStore : todoSlice
    }
})

export default todoStore
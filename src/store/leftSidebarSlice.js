import { createSlice } from '@reduxjs/toolkit'

export const leftSidebarSlice = createSlice({
    name: 'leftSidebar',
    initialState: {
        title: "",  
        isOpen : false,   
        bodyType : "",   
        size : "",   
        extraObject : {},   
    },
    reducers: {

        openLeftSidebar: (state, action) => {
            const {header, bodyType, extraObject, size} = action.payload
            state.isOpen = true
            state.bodyType = bodyType
            state.header = header
            state.extraObject = extraObject
        },

        closeLeftSidebar: (state, action) => {
            state.isOpen = false
            state.bodyType = ""
            state.header = ""
            state.extraObject = {}
        },

    }
})

export const { openLeftSidebar, closeLeftSidebar } = leftSidebarSlice.actions

export default leftSidebarSlice.reducer
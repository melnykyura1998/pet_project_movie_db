import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {actorsService} from "../../services/actors.service";

const initialState={
    actorId:'',
    actorsByQuery:'',
    status:'',
    pagination:''
}

const GetByQuery = createAsyncThunk(
    'actorsSlice/GetByQuery',
    async ({page,query})=>{
        const {data} = await actorsService.getByQuery(page,query);
        return data;
    }
)
const actorsSlice = createSlice({
    name:'actorsSlice',
    initialState,
    reducers:{
        // getId:(state,actions)=>{
        //     const {id} = actions.payload;
        //     state.actorId = id;
        // },
        pagination:(state,actions)=>{
            state.pagination = actions.payload;
        }
    },
    extraReducers:(builder =>{
        builder
            .addCase(GetByQuery.fulfilled,(state,actions)=>{
                const {results} = actions.payload;
                state.actorsByQuery = results;
            })
            .addCase(GetByQuery.rejected, (state, action) => {
                const {status} = action.payload;
                state.status = status
            })
    })
})
const {reducer:actorsReduser,actions:{getId,pagination}} = actorsSlice;

const actorsActions = {
    getId,
    GetByQuery,
    pagination,
}
export {
    actorsActions,actorsReduser
}

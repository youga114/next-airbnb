import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
} from "react-redux";
import user from "./user";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import common from "./common";
import auth from "./auth";
import registerRoom from "./registerRoom";
import searchRoom from "./searchRoom";
import room from "./room";

const rootReducer = combineReducers({
    common: common.reducer,
    user: user.reducer,
    auth: auth.reducer,
    registerRoom: registerRoom.reducer,
    searchRoom: searchRoom.reducer,
    room: room.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        if (state === initialRootState) {
            return {
                ...state,
                ...action.payload,
            };
        }
        return state;
    }
    return rootReducer(state, action);
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore: MakeStore<ToolkitStore> = () => {
    const store = configureStore({
        reducer,
        devTools: true,
    });
    initialRootState = store.getState();
    return store;
};

export const wrapper = createWrapper(initStore);

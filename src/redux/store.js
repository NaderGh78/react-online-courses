import { configureStore } from "@reduxjs/toolkit";
import { sideBarReducer } from "./slices/sideBarSlice";
import { themeReducer } from "./slices/themeSlice";
import { popUpReducer } from "./slices/popUpSlice";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const store = configureStore({
    reducer: {
        sidebar: sideBarReducer,
        theme: themeReducer,
        popUpProfile: popUpReducer,
    }
});

export default store;
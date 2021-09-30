import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "./reducers/postReducer";
import productReducer from "./reducers/productReducer";
import categoriesReducer from "./reducers/categoryReducer";
import { Provider } from "react-redux";

// const authPersistConfig = {
// 	key: "auth",
// 	storage: storage,
// 	keyPrefix: "redux-",
// 	whitelist: ["isAuthenticate"],
// 	blacklist: ["login", "register", "refreshToken", "logout", "authCurrent"]
// };

const rootReducer = {
	posts: postReducer,
	products: productReducer,
	categories: categoriesReducer
};

const store = configureStore({
	reducer: rootReducer
});

const persistor = persistStore(store);

export { persistor };

const DataProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;

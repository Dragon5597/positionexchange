import { createSlice } from "@reduxjs/toolkit";

const categories = [
	{
		id: "1",
		name: "OB2B blog",
		description: "Day la blog cua ob2b"
	}
];

const initialState = {
	getCategories: {
		loading: false,
		error: null,
		data: [...categories]
	}
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		// getCategory
		getCategoriesRequest: ({ getCategories }, { payload }) => {
			getCategories.loading = true;
		},

		getCategoriesSuccess: ({ getCategories }, { payload }) => {
			getCategories.loading = false;
			getCategories.data = payload;
			getCategories.error = null;
		},

		getCategoriesFailure: ({ getCategories }, { payload }) => {
			getCategories.loading = false;
			getCategories.data = [];
			getCategories.error = payload;
		}
	}
});

const categoriesReducer = categoriesSlice.reducer;
const categoriesAction = categoriesSlice.actions;

export { categoriesReducer as default, categoriesAction };

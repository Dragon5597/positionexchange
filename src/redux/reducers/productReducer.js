import { createSlice } from "@reduxjs/toolkit";

const products = [
	{
		id: "1",
		name: "Honey",
		description: "Honey made in USA",
		price: 80000,
		origin: "China",
		quantity: 10000,
		auction: "AU000001",
		countInStock: 100000,
		star: 4,
		isSale: true
	},
	{
		id: "2",
		name: "Gopy Grouper",
		description: "Fresher fish by opico",
		price: 80000,
		origin: "USA",
		quantity: 10000,
		auction: "AU000002",
		countInStock: 100000,
		star: 3,
		isSale: false
	}
];

const initialState = {
	getProducts: {
		loading: false,
		error: null,
		data: [...products]
	}
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		// getPost
		getProductsRequest: ({ getProducts }) => {
			getProducts.loading = true;
		},

		getProductsSuccess: ({ getProducts }, { payload }) => {
			getProducts.loading = false;
			getProducts.data = payload;
			getProducts.error = null;
		},

		getProductsFailure: ({ getProducts }, { payload }) => {
			getProducts.loading = false;
			getProducts.data = [];
			getProducts.error = payload;
		}
	}
});

const productAction = productSlice.actions;
const productReducer = productSlice.reducer;

export { productReducer as default, productAction };

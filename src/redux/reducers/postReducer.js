import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const posts = [
	{
		id: "1",
		title: "A Next-Generation Smart Contract And Decentralized Blockchain Platform",
		subTitle:
			"The traditional business is opposite to e-business because it is not so convenient because we need to go out and catch clients, the benefit of this tr...",
		createdAt: moment().format("YYYY-MM-DD HH:mm"),
		author: "Administrator"
	},
	{
		id: "2",
		title: "A Secure Spectrum Auction Scheme Without The Trusted Party Based On The Smart Contract",
		subTitle:
			"Auction is an effective way of spectrum resource allocation. However, fraudulent behaviors in auction transactions often occur due to the openness of ...",
		createdAt: moment().format("YYYY-MM-DD HH:mm"),
		author: "Administrator"
	},
	{
		id: "3",
		title: "Sustainable B2B E-Commerce And Blockchain-Based Supply Chain Finance",
		subTitle:
			"In today’s world, e-commerce is essential to competitiveness and contributes benefits to many companies. For instance, switching to sustainable B2B ...",
		createdAt: moment().format("YYYY-MM-DD HH:mm"),
		author: "Administrator"
	},
	{
		id: "4",
		title: "Research On Blockchain Technologies In Bidding Systems",
		subTitle:
			"Due to the popularity of the Internet, most people have gradually accepted electronic integrated applica-tions. Whether it is communication, transac...",
		createdAt: moment().format("YYYY-MM-DD HH:mm"),
		author: "Administrator"
	}
];

const initialState = {
	getPosts: {
		loading: false,
		error: null,
		data: [...posts]
	}
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		// getPosts
		getPostsRequest: ({ getPosts }, { payload }) => {
			getPosts.loading = true;
		},

		getPostsSuccess: ({ getPosts }, { payload }) => {
			getPosts.loading = false;
			getPosts.data = payload;
			getPosts.error = null;
		},

		getPostsFailure: ({ getPosts }, { payload }) => {
			getPosts.loading = false;
			getPosts.data = [];
			getPosts.error = payload;
		}
	}
});

const postReducer = postSlice.reducer;
const postAction = postSlice.actions;

export { postReducer as default, postAction };

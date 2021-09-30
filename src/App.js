import React from "react";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from "web3";
import AppRouter from "./routers";
import DataProvider from "./redux/store";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import { persistor } from "./redux/store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import "./scss/main.scss";
// import GoogleAnalytics from "./components/GoogleAnalytics";
import { ContractProvider } from './context/ContractContext';
import { SERVER_URI } from './constants';

const getLibrary = (provider, connector) => {
  // return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
  return new Web3(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const client = new ApolloClient({
  uri: SERVER_URI,
  cache: new InMemoryCache()
});

function App() {
	return (
		<DataProvider>
			<ApolloProvider client={client}>
				<Web3ReactProvider getLibrary={getLibrary}>
				{/* <GoogleAnalytics /> */}
					<ContractProvider>
						<AppRouter />
					</ContractProvider>
				</Web3ReactProvider>
			</ApolloProvider>
		</DataProvider>
	);
}

export default App;

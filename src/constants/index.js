export const API_URL = "http://localhost:5000/api";

export const pathRouter = {
	home: "/",
	policy: "/policy",
	terms: "/terms",
	library: "/library"
};

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const API_GET_USER = "https://like2like.org/api/dashboard/useramount";

export const SOCIAL_LINK = {
	JOIN_TEAM: "https://miner.like2like.net/",
	FACEBOOK: "https://www.facebook.com/like2like.org/",
	TELEGRAM: "https://t.me/hotrolike2like",
	YOUTUBE: "https://www.youtube.com/watch?v=ip9qDTOxzF0",
	GOOGLE: "Support@like2like.org",
	ZALO: "https://chat.zalo.me/?g=jbbikw179"
};

// DEVELOPMENT
// export const SERVER_URI = 'http://localhost:4000/graphql';
// export const chainId = 1337; 
// export const chainHex = '0x539';
// export const decimals = 1;
// export const chainData = { 
//   chainId: chainHex, chainName: 'Ganache', 
//   nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 }, 
//   rpcUrls: ['https://localhost:7545']
// };

// PRODUCTION
export const SERVER_URI = 'http://give.like2like.net/graphql';
export const chainId = 97;
export const chainHex = '0x61';
export const decimals = 1;
export const chainData = { 
  chainId: chainHex, chainName: 'BSC Testnet', 
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 }, 
  rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s3.binance.org:8545"]
};
export const TokenContract = {
  abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userId","type":"address"}],"name":"ChangeStatus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"}],"name":"DonateUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userId","type":"address"}],"name":"NewUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addRoom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkExistsUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"createUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"donateToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getGameAddress","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRooms","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUser","outputs":[{"components":[{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"uint8","name":"marked","type":"uint8"},{"internalType":"uint256","name":"room","type":"uint256"},{"internalType":"bool","name":"isReceive","type":"bool"},{"internalType":"bool","name":"isCreated","type":"bool"},{"internalType":"address[]","name":"donated","type":"address[]"},{"internalType":"address[]","name":"got","type":"address[]"}],"internalType":"struct BEP20Token.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserDonated","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserGot","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_state","type":"bool"},{"internalType":"bool","name":"_isEmpty","type":"bool"}],"name":"setUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
  networks: {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x030179aC2AaacEdebc598b8a426a3Aa5E5E332ae",
      "transactionHash": "0xfc36aeaeba08c6cf5ebbd35d6a2c3783c9356bf714d803d1f59f3c8855a0c32c"
    },
    "97": {
      "address": "0x2A40a212eE77213ECcc381a43bd47F9344233d5b"
    }
  }
}
import Web3 from "web3";

import HelloWorld from "./contracts/HelloWorld.json";
import MyERC20 from "./contracts/MyERC20.json";
import MyERC721 from "./contracts/MyERC721.json";
// const options = {
//   web3: {
//     block: false,
//     fallback: {
//       type: 'ws',
//       url: 'ws://127.0.0.1:9545'
//     }
//   },

//   // The contracts to monitor
//   contracts: [SimpleStorage, ComplexStorage, TutorialToken],
//   events: {
//     // monitor SimpleStorage.StorageSet events
//     SimpleStorage: ['StorageSet']
//   },
//   polls: {
//     // check accounts ever 15 seconds
//     accounts: 15000
//   }
// }
const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
    networkWhitelist: [
      1, // Mainnet
      3, // Ropsten
      4, // Rinkeby
      5, // Goerli
      42 // Kovan
    ]
  },
  contracts: [HelloWorld, MyERC20, MyERC721]
  // events: {
  //   SimpleStorage: ["StorageSet"]
  // }
};
export default options;

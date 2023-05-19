"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IGlobalConfig",
                name: "globalConfig_",
                type: "address",
            },
            {
                internalType: "contract IParticleVerifyer",
                name: "particleVerifyer_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "newAppCID",
                type: "string",
            },
        ],
        name: "AppCIDChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "appCID",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "effectors",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "fluenceToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "globalConfig",
        outputs: [
            {
                internalType: "contract IGlobalConfig",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "paymentToken_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "pricePerEpoch_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "requiredStake_",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "appCID_",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "minWorkers_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxWorkersPerProvider_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "targetWorkers_",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "effectors_",
                type: "string[]",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "maxWorkersPerProvider",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minWorkers",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "particleVerifyer",
        outputs: [
            {
                internalType: "contract IParticleVerifyer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "paymentToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pricePerEpoch",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "requiredStake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "appCID_",
                type: "string",
            },
        ],
        name: "setAppCID",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pricePerEpoch_",
                type: "uint256",
            },
        ],
        name: "setPricePerEpoch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requiredStake_",
                type: "uint256",
            },
        ],
        name: "setRequiredStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "targetWorkers",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x6101006040523073ffffffffffffffffffffffffffffffffffffffff1660e09073ffffffffffffffffffffffffffffffffffffffff168152503480156200004557600080fd5b5060405162002d2f38038062002d2f83398181016040528101906200006b919062000247565b81818173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001139190620002d3565b73ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000305565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001b68262000189565b9050919050565b6000620001ca82620001a9565b9050919050565b620001dc81620001bd565b8114620001e857600080fd5b50565b600081519050620001fc81620001d1565b92915050565b60006200020f82620001a9565b9050919050565b620002218162000202565b81146200022d57600080fd5b50565b600081519050620002418162000216565b92915050565b6000806040838503121562000261576200026062000184565b5b60006200027185828601620001eb565b9250506020620002848582860162000230565b9150509250929050565b60006200029b82620001a9565b9050919050565b620002ad816200028e565b8114620002b957600080fd5b50565b600081519050620002cd81620002a2565b92915050565b600060208284031215620002ec57620002eb62000184565b5b6000620002fc84828501620002bc565b91505092915050565b60805160a05160c05160e0516129d46200035b60003960008181610552015281816105e0015281816106da015281816107680152610818015260006104fe0152600061098d0152600061096901526129d46000f3fe6080604052600436106101095760003560e01c80635fc8f59c11610095578063ac027f9711610064578063ac027f971461032a578063af9cb9f614610355578063b15bb2531461037e578063cae52eaa146103a7578063fc1e5e2a146103d057610109565b80635fc8f59c1461027e5780638a0c725b146102a95780639bc66868146102d4578063a7c1abe0146102ff57610109565b80632db31193116100dc5780632db31193146101b85780633013ce29146101e35780633659cfe61461020e5780634f1ef2861461023757806352d1902d1461025357610109565b806313a2107d1461010e57806319cb355d146101375780631ef7e0a1146101625780632943dcab1461018d575b600080fd5b34801561011a57600080fd5b506101356004803603810190610130919061154d565b6103fb565b005b34801561014357600080fd5b5061014c6104f6565b6040516101599190611589565b60405180910390f35b34801561016e57600080fd5b506101776104fc565b6040516101849190611623565b60405180910390f35b34801561019957600080fd5b506101a2610520565b6040516101af9190611589565b60405180910390f35b3480156101c457600080fd5b506101cd610526565b6040516101da9190611589565b60405180910390f35b3480156101ef57600080fd5b506101f861052c565b604051610205919061165f565b60405180910390f35b34801561021a57600080fd5b50610235600480360381019061023091906116b8565b610550565b005b610251600480360381019061024c919061182b565b6106d8565b005b34801561025f57600080fd5b50610268610814565b60405161027591906118a0565b60405180910390f35b34801561028a57600080fd5b506102936108cd565b6040516102a09190611589565b60405180910390f35b3480156102b557600080fd5b506102be6108d3565b6040516102cb9190611589565b60405180910390f35b3480156102e057600080fd5b506102e96108d9565b6040516102f6919061193a565b60405180910390f35b34801561030b57600080fd5b50610314610967565b604051610321919061197d565b60405180910390f35b34801561033657600080fd5b5061033f61098b565b60405161034c919061165f565b60405180910390f35b34801561036157600080fd5b5061037c6004803603810190610377919061154d565b6109af565b005b34801561038a57600080fd5b506103a560048036038101906103a09190611b5d565b610aaa565b005b3480156103b357600080fd5b506103ce60048036038101906103c99190611ca6565b610c79565b005b3480156103dc57600080fd5b506103e5610db9565b6040516103f29190611dff565b60405180910390f35b60023373ffffffffffffffffffffffffffffffffffffffff1661041c610e92565b73ffffffffffffffffffffffffffffffffffffffff1663c2aeb7bd836040518263ffffffff1660e01b81526004016104549190611e98565b602060405180830381865afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104959190611ec8565b73ffffffffffffffffffffffffffffffffffffffff16146104eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e290611f67565b60405180910390fd5b816001819055505050565b60025481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60065481565b60045481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16036105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611ff9565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661061d610ee6565b73ffffffffffffffffffffffffffffffffffffffff1614610673576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066a9061208b565b60405180910390fd5b61067c81610f3d565b6106d581600067ffffffffffffffff81111561069b5761069a611700565b5b6040519080825280601f01601f1916602001820160405280156106cd5781602001600182028036833780820191505090505b506000610fb5565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075d90611ff9565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107a5610ee6565b73ffffffffffffffffffffffffffffffffffffffff16146107fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f29061208b565b60405180910390fd5b61080482610f3d565b61081082826001610fb5565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146108a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089b9061211d565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b60015481565b60055481565b600380546108e69061216c565b80601f01602080910402602001604051908101604052809291908181526020018280546109129061216c565b801561095f5780601f106109345761010080835404028352916020019161095f565b820191906000526020600020905b81548152906001019060200180831161094257829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60023373ffffffffffffffffffffffffffffffffffffffff166109d0610e92565b73ffffffffffffffffffffffffffffffffffffffff1663c2aeb7bd836040518263ffffffff1660e01b8152600401610a089190611e98565b602060405180830381865afa158015610a25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a499190611ec8565b73ffffffffffffffffffffffffffffffffffffffff1614610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9690611f67565b60405180910390fd5b816002819055505050565b6000603a60019054906101000a900460ff16159050808015610ade57506001603a60009054906101000a900460ff1660ff16105b80610b0d5750610aed30611123565b158015610b0c57506001603a60009054906101000a900460ff1660ff16145b5b610b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b439061220f565b60405180910390fd5b6001603a60006101000a81548160ff021916908360ff1602179055508015610b8a576001603a60016101000a81548160ff0219169083151502179055505b886000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087600181905550866002819055508560039081610be791906123d1565b508460048190555083600581905550826006819055508160079080519060200190610c13929190611429565b508015610c6e576000603a60016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610c6591906124eb565b60405180910390a15b505050505050505050565b60023373ffffffffffffffffffffffffffffffffffffffff16610c9a610e92565b73ffffffffffffffffffffffffffffffffffffffff1663c2aeb7bd836040518263ffffffff1660e01b8152600401610cd29190611e98565b602060405180830381865afa158015610cef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d139190611ec8565b73ffffffffffffffffffffffffffffffffffffffff1614610d69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6090611f67565b60405180910390fd5b828260039182610d7a929190612511565b507f74f85d72a9174285055c0bd0b314299a6da5c26e0dba3c443b80c2be54d2b2a38383604051610dac92919061260e565b60405180910390a1505050565b60606007805480602002602001604051908101604052809291908181526020016000905b82821015610e89578382906000526020600020018054610dfc9061216c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e289061216c565b8015610e755780601f10610e4a57610100808354040283529160200191610e75565b820191906000526020600020905b815481529060010190602001808311610e5857829003601f168201915b505050505081526020019060010190610ddd565b50505050905090565b6000610ebd7fe0c154d538f20c8d1aadcd299210daa7f0a434a5bf4a39795668b28b61ec6e96611146565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610f147f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611146565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff16610f5c610e92565b73ffffffffffffffffffffffffffffffffffffffff1614610fb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa99061267e565b60405180910390fd5b50565b610fe17f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611150565b60000160009054906101000a900460ff1615611005576110008361115a565b61111e565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561106d57506040513d601f19601f8201168201806040525081019061106a91906126ca565b60015b6110ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a390612769565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611111576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611108906127fb565b60405180910390fd5b5061111d838383611213565b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b6000819050919050565b6111638161123f565b6111a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111999061288d565b60405180910390fd5b806111cf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611146565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61121c83611262565b6000825111806112295750805b1561123a5761123883836112b1565b505b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b61126b8161115a565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606112d68383604051806060016040528060278152602001612978602791396112de565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161130891906128f4565b600060405180830381855af49150503d8060008114611343576040519150601f19603f3d011682016040523d82523d6000602084013e611348565b606091505b509150915061135986838387611364565b925050509392505050565b606083156113c65760008351036113be5761137e8561123f565b6113bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b490612957565b60405180910390fd5b5b8290506113d1565b6113d083836113d9565b5b949350505050565b6000825111156113ec5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611420919061193a565b60405180910390fd5b828054828255906000526020600020908101928215611471579160200282015b8281111561147057825182908161146091906123d1565b5091602001919060010190611449565b5b50905061147e9190611482565b5090565b5b808211156114a2576000818161149991906114a6565b50600101611483565b5090565b5080546114b29061216c565b6000825580601f106114c457506114e3565b601f0160209004906000526020600020908101906114e291906114e6565b5b50565b5b808211156114ff5760008160009055506001016114e7565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61152a81611517565b811461153557600080fd5b50565b60008135905061154781611521565b92915050565b6000602082840312156115635761156261150d565b5b600061157184828501611538565b91505092915050565b61158381611517565b82525050565b600060208201905061159e600083018461157a565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006115e96115e46115df846115a4565b6115c4565b6115a4565b9050919050565b60006115fb826115ce565b9050919050565b600061160d826115f0565b9050919050565b61161d81611602565b82525050565b60006020820190506116386000830184611614565b92915050565b6000611649826115f0565b9050919050565b6116598161163e565b82525050565b60006020820190506116746000830184611650565b92915050565b6000611685826115a4565b9050919050565b6116958161167a565b81146116a057600080fd5b50565b6000813590506116b28161168c565b92915050565b6000602082840312156116ce576116cd61150d565b5b60006116dc848285016116a3565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611738826116ef565b810181811067ffffffffffffffff8211171561175757611756611700565b5b80604052505050565b600061176a611503565b9050611776828261172f565b919050565b600067ffffffffffffffff82111561179657611795611700565b5b61179f826116ef565b9050602081019050919050565b82818337600083830152505050565b60006117ce6117c98461177b565b611760565b9050828152602081018484840111156117ea576117e96116ea565b5b6117f58482856117ac565b509392505050565b600082601f830112611812576118116116e5565b5b81356118228482602086016117bb565b91505092915050565b600080604083850312156118425761184161150d565b5b6000611850858286016116a3565b925050602083013567ffffffffffffffff81111561187157611870611512565b5b61187d858286016117fd565b9150509250929050565b6000819050919050565b61189a81611887565b82525050565b60006020820190506118b56000830184611891565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118f55780820151818401526020810190506118da565b60008484015250505050565b600061190c826118bb565b61191681856118c6565b93506119268185602086016118d7565b61192f816116ef565b840191505092915050565b600060208201905081810360008301526119548184611901565b905092915050565b6000611967826115f0565b9050919050565b6119778161195c565b82525050565b6000602082019050611992600083018461196e565b92915050565b60006119a38261167a565b9050919050565b6119b381611998565b81146119be57600080fd5b50565b6000813590506119d0816119aa565b92915050565b600067ffffffffffffffff8211156119f1576119f0611700565b5b6119fa826116ef565b9050602081019050919050565b6000611a1a611a15846119d6565b611760565b905082815260208101848484011115611a3657611a356116ea565b5b611a418482856117ac565b509392505050565b600082601f830112611a5e57611a5d6116e5565b5b8135611a6e848260208601611a07565b91505092915050565b600067ffffffffffffffff821115611a9257611a91611700565b5b602082029050602081019050919050565b600080fd5b6000611abb611ab684611a77565b611760565b90508083825260208201905060208402830185811115611ade57611add611aa3565b5b835b81811015611b2557803567ffffffffffffffff811115611b0357611b026116e5565b5b808601611b108982611a49565b85526020850194505050602081019050611ae0565b5050509392505050565b600082601f830112611b4457611b436116e5565b5b8135611b54848260208601611aa8565b91505092915050565b600080600080600080600080610100898b031215611b7e57611b7d61150d565b5b6000611b8c8b828c016119c1565b9850506020611b9d8b828c01611538565b9750506040611bae8b828c01611538565b965050606089013567ffffffffffffffff811115611bcf57611bce611512565b5b611bdb8b828c01611a49565b9550506080611bec8b828c01611538565b94505060a0611bfd8b828c01611538565b93505060c0611c0e8b828c01611538565b92505060e089013567ffffffffffffffff811115611c2f57611c2e611512565b5b611c3b8b828c01611b2f565b9150509295985092959890939650565b600080fd5b60008083601f840112611c6657611c656116e5565b5b8235905067ffffffffffffffff811115611c8357611c82611c4b565b5b602083019150836001820283011115611c9f57611c9e611aa3565b5b9250929050565b60008060208385031215611cbd57611cbc61150d565b5b600083013567ffffffffffffffff811115611cdb57611cda611512565b5b611ce785828601611c50565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000611d3b826118bb565b611d458185611d1f565b9350611d558185602086016118d7565b611d5e816116ef565b840191505092915050565b6000611d758383611d30565b905092915050565b6000602082019050919050565b6000611d9582611cf3565b611d9f8185611cfe565b935083602082028501611db185611d0f565b8060005b85811015611ded5784840389528151611dce8582611d69565b9450611dd983611d7d565b925060208a01995050600181019050611db5565b50829750879550505050505092915050565b60006020820190508181036000830152611e198184611d8a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60068110611e6157611e60611e21565b5b50565b6000819050611e7282611e50565b919050565b6000611e8282611e64565b9050919050565b611e9281611e77565b82525050565b6000602082019050611ead6000830184611e89565b92915050565b600081519050611ec28161168c565b92915050565b600060208284031215611ede57611edd61150d565b5b6000611eec84828501611eb3565b91505092915050565b7f4d6f64756c65426173653a2063616c6c6572206973206e6f742072657175697260008201527f6564206d6f64756c650000000000000000000000000000000000000000000000602082015250565b6000611f516029836118c6565b9150611f5c82611ef5565b604082019050919050565b60006020820190508181036000830152611f8081611f44565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000611fe3602c836118c6565b9150611fee82611f87565b604082019050919050565b6000602082019050818103600083015261201281611fd6565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000612075602c836118c6565b915061208082612019565b604082019050919050565b600060208201905081810360008301526120a481612068565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006121076038836118c6565b9150612112826120ab565b604082019050919050565b60006020820190508181036000830152612136816120fa565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061218457607f821691505b6020821081036121975761219661213d565b5b50919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006121f9602e836118c6565b91506122048261219d565b604082019050919050565b60006020820190508181036000830152612228816121ec565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026122917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612254565b61229b8683612254565b95508019841693508086168417925050509392505050565b60006122ce6122c96122c484611517565b6115c4565b611517565b9050919050565b6000819050919050565b6122e8836122b3565b6122fc6122f4826122d5565b848454612261565b825550505050565b600090565b612311612304565b61231c8184846122df565b505050565b5b8181101561234057612335600082612309565b600181019050612322565b5050565b601f821115612385576123568161222f565b61235f84612244565b8101602085101561236e578190505b61238261237a85612244565b830182612321565b50505b505050565b600082821c905092915050565b60006123a86000198460080261238a565b1980831691505092915050565b60006123c18383612397565b9150826002028217905092915050565b6123da826118bb565b67ffffffffffffffff8111156123f3576123f2611700565b5b6123fd825461216c565b612408828285612344565b600060209050601f83116001811461243b5760008415612429578287015190505b61243385826123b5565b86555061249b565b601f1984166124498661222f565b60005b828110156124715784890151825560018201915060208501945060208101905061244c565b8683101561248e578489015161248a601f891682612397565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b600060ff82169050919050565b60006124d56124d06124cb846124a3565b6115c4565b6124ad565b9050919050565b6124e5816124ba565b82525050565b600060208201905061250060008301846124dc565b92915050565b600082905092915050565b61251b8383612506565b67ffffffffffffffff81111561253457612533611700565b5b61253e825461216c565b612549828285612344565b6000601f8311600181146125785760008415612566578287013590505b61257085826123b5565b8655506125d8565b601f1984166125868661222f565b60005b828110156125ae57848901358255600182019150602085019450602081019050612589565b868310156125cb57848901356125c7601f891682612397565b8355505b6001600288020188555050505b50505050505050565b60006125ed83856118c6565b93506125fa8385846117ac565b612603836116ef565b840190509392505050565b600060208201905081810360008301526126298184866125e1565b90509392505050565b7f4d6f64756c65426173653a2063616c6c6572206973206e6f7420636f72650000600082015250565b6000612668601e836118c6565b915061267382612632565b602082019050919050565b600060208201905081810360008301526126978161265b565b9050919050565b6126a781611887565b81146126b257600080fd5b50565b6000815190506126c48161269e565b92915050565b6000602082840312156126e0576126df61150d565b5b60006126ee848285016126b5565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000612753602e836118c6565b915061275e826126f7565b604082019050919050565b6000602082019050818103600083015261278281612746565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b60006127e56029836118c6565b91506127f082612789565b604082019050919050565b60006020820190508181036000830152612814816127d8565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000612877602d836118c6565b91506128828261281b565b604082019050919050565b600060208201905081810360008301526128a68161286a565b9050919050565b600081519050919050565b600081905092915050565b60006128ce826128ad565b6128d881856128b8565b93506128e88185602086016118d7565b80840191505092915050565b600061290082846128c3565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612941601d836118c6565b915061294c8261290b565b602082019050919050565b6000602082019050818103600083015261297081612934565b905091905056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201404e60508f50b781fee14ed007ef22c57b02a2e2c15b152854c3d6f07a03c0864736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class Config__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(globalConfig_, particleVerifyer_, overrides) {
        return super.deploy(globalConfig_, particleVerifyer_, overrides || {});
    }
    getDeployTransaction(globalConfig_, particleVerifyer_, overrides) {
        return super.getDeployTransaction(globalConfig_, particleVerifyer_, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Config__factory = Config__factory;
Config__factory.bytecode = _bytecode;
Config__factory.abi = _abi;

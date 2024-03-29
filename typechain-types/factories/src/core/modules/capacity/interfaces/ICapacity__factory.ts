/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICapacity,
  ICapacityInterface,
} from "../../../../../../src/core/modules/capacity/interfaces/ICapacity";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum ICapacity.CCStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "CapacityCommitmentIsActive",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum ICapacity.CCStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "CapacityCommitmentIsNotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyProofs",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256",
      },
    ],
    name: "CollateralDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "peerId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "unitIds",
        type: "bytes32[]",
      },
    ],
    name: "CommitmentActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "peerId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardDelegationRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fltCollateralPerUnit",
        type: "uint256",
      },
    ],
    name: "CommitmentCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "failedEpoch",
        type: "uint256",
      },
    ],
    name: "CommitmentFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "CommitmentFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "CommitmentRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFailCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "exitedUnitCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "activeUnitCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nextAdditionalActiveUnitCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "changedEpoch",
        type: "uint256",
      },
    ],
    name: "CommitmentStatsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "unitId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "localUnitNonce",
        type: "bytes32",
      },
    ],
    name: "ProofSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "unitId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startEpoch",
        type: "uint256",
      },
    ],
    name: "UnitActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "unitId",
        type: "bytes32",
      },
    ],
    name: "UnitDeactivated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "peerId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardDelegationRate",
        type: "uint256",
      },
    ],
    name: "createCommitment",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "commitmentIds",
        type: "bytes32[]",
      },
    ],
    name: "depositCollateral",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "finishCommitment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "getCommitment",
    outputs: [
      {
        components: [
          {
            internalType: "enum ICapacity.CCStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "peerId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "collateralPerUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unitCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardDelegatorRate",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "delegator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "totalFailCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "failedEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "exitedUnitCount",
            type: "uint256",
          },
        ],
        internalType: "struct ICapacity.CommitmentView",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGlobalNonce",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "getStatus",
    outputs: [
      {
        internalType: "enum ICapacity.CCStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "initGlobalNonce_",
        type: "bytes32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "unitId",
        type: "bytes32",
      },
    ],
    name: "onUnitMovedToDeal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "unitId",
        type: "bytes32",
      },
    ],
    name: "onUnitReturnedFromDeal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "unitIds",
        type: "bytes32[]",
      },
    ],
    name: "removeCUFromCC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "removeCommitment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "unitId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "localUnitNonce",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "resultHash",
        type: "bytes32",
      },
    ],
    name: "submitProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "totalRewards",
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
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "unlockedRewards",
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
        internalType: "bytes32",
        name: "commitmentId",
        type: "bytes32",
      },
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICapacity__factory {
  static readonly abi = _abi;
  static createInterface(): ICapacityInterface {
    return new Interface(_abi) as ICapacityInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ICapacity {
    return new Contract(address, _abi, runner) as unknown as ICapacity;
  }
}

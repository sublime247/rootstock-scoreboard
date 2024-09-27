/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export type TeamInfoStruct = {
  teamName: string;
  memeTokenName: string;
  memeTokenUri: string;
  memeTokenAddress: AddressLike;
  teamLeaderAddress: AddressLike;
  score: BigNumberish;
};

export type TeamInfoStructOutput = [
  teamName: string,
  memeTokenName: string,
  memeTokenUri: string,
  memeTokenAddress: string,
  teamLeaderAddress: string,
  score: bigint
] & {
  teamName: string;
  memeTokenName: string;
  memeTokenUri: string;
  memeTokenAddress: string;
  teamLeaderAddress: string;
  score: bigint;
};

export interface TeamsManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAdmin"
      | "addTeam"
      | "getScore"
      | "getTeamInfo"
      | "getTeamNames"
      | "getVotingTokenBalance"
      | "isAdmin"
      | "removeAdmin"
      | "reset"
      | "setReadyToVote"
      | "setVotingToken"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addTeam",
    values: [string, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getScore", values: [string]): string;
  encodeFunctionData(functionFragment: "getTeamInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTeamNames",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingTokenBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "reset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setReadyToVote",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addTeam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getScore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTeamInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTeamNames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReadyToVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export interface TeamsManager extends BaseContract {
  connect(runner?: ContractRunner | null): TeamsManager;
  waitForDeployment(): Promise<this>;

  interface: TeamsManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAdmin: TypedContractMethod<[_newAdmin: AddressLike], [void], "nonpayable">;

  addTeam: TypedContractMethod<
    [
      teamName: string,
      memeTokenAddress: AddressLike,
      teamLeaderAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getScore: TypedContractMethod<[teamName: string], [bigint], "view">;

  getTeamInfo: TypedContractMethod<
    [teamName: string],
    [TeamInfoStructOutput],
    "view"
  >;

  getTeamNames: TypedContractMethod<[], [string[]], "view">;

  getVotingTokenBalance: TypedContractMethod<
    [teamName: string],
    [bigint],
    "view"
  >;

  isAdmin: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  removeAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  reset: TypedContractMethod<[], [void], "nonpayable">;

  setReadyToVote: TypedContractMethod<[], [void], "nonpayable">;

  setVotingToken: TypedContractMethod<
    [votingTokenAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  vote: TypedContractMethod<
    [teamName: string, transferAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAdmin"
  ): TypedContractMethod<[_newAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addTeam"
  ): TypedContractMethod<
    [
      teamName: string,
      memeTokenAddress: AddressLike,
      teamLeaderAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getScore"
  ): TypedContractMethod<[teamName: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTeamInfo"
  ): TypedContractMethod<[teamName: string], [TeamInfoStructOutput], "view">;
  getFunction(
    nameOrSignature: "getTeamNames"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getVotingTokenBalance"
  ): TypedContractMethod<[teamName: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "reset"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setReadyToVote"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVotingToken"
  ): TypedContractMethod<
    [votingTokenAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [teamName: string, transferAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}

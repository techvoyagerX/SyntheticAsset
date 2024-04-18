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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SyntheticAssetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateProfitLoss"
      | "collateralToken"
      | "deposit"
      | "increasePosition"
      | "owner"
      | "positions"
      | "reducePosition"
      | "renounceOwnership"
      | "setSyntheticAssetPrice"
      | "syntheticAssetPrice"
      | "transferOwnership"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClosePosition"
      | "IncreasePosition"
      | "OpenPosition"
      | "OwnershipTransferred"
      | "ReducePosition"
      | "SetSyntheticAssetPrice"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "calculateProfitLoss",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "increasePosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reducePosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSyntheticAssetPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "syntheticAssetPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "calculateProfitLoss",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reducePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSyntheticAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "syntheticAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ClosePositionEvent {
  export type InputTuple = [user: AddressLike, profitLoss: BigNumberish];
  export type OutputTuple = [user: string, profitLoss: bigint];
  export interface OutputObject {
    user: string;
    profitLoss: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IncreasePositionEvent {
  export type InputTuple = [user: AddressLike, additionalSize: BigNumberish];
  export type OutputTuple = [user: string, additionalSize: bigint];
  export interface OutputObject {
    user: string;
    additionalSize: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OpenPositionEvent {
  export type InputTuple = [
    user: AddressLike,
    positionSize: BigNumberish,
    isLong: boolean
  ];
  export type OutputTuple = [
    user: string,
    positionSize: bigint,
    isLong: boolean
  ];
  export interface OutputObject {
    user: string;
    positionSize: bigint;
    isLong: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReducePositionEvent {
  export type InputTuple = [user: AddressLike, reduceSize: BigNumberish];
  export type OutputTuple = [user: string, reduceSize: bigint];
  export interface OutputObject {
    user: string;
    reduceSize: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetSyntheticAssetPriceEvent {
  export type InputTuple = [newPrice: BigNumberish];
  export type OutputTuple = [newPrice: bigint];
  export interface OutputObject {
    newPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SyntheticAsset extends BaseContract {
  connect(runner?: ContractRunner | null): SyntheticAsset;
  waitForDeployment(): Promise<this>;

  interface: SyntheticAssetInterface;

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

  calculateProfitLoss: TypedContractMethod<
    [user: AddressLike],
    [bigint],
    "view"
  >;

  collateralToken: TypedContractMethod<[], [string], "view">;

  deposit: TypedContractMethod<
    [_amount: BigNumberish, _positionSize: BigNumberish, _isLong: boolean],
    [void],
    "nonpayable"
  >;

  increasePosition: TypedContractMethod<
    [_additionalSize: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  positions: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, boolean] & {
        collateralAmount: bigint;
        positionSize: bigint;
        isLong: boolean;
      }
    ],
    "view"
  >;

  reducePosition: TypedContractMethod<
    [_reduceSize: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setSyntheticAssetPrice: TypedContractMethod<
    [_newPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  syntheticAssetPrice: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateProfitLoss"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "collateralToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_amount: BigNumberish, _positionSize: BigNumberish, _isLong: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increasePosition"
  ): TypedContractMethod<[_additionalSize: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "positions"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, boolean] & {
        collateralAmount: bigint;
        positionSize: bigint;
        isLong: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "reducePosition"
  ): TypedContractMethod<[_reduceSize: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSyntheticAssetPrice"
  ): TypedContractMethod<[_newPrice: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "syntheticAssetPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ClosePosition"
  ): TypedContractEvent<
    ClosePositionEvent.InputTuple,
    ClosePositionEvent.OutputTuple,
    ClosePositionEvent.OutputObject
  >;
  getEvent(
    key: "IncreasePosition"
  ): TypedContractEvent<
    IncreasePositionEvent.InputTuple,
    IncreasePositionEvent.OutputTuple,
    IncreasePositionEvent.OutputObject
  >;
  getEvent(
    key: "OpenPosition"
  ): TypedContractEvent<
    OpenPositionEvent.InputTuple,
    OpenPositionEvent.OutputTuple,
    OpenPositionEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ReducePosition"
  ): TypedContractEvent<
    ReducePositionEvent.InputTuple,
    ReducePositionEvent.OutputTuple,
    ReducePositionEvent.OutputObject
  >;
  getEvent(
    key: "SetSyntheticAssetPrice"
  ): TypedContractEvent<
    SetSyntheticAssetPriceEvent.InputTuple,
    SetSyntheticAssetPriceEvent.OutputTuple,
    SetSyntheticAssetPriceEvent.OutputObject
  >;

  filters: {
    "ClosePosition(address,int256)": TypedContractEvent<
      ClosePositionEvent.InputTuple,
      ClosePositionEvent.OutputTuple,
      ClosePositionEvent.OutputObject
    >;
    ClosePosition: TypedContractEvent<
      ClosePositionEvent.InputTuple,
      ClosePositionEvent.OutputTuple,
      ClosePositionEvent.OutputObject
    >;

    "IncreasePosition(address,uint256)": TypedContractEvent<
      IncreasePositionEvent.InputTuple,
      IncreasePositionEvent.OutputTuple,
      IncreasePositionEvent.OutputObject
    >;
    IncreasePosition: TypedContractEvent<
      IncreasePositionEvent.InputTuple,
      IncreasePositionEvent.OutputTuple,
      IncreasePositionEvent.OutputObject
    >;

    "OpenPosition(address,uint256,bool)": TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;
    OpenPosition: TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "ReducePosition(address,uint256)": TypedContractEvent<
      ReducePositionEvent.InputTuple,
      ReducePositionEvent.OutputTuple,
      ReducePositionEvent.OutputObject
    >;
    ReducePosition: TypedContractEvent<
      ReducePositionEvent.InputTuple,
      ReducePositionEvent.OutputTuple,
      ReducePositionEvent.OutputObject
    >;

    "SetSyntheticAssetPrice(uint256)": TypedContractEvent<
      SetSyntheticAssetPriceEvent.InputTuple,
      SetSyntheticAssetPriceEvent.OutputTuple,
      SetSyntheticAssetPriceEvent.OutputObject
    >;
    SetSyntheticAssetPrice: TypedContractEvent<
      SetSyntheticAssetPriceEvent.InputTuple,
      SetSyntheticAssetPriceEvent.OutputTuple,
      SetSyntheticAssetPriceEvent.OutputObject
    >;
  };
}

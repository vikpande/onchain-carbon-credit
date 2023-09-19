// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BuyerDeleted extends ethereum.Event {
  get params(): BuyerDeleted__Params {
    return new BuyerDeleted__Params(this);
  }
}

export class BuyerDeleted__Params {
  _event: BuyerDeleted;

  constructor(event: BuyerDeleted) {
    this._event = event;
  }

  get addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BuyerRegistered extends ethereum.Event {
  get params(): BuyerRegistered__Params {
    return new BuyerRegistered__Params(this);
  }
}

export class BuyerRegistered__Params {
  _event: BuyerRegistered;

  constructor(event: BuyerRegistered) {
    this._event = event;
  }

  get addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isWhitelisted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class BuyerUpdated extends ethereum.Event {
  get params(): BuyerUpdated__Params {
    return new BuyerUpdated__Params(this);
  }
}

export class BuyerUpdated__Params {
  _event: BuyerUpdated;

  constructor(event: BuyerUpdated) {
    this._event = event;
  }

  get addr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isWhitelisted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__buyersResult {
  value0: Address;
  value1: boolean;
  value2: boolean;

  constructor(value0: Address, value1: boolean, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }

  getAddr(): Address {
    return this.value0;
  }

  getIsWhitelisted(): boolean {
    return this.value1;
  }

  getIsExists(): boolean {
    return this.value2;
  }
}

export class Contract__cruProjectsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getTokenId(): BigInt {
    return this.value0;
  }

  getSupplyAvailable(): BigInt {
    return this.value1;
  }

  getSupplyReserved(): BigInt {
    return this.value2;
  }

  getSupplyRetired(): BigInt {
    return this.value3;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  buyers(param0: Address): Contract__buyersResult {
    let result = super.call("buyers", "buyers(address):(address,bool,bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new Contract__buyersResult(
      result[0].toAddress(),
      result[1].toBoolean(),
      result[2].toBoolean()
    );
  }

  try_buyers(param0: Address): ethereum.CallResult<Contract__buyersResult> {
    let result = super.tryCall(
      "buyers",
      "buyers(address):(address,bool,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__buyersResult(
        value[0].toAddress(),
        value[1].toBoolean(),
        value[2].toBoolean()
      )
    );
  }

  cruProjects(param0: BigInt): Contract__cruProjectsResult {
    let result = super.call(
      "cruProjects",
      "cruProjects(uint256):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__cruProjectsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_cruProjects(
    param0: BigInt
  ): ethereum.CallResult<Contract__cruProjectsResult> {
    let result = super.tryCall(
      "cruProjects",
      "cruProjects(uint256):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__cruProjectsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  cruReservationsByAddr(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "cruReservationsByAddr",
      "cruReservationsByAddr(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_cruReservationsByAddr(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cruReservationsByAddr",
      "cruReservationsByAddr(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentTokenId(): BigInt {
    let result = super.call("currentTokenId", "currentTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentTokenId",
      "currentTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  exists(id: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBoolean();
  }

  try_exists(id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  platformOperator(): Address {
    let result = super.call(
      "platformOperator",
      "platformOperator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_platformOperator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "platformOperator",
      "platformOperator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  projectDeveloper(): Address {
    let result = super.call(
      "projectDeveloper",
      "projectDeveloper():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_projectDeveloper(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "projectDeveloper",
      "projectDeveloper():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalIssued(): BigInt {
    let result = super.call("totalIssued", "totalIssued():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalIssued(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalIssued", "totalIssued():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalRetired(): BigInt {
    let result = super.call("totalRetired", "totalRetired():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalRetired(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalRetired", "totalRetired():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(id: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uri(tokenId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_uri(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _platformOperator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _projectDeveloper(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeleteBuyerCall extends ethereum.Call {
  get inputs(): DeleteBuyerCall__Inputs {
    return new DeleteBuyerCall__Inputs(this);
  }

  get outputs(): DeleteBuyerCall__Outputs {
    return new DeleteBuyerCall__Outputs(this);
  }
}

export class DeleteBuyerCall__Inputs {
  _call: DeleteBuyerCall;

  constructor(call: DeleteBuyerCall) {
    this._call = call;
  }

  get _buyerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DeleteBuyerCall__Outputs {
  _call: DeleteBuyerCall;

  constructor(call: DeleteBuyerCall) {
    this._call = call;
  }
}

export class MintCRUProjectBatchesCall extends ethereum.Call {
  get inputs(): MintCRUProjectBatchesCall__Inputs {
    return new MintCRUProjectBatchesCall__Inputs(this);
  }

  get outputs(): MintCRUProjectBatchesCall__Outputs {
    return new MintCRUProjectBatchesCall__Outputs(this);
  }
}

export class MintCRUProjectBatchesCall__Inputs {
  _call: MintCRUProjectBatchesCall;

  constructor(call: MintCRUProjectBatchesCall) {
    this._call = call;
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _uris(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }
}

export class MintCRUProjectBatchesCall__Outputs {
  _call: MintCRUProjectBatchesCall;

  constructor(call: MintCRUProjectBatchesCall) {
    this._call = call;
  }
}

export class RegisterBuyerCall extends ethereum.Call {
  get inputs(): RegisterBuyerCall__Inputs {
    return new RegisterBuyerCall__Inputs(this);
  }

  get outputs(): RegisterBuyerCall__Outputs {
    return new RegisterBuyerCall__Outputs(this);
  }
}

export class RegisterBuyerCall__Inputs {
  _call: RegisterBuyerCall;

  constructor(call: RegisterBuyerCall) {
    this._call = call;
  }

  get _buyerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isWhitelisted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class RegisterBuyerCall__Outputs {
  _call: RegisterBuyerCall;

  constructor(call: RegisterBuyerCall) {
    this._call = call;
  }
}

export class ReserveCRUsCall extends ethereum.Call {
  get inputs(): ReserveCRUsCall__Inputs {
    return new ReserveCRUsCall__Inputs(this);
  }

  get outputs(): ReserveCRUsCall__Outputs {
    return new ReserveCRUsCall__Outputs(this);
  }
}

export class ReserveCRUsCall__Inputs {
  _call: ReserveCRUsCall;

  constructor(call: ReserveCRUsCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ReserveCRUsCall__Outputs {
  _call: ReserveCRUsCall;

  constructor(call: ReserveCRUsCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class UpdateBuyerCall extends ethereum.Call {
  get inputs(): UpdateBuyerCall__Inputs {
    return new UpdateBuyerCall__Inputs(this);
  }

  get outputs(): UpdateBuyerCall__Outputs {
    return new UpdateBuyerCall__Outputs(this);
  }
}

export class UpdateBuyerCall__Inputs {
  _call: UpdateBuyerCall;

  constructor(call: UpdateBuyerCall) {
    this._call = call;
  }

  get _buyerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isWhitelisted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateBuyerCall__Outputs {
  _call: UpdateBuyerCall;

  constructor(call: UpdateBuyerCall) {
    this._call = call;
  }
}

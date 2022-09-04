/* eslint-disable */
import { Params } from "../dex/params";
import { SellOrderBook } from "../dex/sell_order_book";
import { BuyOrderBook } from "../dex/buy_order_book";
import { DenomTrace } from "../dex/denom_trace";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "interchange.dex";

/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  sellOrderBookList: SellOrderBook[];
  buyOrderBookList: BuyOrderBook[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  denomTraceList: DenomTrace[];
}

const baseGenesisState: object = { port_id: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.sellOrderBookList) {
      SellOrderBook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.buyOrderBookList) {
      BuyOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.denomTraceList) {
      DenomTrace.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.sellOrderBookList = [];
    message.buyOrderBookList = [];
    message.denomTraceList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.sellOrderBookList.push(
            SellOrderBook.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.buyOrderBookList.push(
            BuyOrderBook.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.denomTraceList.push(
            DenomTrace.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sellOrderBookList = [];
    message.buyOrderBookList = [];
    message.denomTraceList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (
      object.sellOrderBookList !== undefined &&
      object.sellOrderBookList !== null
    ) {
      for (const e of object.sellOrderBookList) {
        message.sellOrderBookList.push(SellOrderBook.fromJSON(e));
      }
    }
    if (
      object.buyOrderBookList !== undefined &&
      object.buyOrderBookList !== null
    ) {
      for (const e of object.buyOrderBookList) {
        message.buyOrderBookList.push(BuyOrderBook.fromJSON(e));
      }
    }
    if (object.denomTraceList !== undefined && object.denomTraceList !== null) {
      for (const e of object.denomTraceList) {
        message.denomTraceList.push(DenomTrace.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.sellOrderBookList) {
      obj.sellOrderBookList = message.sellOrderBookList.map((e) =>
        e ? SellOrderBook.toJSON(e) : undefined
      );
    } else {
      obj.sellOrderBookList = [];
    }
    if (message.buyOrderBookList) {
      obj.buyOrderBookList = message.buyOrderBookList.map((e) =>
        e ? BuyOrderBook.toJSON(e) : undefined
      );
    } else {
      obj.buyOrderBookList = [];
    }
    if (message.denomTraceList) {
      obj.denomTraceList = message.denomTraceList.map((e) =>
        e ? DenomTrace.toJSON(e) : undefined
      );
    } else {
      obj.denomTraceList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sellOrderBookList = [];
    message.buyOrderBookList = [];
    message.denomTraceList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (
      object.sellOrderBookList !== undefined &&
      object.sellOrderBookList !== null
    ) {
      for (const e of object.sellOrderBookList) {
        message.sellOrderBookList.push(SellOrderBook.fromPartial(e));
      }
    }
    if (
      object.buyOrderBookList !== undefined &&
      object.buyOrderBookList !== null
    ) {
      for (const e of object.buyOrderBookList) {
        message.buyOrderBookList.push(BuyOrderBook.fromPartial(e));
      }
    }
    if (object.denomTraceList !== undefined && object.denomTraceList !== null) {
      for (const e of object.denomTraceList) {
        message.denomTraceList.push(DenomTrace.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

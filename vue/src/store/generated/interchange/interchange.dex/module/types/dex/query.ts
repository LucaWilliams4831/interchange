/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../dex/params";
import { SellOrderBook } from "../dex/sell_order_book";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { BuyOrderBook } from "../dex/buy_order_book";
import { DenomTrace } from "../dex/denom_trace";

export const protobufPackage = "interchange.dex";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSellOrderBookRequest {
  index: string;
}

export interface QueryGetSellOrderBookResponse {
  sellOrderBook: SellOrderBook | undefined;
}

export interface QueryAllSellOrderBookRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSellOrderBookResponse {
  sellOrderBook: SellOrderBook[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBuyOrderBookRequest {
  index: string;
}

export interface QueryGetBuyOrderBookResponse {
  buyOrderBook: BuyOrderBook | undefined;
}

export interface QueryAllBuyOrderBookRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyOrderBookResponse {
  buyOrderBook: BuyOrderBook[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDenomTraceRequest {
  index: string;
}

export interface QueryGetDenomTraceResponse {
  denomTrace: DenomTrace | undefined;
}

export interface QueryAllDenomTraceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDenomTraceResponse {
  denomTrace: DenomTrace[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetSellOrderBookRequest: object = { index: "" };

export const QueryGetSellOrderBookRequest = {
  encode(
    message: QueryGetSellOrderBookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellOrderBookRequest,
    } as QueryGetSellOrderBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellOrderBookRequest {
    const message = {
      ...baseQueryGetSellOrderBookRequest,
    } as QueryGetSellOrderBookRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetSellOrderBookRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellOrderBookRequest>
  ): QueryGetSellOrderBookRequest {
    const message = {
      ...baseQueryGetSellOrderBookRequest,
    } as QueryGetSellOrderBookRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetSellOrderBookResponse: object = {};

export const QueryGetSellOrderBookResponse = {
  encode(
    message: QueryGetSellOrderBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellOrderBook !== undefined) {
      SellOrderBook.encode(
        message.sellOrderBook,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellOrderBookResponse,
    } as QueryGetSellOrderBookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderBook = SellOrderBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellOrderBookResponse {
    const message = {
      ...baseQueryGetSellOrderBookResponse,
    } as QueryGetSellOrderBookResponse;
    if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
      message.sellOrderBook = SellOrderBook.fromJSON(object.sellOrderBook);
    } else {
      message.sellOrderBook = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSellOrderBookResponse): unknown {
    const obj: any = {};
    message.sellOrderBook !== undefined &&
      (obj.sellOrderBook = message.sellOrderBook
        ? SellOrderBook.toJSON(message.sellOrderBook)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellOrderBookResponse>
  ): QueryGetSellOrderBookResponse {
    const message = {
      ...baseQueryGetSellOrderBookResponse,
    } as QueryGetSellOrderBookResponse;
    if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
      message.sellOrderBook = SellOrderBook.fromPartial(object.sellOrderBook);
    } else {
      message.sellOrderBook = undefined;
    }
    return message;
  },
};

const baseQueryAllSellOrderBookRequest: object = {};

export const QueryAllSellOrderBookRequest = {
  encode(
    message: QueryAllSellOrderBookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSellOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellOrderBookRequest,
    } as QueryAllSellOrderBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellOrderBookRequest {
    const message = {
      ...baseQueryAllSellOrderBookRequest,
    } as QueryAllSellOrderBookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellOrderBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellOrderBookRequest>
  ): QueryAllSellOrderBookRequest {
    const message = {
      ...baseQueryAllSellOrderBookRequest,
    } as QueryAllSellOrderBookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSellOrderBookResponse: object = {};

export const QueryAllSellOrderBookResponse = {
  encode(
    message: QueryAllSellOrderBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sellOrderBook) {
      SellOrderBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSellOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellOrderBookResponse,
    } as QueryAllSellOrderBookResponse;
    message.sellOrderBook = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderBook.push(
            SellOrderBook.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellOrderBookResponse {
    const message = {
      ...baseQueryAllSellOrderBookResponse,
    } as QueryAllSellOrderBookResponse;
    message.sellOrderBook = [];
    if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
      for (const e of object.sellOrderBook) {
        message.sellOrderBook.push(SellOrderBook.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellOrderBookResponse): unknown {
    const obj: any = {};
    if (message.sellOrderBook) {
      obj.sellOrderBook = message.sellOrderBook.map((e) =>
        e ? SellOrderBook.toJSON(e) : undefined
      );
    } else {
      obj.sellOrderBook = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellOrderBookResponse>
  ): QueryAllSellOrderBookResponse {
    const message = {
      ...baseQueryAllSellOrderBookResponse,
    } as QueryAllSellOrderBookResponse;
    message.sellOrderBook = [];
    if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
      for (const e of object.sellOrderBook) {
        message.sellOrderBook.push(SellOrderBook.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBuyOrderBookRequest: object = { index: "" };

export const QueryGetBuyOrderBookRequest = {
  encode(
    message: QueryGetBuyOrderBookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyOrderBookRequest,
    } as QueryGetBuyOrderBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyOrderBookRequest {
    const message = {
      ...baseQueryGetBuyOrderBookRequest,
    } as QueryGetBuyOrderBookRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuyOrderBookRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyOrderBookRequest>
  ): QueryGetBuyOrderBookRequest {
    const message = {
      ...baseQueryGetBuyOrderBookRequest,
    } as QueryGetBuyOrderBookRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBuyOrderBookResponse: object = {};

export const QueryGetBuyOrderBookResponse = {
  encode(
    message: QueryGetBuyOrderBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyOrderBook !== undefined) {
      BuyOrderBook.encode(
        message.buyOrderBook,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyOrderBookResponse,
    } as QueryGetBuyOrderBookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrderBook = BuyOrderBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyOrderBookResponse {
    const message = {
      ...baseQueryGetBuyOrderBookResponse,
    } as QueryGetBuyOrderBookResponse;
    if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
      message.buyOrderBook = BuyOrderBook.fromJSON(object.buyOrderBook);
    } else {
      message.buyOrderBook = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyOrderBookResponse): unknown {
    const obj: any = {};
    message.buyOrderBook !== undefined &&
      (obj.buyOrderBook = message.buyOrderBook
        ? BuyOrderBook.toJSON(message.buyOrderBook)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyOrderBookResponse>
  ): QueryGetBuyOrderBookResponse {
    const message = {
      ...baseQueryGetBuyOrderBookResponse,
    } as QueryGetBuyOrderBookResponse;
    if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
      message.buyOrderBook = BuyOrderBook.fromPartial(object.buyOrderBook);
    } else {
      message.buyOrderBook = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyOrderBookRequest: object = {};

export const QueryAllBuyOrderBookRequest = {
  encode(
    message: QueryAllBuyOrderBookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBuyOrderBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyOrderBookRequest,
    } as QueryAllBuyOrderBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyOrderBookRequest {
    const message = {
      ...baseQueryAllBuyOrderBookRequest,
    } as QueryAllBuyOrderBookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyOrderBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyOrderBookRequest>
  ): QueryAllBuyOrderBookRequest {
    const message = {
      ...baseQueryAllBuyOrderBookRequest,
    } as QueryAllBuyOrderBookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyOrderBookResponse: object = {};

export const QueryAllBuyOrderBookResponse = {
  encode(
    message: QueryAllBuyOrderBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyOrderBook) {
      BuyOrderBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBuyOrderBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyOrderBookResponse,
    } as QueryAllBuyOrderBookResponse;
    message.buyOrderBook = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrderBook.push(
            BuyOrderBook.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyOrderBookResponse {
    const message = {
      ...baseQueryAllBuyOrderBookResponse,
    } as QueryAllBuyOrderBookResponse;
    message.buyOrderBook = [];
    if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
      for (const e of object.buyOrderBook) {
        message.buyOrderBook.push(BuyOrderBook.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyOrderBookResponse): unknown {
    const obj: any = {};
    if (message.buyOrderBook) {
      obj.buyOrderBook = message.buyOrderBook.map((e) =>
        e ? BuyOrderBook.toJSON(e) : undefined
      );
    } else {
      obj.buyOrderBook = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyOrderBookResponse>
  ): QueryAllBuyOrderBookResponse {
    const message = {
      ...baseQueryAllBuyOrderBookResponse,
    } as QueryAllBuyOrderBookResponse;
    message.buyOrderBook = [];
    if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
      for (const e of object.buyOrderBook) {
        message.buyOrderBook.push(BuyOrderBook.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDenomTraceRequest: object = { index: "" };

export const QueryGetDenomTraceRequest = {
  encode(
    message: QueryGetDenomTraceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDenomTraceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDenomTraceRequest,
    } as QueryGetDenomTraceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomTraceRequest {
    const message = {
      ...baseQueryGetDenomTraceRequest,
    } as QueryGetDenomTraceRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetDenomTraceRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDenomTraceRequest>
  ): QueryGetDenomTraceRequest {
    const message = {
      ...baseQueryGetDenomTraceRequest,
    } as QueryGetDenomTraceRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetDenomTraceResponse: object = {};

export const QueryGetDenomTraceResponse = {
  encode(
    message: QueryGetDenomTraceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDenomTraceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDenomTraceResponse,
    } as QueryGetDenomTraceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomTraceResponse {
    const message = {
      ...baseQueryGetDenomTraceResponse,
    } as QueryGetDenomTraceResponse;
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = DenomTrace.fromJSON(object.denomTrace);
    } else {
      message.denomTrace = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDenomTraceResponse): unknown {
    const obj: any = {};
    message.denomTrace !== undefined &&
      (obj.denomTrace = message.denomTrace
        ? DenomTrace.toJSON(message.denomTrace)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDenomTraceResponse>
  ): QueryGetDenomTraceResponse {
    const message = {
      ...baseQueryGetDenomTraceResponse,
    } as QueryGetDenomTraceResponse;
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = DenomTrace.fromPartial(object.denomTrace);
    } else {
      message.denomTrace = undefined;
    }
    return message;
  },
};

const baseQueryAllDenomTraceRequest: object = {};

export const QueryAllDenomTraceRequest = {
  encode(
    message: QueryAllDenomTraceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDenomTraceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDenomTraceRequest,
    } as QueryAllDenomTraceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDenomTraceRequest {
    const message = {
      ...baseQueryAllDenomTraceRequest,
    } as QueryAllDenomTraceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDenomTraceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDenomTraceRequest>
  ): QueryAllDenomTraceRequest {
    const message = {
      ...baseQueryAllDenomTraceRequest,
    } as QueryAllDenomTraceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDenomTraceResponse: object = {};

export const QueryAllDenomTraceResponse = {
  encode(
    message: QueryAllDenomTraceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.denomTrace) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDenomTraceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDenomTraceResponse,
    } as QueryAllDenomTraceResponse;
    message.denomTrace = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace.push(DenomTrace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDenomTraceResponse {
    const message = {
      ...baseQueryAllDenomTraceResponse,
    } as QueryAllDenomTraceResponse;
    message.denomTrace = [];
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      for (const e of object.denomTrace) {
        message.denomTrace.push(DenomTrace.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDenomTraceResponse): unknown {
    const obj: any = {};
    if (message.denomTrace) {
      obj.denomTrace = message.denomTrace.map((e) =>
        e ? DenomTrace.toJSON(e) : undefined
      );
    } else {
      obj.denomTrace = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDenomTraceResponse>
  ): QueryAllDenomTraceResponse {
    const message = {
      ...baseQueryAllDenomTraceResponse,
    } as QueryAllDenomTraceResponse;
    message.denomTrace = [];
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      for (const e of object.denomTrace) {
        message.denomTrace.push(DenomTrace.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SellOrderBook by index. */
  SellOrderBook(
    request: QueryGetSellOrderBookRequest
  ): Promise<QueryGetSellOrderBookResponse>;
  /** Queries a list of SellOrderBook items. */
  SellOrderBookAll(
    request: QueryAllSellOrderBookRequest
  ): Promise<QueryAllSellOrderBookResponse>;
  /** Queries a BuyOrderBook by index. */
  BuyOrderBook(
    request: QueryGetBuyOrderBookRequest
  ): Promise<QueryGetBuyOrderBookResponse>;
  /** Queries a list of BuyOrderBook items. */
  BuyOrderBookAll(
    request: QueryAllBuyOrderBookRequest
  ): Promise<QueryAllBuyOrderBookResponse>;
  /** Queries a DenomTrace by index. */
  DenomTrace(
    request: QueryGetDenomTraceRequest
  ): Promise<QueryGetDenomTraceResponse>;
  /** Queries a list of DenomTrace items. */
  DenomTraceAll(
    request: QueryAllDenomTraceRequest
  ): Promise<QueryAllDenomTraceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("interchange.dex.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  SellOrderBook(
    request: QueryGetSellOrderBookRequest
  ): Promise<QueryGetSellOrderBookResponse> {
    const data = QueryGetSellOrderBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchange.dex.Query",
      "SellOrderBook",
      data
    );
    return promise.then((data) =>
      QueryGetSellOrderBookResponse.decode(new Reader(data))
    );
  }

  SellOrderBookAll(
    request: QueryAllSellOrderBookRequest
  ): Promise<QueryAllSellOrderBookResponse> {
    const data = QueryAllSellOrderBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchange.dex.Query",
      "SellOrderBookAll",
      data
    );
    return promise.then((data) =>
      QueryAllSellOrderBookResponse.decode(new Reader(data))
    );
  }

  BuyOrderBook(
    request: QueryGetBuyOrderBookRequest
  ): Promise<QueryGetBuyOrderBookResponse> {
    const data = QueryGetBuyOrderBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchange.dex.Query",
      "BuyOrderBook",
      data
    );
    return promise.then((data) =>
      QueryGetBuyOrderBookResponse.decode(new Reader(data))
    );
  }

  BuyOrderBookAll(
    request: QueryAllBuyOrderBookRequest
  ): Promise<QueryAllBuyOrderBookResponse> {
    const data = QueryAllBuyOrderBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchange.dex.Query",
      "BuyOrderBookAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuyOrderBookResponse.decode(new Reader(data))
    );
  }

  DenomTrace(
    request: QueryGetDenomTraceRequest
  ): Promise<QueryGetDenomTraceResponse> {
    const data = QueryGetDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchange.dex.Query",
      "DenomTrace",
      data
    );
    return promise.then((data) =>
      QueryGetDenomTraceResponse.decode(new Reader(data))
    );
  }

  DenomTraceAll(
    request: QueryAllDenomTraceRequest
  ): Promise<QueryAllDenomTraceResponse> {
    const data = QueryAllDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchange.dex.Query",
      "DenomTraceAll",
      data
    );
    return promise.then((data) =>
      QueryAllDenomTraceResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

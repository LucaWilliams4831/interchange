package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"interchange/x/dex/types"
)

func (k msgServer) CancelBuyOrder(goCtx context.Context, msg *types.MsgCancelBuyOrder) (*types.MsgCancelBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCancelBuyOrderResponse{}, nil
}

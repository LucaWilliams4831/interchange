package keeper

import (
	"interchange/x/dex/types"
)

var _ types.QueryServer = Keeper{}

package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "interchange/testutil/keeper"
	"interchange/testutil/nullify"
	"interchange/x/dex/keeper"
	"interchange/x/dex/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNDenomTrace(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DenomTrace {
	items := make([]types.DenomTrace, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetDenomTrace(ctx, items[i])
	}
	return items
}

func TestDenomTraceGet(t *testing.T) {
	keeper, ctx := keepertest.DexKeeper(t)
	items := createNDenomTrace(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDenomTrace(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestDenomTraceRemove(t *testing.T) {
	keeper, ctx := keepertest.DexKeeper(t)
	items := createNDenomTrace(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDenomTrace(ctx,
			item.Index,
		)
		_, found := keeper.GetDenomTrace(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestDenomTraceGetAll(t *testing.T) {
	keeper, ctx := keepertest.DexKeeper(t)
	items := createNDenomTrace(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDenomTrace(ctx)),
	)
}

package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"interchange/x/dex/keeper"
	"interchange/x/dex/types"
)

func SimulateMsgCancelSellOrder(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCancelSellOrder{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CancelSellOrder simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CancelSellOrder simulation not implemented"), nil, nil
	}
}

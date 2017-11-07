const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;


/**
 * Sub document of a transaction -
 * filled when the transaction destination
 * is a ERC20 token contract.
 *
 * @type {"mongoose".Schema}
 */
const tokenTransactionSchema = new Schema({
    transactionType: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    token: {
        name: {
            type: String,
            required: true
        },
        symbol: {
            type: String,
            required: true
        },
        decimals: {
            type: Number,
            required: true
        },
        totalSupply: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    }
});


/**
 * Model for a single transaction.
 *
 * @type {"mongoose".Schema}
 */
const transactionSchema = new Schema({
    blockNumber: {
        type: Number,
        required: true
    },
    timeStamp: {
        type: String,
        required: true
    },
    nonce: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    gas: {
        type: String,
        required: true
    },
    gasPrice: {
        type: String,
        required: true
    },
    input: {
        type: String,
        required: true
    },
    gasUsed: {
        type: String,
        required: true
    },
    action: tokenTransactionSchema

}, {
    versionKey: false,
    _id: false
});

transactionSchema.plugin(mongoosePaginate);

//transactionSchema.index({hash: 1});
//transactionSchema.index({from: 1});
//transactionSchema.index({to: 1});
//transactionSchema.index({timeStamp: -1});

export const Transaction = mongoose.model("Transaction", transactionSchema );
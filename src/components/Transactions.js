import { useState } from "react";
import { Notif } from "./Notif";
import { formatNumber, getDateToday } from "./Utils";

export const Transactions = (props) => {

    const transactions = {
        "Data": {
            "Transaction": [
                {
                    "AccountId": "64dab7c3-66c3-48c0-92d5-983469ca4637",
                    "TransactionId": "6ae5741b-238f-46d4-bf6f-853180bbf222",
                    "CreditDebitIndicator": "Credit",
                    "Status": "Booked",
                    "BookingDateTime": "2023-07-18T03:55:00.000Z",
                    "Amount": {
                        "Amount": "250.00",
                        "Currency": "GBP"
                    },
                    "ProprietaryBankTransactionCode": {
                        "Code": "TFR"
                    },
                    "TransactionInformation": "Monthly savings",
                    "Balance": {
                        "CreditDebitIndicator": "Credit",
                        "Type": "Information",
                        "Amount": {
                            "Amount": "125680.92",
                            "Currency": "GBP"
                        }
                    }
                }
            ]
        },
        "Links": {
            "Self": "https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/accounts/64dab7c3-66c3-48c0-92d5-983469ca4637/transactions?page=0",
            "First": "https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/accounts/64dab7c3-66c3-48c0-92d5-983469ca4637/transactions?page=0",
            "Last": "https://ob.sandbox.natwest.com/open-banking/v3.1/aisp/accounts/64dab7c3-66c3-48c0-92d5-983469ca4637/transactions?page=0"
        },
        "Meta": {
            "TotalPages": 1
        }
    }

    return (
        <section id="main-content">
                <h1>Transaction Details</h1>

                <label>AccountId</label>
                {transactions.Data.Transaction[0].AccountId}

                <label>TransactionId</label>
                {transactions.Data.Transaction[0].TransactionId}

                <label>Status</label>
                {transactions.Data.Transaction[0].Status}

                <label>BookingDateTime</label>
                {transactions.Data.Transaction[0].BookingDateTime}

                <label>Amount</label>
                {transactions.Data.Transaction[0].Amount.Amount}

                <label>Balance</label>
                {transactions.Data.Transaction[0].Balance.Amount.Amount}

        </section>
    )
}

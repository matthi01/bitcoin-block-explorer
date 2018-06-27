import React, { Component } from "react";
import moment from "moment";
import "./Transactions.css";
import { Table } from "semantic-ui-react";
import axios from "../../axios-blocks/axios-blocks";

class Transactions extends Component {
    state = {
        transactionData: null
    };

    fetchTransactions = blockHeight => {
        axios
            .get(`/${blockHeight}/tx`)
            .then(response => {
                // response.data.data.list.forEach(el => console.log(el.is_coinbase));
                let transactionData = response.data.data.list.map(txn => {
                    return (
                        <Table.Row key={txn.hash}>
                            <Table.Cell>
                                {txn.is_coinbase ? "Yes" : "No"}
                            </Table.Cell>
                            <Table.Cell>{txn.fee * 0.00000001}</Table.Cell>
                            <Table.Cell>
                                {moment
                                    .unix(txn.created_at)
                                    .format("DD/MM/YYYY hh:mm a")}
                            </Table.Cell>
                            <Table.Cell>
                                {txn.outputs_value * 0.00000001}
                            </Table.Cell>
                        </Table.Row>
                    );
                });

                this.setState({ transactionData: transactionData });
            })
            .catch();
    };

    render() {
        this.fetchTransactions(this.props.blockHeight);

        return (
            <div className="Transactions">
                <div className="Transactions_text">Transactions:</div>

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Coinbase Txn</Table.HeaderCell>
                            <Table.HeaderCell>Fee (BTC)</Table.HeaderCell>
                            <Table.HeaderCell>Created</Table.HeaderCell>
                            <Table.HeaderCell>Value (BTC)</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>{this.state.transactionData}</Table.Body>
                </Table>
            </div>
        );
    }
}

export default Transactions;

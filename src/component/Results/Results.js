import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import axios from "../axios-blocks/axios-blocks";
import Transactions from "./Transactions/Transactions";
import "./Results.css";

class Results extends Component {
    state = {
        tableRowActive: false
    };

    onTableRowClickHandler = () => {
        this.setState(prevState => {
            return { tableRowActive: !prevState.tableRowActive };
        });
    };

    fetchTransactions = blockHeight => {
        axios.get(`/${blockHeight}/tx`).then(response => {
            console.log(response.data.data.list);
            return response.data.data.list;
        });
    };

    render() {
        let displayDataTable = null;
        if (this.props.results) {
            displayDataTable = (
                <Table.Row
                    active={this.state.tableRowActive}
                    key={this.props.results.height}
                    onClick={this.onTableRowClickHandler}
                >
                    <Table.Cell>{this.props.results.height}</Table.Cell>
                    <Table.Cell>{this.props.results.tx_count}</Table.Cell>
                    <Table.Cell>{this.props.results.nonce}</Table.Cell>
                </Table.Row>
            );
        }

        let transactions = null;
        let transactionsData = null;
        if (this.state.tableRowActive) {
            transactionsData = this.fetchTransactions(
                this.props.results.height
            );

            transactions = <Transactions transactionsData={transactions} />;
        }

        return (
            <div>
                <div className="Results">
                    <div className="Results_text">Block:</div>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Height</Table.HeaderCell>
                                <Table.HeaderCell>
                                    Transactions
                                </Table.HeaderCell>
                                <Table.HeaderCell>Nonce</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>{displayDataTable}</Table.Body>
                    </Table>
                </div>

                {transactions}
            </div>
        );
    }
}

export default Results;

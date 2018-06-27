import React, { Component } from "react";
import "./Transactions.css";
import { Table } from "semantic-ui-react";
import axios from "../../axios-blocks/axios-blocks";

class Transactions extends Component {
    fetchTransactions = blockHeight => {
        const response = axios.get(`/${blockHeight}/tx`).then(response => {
            response.data.data.list.map(txn => {
                <Table.Row>
                    <Table.Cell>txn.hash</Table.Cell>
                    <Table.Cell>txn.fee</Table.Cell>
                    <Table.Cell>txn.created_at</Table.Cell>
                    <Table.Cell>txn.outputs_value</Table.Cell>
                </Table.Row>;
            });
        });
    };

    render() {
        let transactionsArray = this.fetchTransactions(this.props.blockHeight);

        return (
            <div className="Transactions">
                <div className="Transactions_text">Transactions:</div>

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Hash</Table.HeaderCell>
                            <Table.HeaderCell>Fee</Table.HeaderCell>
                            <Table.HeaderCell>Created</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {transactionsArray}

                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie Harington</Table.Cell>
                            <Table.Cell>January 11, 2014</Table.Cell>
                            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie Harington</Table.Cell>
                            <Table.Cell>January 11, 2014</Table.Cell>
                            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default Transactions;

import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import Transactions from "./Transactions/Transactions";
import "./Results.css";

class Results extends Component {
    state = {
        tableRowActive: false
    };

    onTableRowatoggle = () => {
        this.setState(prevState => {
            return { tableRowActive: !prevState.tableRowActive };
        });
    };

    render() {
        let displayDataTable = null;
        if (this.props.results) {
            displayDataTable = (
                <Table.Row
                    active={this.state.tableRowActive}
                    key={this.props.results.height}
                    onClick={this.onTableRowatoggle}
                >
                    <Table.Cell>{this.props.results.height}</Table.Cell>
                    <Table.Cell>{this.props.results.tx_count}</Table.Cell>
                    <Table.Cell>{this.props.results.nonce}</Table.Cell>
                </Table.Row>
            );
        }

        let transactions = null;
        if (this.state.tableRowActive) {
            transactions = (
                <Transactions blockHeight={this.props.results.height} />
            );
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

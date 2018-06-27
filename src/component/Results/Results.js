import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";
import Transactions from "./Transactions/Transactions";
import "./Results.css";

class Results extends Component {
    state = {
        tableRowActive: false
    };

    // once a user starts typing a new block height, the current block should be unselected, hiding the transactions list
    componentWillReceiveProps(newProps) {
        this.setState({ tableRowActive: !newProps.resetTransactions });
    }

    onTableRowToggle = () => {
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
                    onClick={this.onTableRowToggle}
                >
                    <Table.Cell>{this.props.results.height}</Table.Cell>
                    <Table.Cell>{this.props.results.tx_count}</Table.Cell>
                    <Table.Cell>{this.props.results.size / 1048576}</Table.Cell>
                    <Table.Cell>
                        {moment
                            .unix(this.props.results.timestamp)
                            .format("DD/MM/YYYY hh:mm a")}
                    </Table.Cell>
                    <Table.Cell>{this.props.results.nonce}</Table.Cell>
                </Table.Row>
            );
        }

        let transactions = null;
        if (this.state.tableRowActive && this.props.results) {
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
                                <Table.HeaderCell>
                                    Block Size (MB)
                                </Table.HeaderCell>
                                <Table.HeaderCell>Timestamp</Table.HeaderCell>
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

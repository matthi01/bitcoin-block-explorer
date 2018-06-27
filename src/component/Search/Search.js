import React, { Component } from "react";
import { Input } from "semantic-ui-react";

import axios from "../axios-blocks/axios-blocks";
import Results from "../Results/Results";
import "./Search.css";

class Search extends Component {
    state = {
        searchValue: "",
        results: null,
        resetTransactions: true
    };

    componentWillMount() {
        axios.get("/latest").then(response => {
            console.log(response.data.data);
            this.setState({ results: response.data.data });
        });
    }

    onSearchHandler = event => {
        event.preventDefault();

        let searchValue;
        if (!this.state.searchValue) {
            searchValue = "latest";
        } else {
            searchValue = this.state.searchValue;
        }
        axios
            .get(`/${searchValue}`)
            .then(response => {
                this.setState({ results: response.data.data });
            })
            .catch();
    };

    onSearchValueChangedHandler(event) {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="Search_container">
                    <div className="Search_text">{this.props.headerText}</div>
                    <form onSubmit={this.onSearchHandler} className="Search">
                        <Input
                            className="Search_input"
                            size="mini"
                            icon="search"
                            placeholder="Search Block Height..."
                            onChange={e => this.onSearchValueChangedHandler(e)}
                        />
                    </form>
                </div>
                <Results
                    results={this.state.results}
                    resetTransactions={this.state.resetTransactions}
                />
            </div>
        );
    }
}

export default Search;

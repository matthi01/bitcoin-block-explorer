import React, { Component } from "react";
import { Input } from "semantic-ui-react";

import axios from "../axios-blocks/axios-blocks";
import Results from "../Results/Results";
import "./Search.css";

class Search extends Component {
    state = {
        searchValue: "",
        searchClicked: false,
        results: null
    };

    componentWillMount() {
        axios.get("/latest").then(response => {
            console.log(response.data.data);
            this.setState({ results: response.data.data });
        });
    }

    onSearchHandler = event => {
        event.preventDefault();
        console.log("search clicked: " + this.state.searchValue);
        this.setState({ searchClicked: true });

        axios.get(`/${this.state.searchValue}`).then(response => {
            this.setState({ results: response.data.data });
        });
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
                            size="mini"
                            icon="search"
                            placeholder="Search Block Height..."
                            onChange={e => this.onSearchValueChangedHandler(e)}
                        />
                    </form>
                </div>
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Search;
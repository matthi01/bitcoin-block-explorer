import React, { Component } from "react";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";

class App extends Component {
    render() {
        return (
            <div>
                <Header headerTitle="Bitcoin Block Explorer" />
                <Search headerText="Search by block height" />
            </div>
        );
    }
}

export default App;

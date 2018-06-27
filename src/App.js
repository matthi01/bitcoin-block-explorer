import React, { Component } from "react";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import Footer from "./component/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header headerTitle="Bitcoin Block Explorer" />
                <Search headerText="Search by block height" />
                <Footer footerText="&copy; Matthias Ruhland 2018" />
            </div>
        );
    }
}

export default App;

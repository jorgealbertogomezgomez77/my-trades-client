import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchTrade } from "actions/actions";
import TradeTable from "components/trade-table";
import { fetchTrades } from "./actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchTrades();
  }
  render() {
    return (
      <div className="App">
        <TradeTable />
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchTrades
  }
)(App);

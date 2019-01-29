import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import AppPresenter from "./AppPresenter";
import reset from "styled-reset";
import typography from "../../typography";
import axios from "axios";
import { API_URL } from "../../constants";

const baseStyles = () => createGlobalStyle`
    ${reset}
    ${typography}
    a{
        text-decoration:none!important;
    }
`;

class AppContainer extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    this._getData();
  };

  _getData = async () => {
    const request = await axios.get(`${API_URL}/blocks`);
    const blocks = request.data;
    this.setState({
      blocks,
      isLoading: false
    });
    console.log(request);
  };

  render() {
    baseStyles();
    return <AppPresenter {...this.state} />;
  }
}

export default AppContainer;

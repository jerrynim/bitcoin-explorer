import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import AppPresenter from "./AppPresenter";
import reset from "styled-reset";

const baseStyles = () => createGlobalStyle`
    ${reset}
`;

class AppContainer extends Component {
  render() {
    baseStyles();
    return <AppPresenter />;
  }
}

export default AppContainer;

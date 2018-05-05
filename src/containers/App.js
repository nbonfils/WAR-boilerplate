import React from 'react';

import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;

/**
 * Root react component
 */
export default class App extends React.Component {
  /**
   * Constructor function
   * @constructor
   * @param {Object} props object
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render function for a react component
   * @return {Component} The main App component
   */
  render() {
    return (
      <Layout>
        <Header>
        </Header>

        <Content>
        </Content>

        <Footer>
          <footer>
            Blazebone Corp ©2018 Created by Nils Bonfils
          </footer>
        </Footer>
      </Layout>
    );
  }
}

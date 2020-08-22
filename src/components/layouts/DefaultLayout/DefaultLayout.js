import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Content } = Layout;

class DefaultLayout extends Component {
  static propTypes = {
    header: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired,
    footer: PropTypes.element.isRequired
  };

  static defaultProps = {};

  render() {
    return (
      <Layout>
        <Layout>
          <Content>{this.props.content}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;

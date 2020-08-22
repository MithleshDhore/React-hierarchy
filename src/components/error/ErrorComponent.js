import React from 'react';
import { Result, Button } from 'antd';
import isEmpty from 'lodash/isEmpty'
class ErrorComponent extends React.Component {
  routeAction = () => {
    const { error: { route } = {} } = this.props;
    this.props.routeToGivenRoute({ route: isEmpty(route) ? '' : route });
  };
  render() {
    const routeAction = <Button onClick={this.routeAction}>Go Back</Button>;
    const { error: { status, title, message, route } = {} } = this.props;
    return (
      <div>
        <Result
          status={status}
          title={title}
          subTitle={message}
          extra={route ? routeAction : ''}
          extra={routeAction}
        />
      </div>
    );
  }
  componentWillUnmount() {
    this.props.resetError({});
  }
}

export default ErrorComponent;

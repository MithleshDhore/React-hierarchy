import React, { Component, Fragment } from 'react';
import { Hierarchy } from '../hierarchy/Hierarchy';
import isEmpty from 'lodash/isEmpty';
import { THEME } from './theme';
import './Dashboard.css';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchHierarchy({})
  }

  mapColorSchemaFromJSON = payload => {
    !isEmpty(payload) &&
      Object.keys(payload).forEach(key => {
        const value = `${payload[key] ? payload[key] : '#fafafa'}`;
        switch (key) {
          case 'primaryColor':
            document.body.style.setProperty('--primary-color', value);
            break;
          case 'secondaryColor':
            document.body.style.setProperty('--secondary-color', value);
            break;
          default:
            break;
        }
      });
  };

  changeTheme = (theme) => {
    this.mapColorSchemaFromJSON(theme)
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {Object.keys(THEME).map((theme) => {
                return <button type="button" key={theme} className="btn btn-light btn-bgr m-l-2 m-t-1" onClick={() => this.changeTheme(THEME[theme])}>{theme}</button>
              })}
            </div>
            <div className="col-12">
              {this.props.hierarchy && <Hierarchy data={this.props.hierarchy} />}
            </div>
          </div>
        </div>
      </Fragment >
    );
  }
}

export default Dashboard;
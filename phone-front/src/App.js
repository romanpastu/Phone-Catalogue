import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { loadPhones } from './redux/actions/actions.js';
import TablePhones from './Table.js';

const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
  return {
    loadPhones: () => {
      dispatch(loadPhones());
    },
  };
}

export function App(props) {
  useEffect(() => {
    props.loadPhones();
  }, []);

  if (props.phones.data) {
    console.log(props.phones)
    return (
      <div className="App">
        <div className="introductoryNav">Phones</div>
        <TablePhones phones={props.phones.data} />
      </div>
    );
  }
  return (
    <div className="gridLoadingContainer">
      <CircularProgress color="secondary" iconStyle="width: 1000, height:1000" />
      <p className="loadingText1">Loading...</p>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

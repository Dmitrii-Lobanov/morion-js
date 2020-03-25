import React from 'react';
import { connect } from "react-redux";

function ShowRedux({ chosenDate }) {
  return (
    <div>
      <h3>Выбранная дата (из redux): {chosenDate}</h3>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    chosenDate: state.date
  }
}

export default connect(
  mapStateToProps
)(ShowRedux);

export { ShowRedux };
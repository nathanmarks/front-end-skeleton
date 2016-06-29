import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'stylishly';
import { connect } from 'react-redux';

export const styleSheet = createStyleSheet('Home', () => {
  return {
    logoContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      width: 75,
      marginRight: 10
    },
    logoText: {
      whiteSpace: 'nowrap',
      fontWeight: 500
    }
  };
});

class Home extends Component {
  static contextTypes = {
    styleManager: PropTypes.object.isRequired
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={classes.logoContainer}>
        <img src="/assets/images/logo.svg" alt="Front End Skeleton logo" className={classes.logo} />
        <h1 className={classes.logoText}>Front End Skeleton</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    drawerOpen: state.app.drawerOpen
  };
}

export default connect(mapStateToProps)(Home);

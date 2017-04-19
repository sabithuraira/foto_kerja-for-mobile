import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ListPhotoBox from '../components/ListPhotoBox';
import SearchBox from '../components/SearchBox';
import * as appActions from '../actions/appActionCreators';

/*
const AppContainer = ({photoReducer, detailReducer, generalReducer, actions}) => (
  <div>
    <ListPhotoBox  actions={actions} photo={photoReducer} 
        detail={detailReducer} general={generalReducer} />
  </div>
)

AppContainer.propTypes = {
    photoReducer: PropTypes.object.isRequired,
    detailReducer: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    photoReducer: state.photoReducer,
    detailReducer: state.detailReducer,
    generalReducer: state.generalReducer
});


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
*/

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photoReducer, detailReducer, generalReducer, actions } = this.props;
    return (
        <div>
          <SearchBox actions={actions} general={generalReducer} />
          <ListPhotoBox  actions={actions} photo={photoReducer} 
              detail={detailReducer} general={generalReducer} />
        </div>
    );
  }
}

export default connect(state => ({
    photoReducer: state.photoReducer,
    detailReducer: state.detailReducer,
    generalReducer: state.generalReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(AppContainer);

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ListPhotoBox from '../components/ListPhotoBox';
import SearchBox from '../components/SearchBox';
import * as appActions from '../actions/appActionCreators';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photoReducer, detailReducer, generalReducer, actions } = this.props;
    return (
        <View style={styles.template}>
          <SearchBox actions={actions} general={generalReducer} />
          <ListPhotoBox  actions={actions} photo={photoReducer} 
              detail={detailReducer} general={generalReducer} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  template: {
    paddingTop: 25,
    marginLeft: 5,
    marginRight: 5,
  }
});

export default connect(state => ({
    photoReducer: state.photoReducer,
    detailReducer: state.detailReducer,
    generalReducer: state.generalReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(AppContainer);

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
 
export default class PhotoBox extends Component { 
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <View  style={styles.item}>
            <Image
                style={{flex: 1}}
                source={{uri: 'http://localhost:4000/media/'+this.props.data.file_name }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 1,
    padding: 1,
  },
});

PhotoBox.propTypes= {
    data: PropTypes.object.isRequired,
    general: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

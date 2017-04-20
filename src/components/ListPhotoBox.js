import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import PhotoBox from './PhotoBox'; 
 
export default class ListPhotoBox extends Component {
    photoComponent(index) {
        if (this.props.photo.datas[index]!=null) {
            return (<PhotoBox key={index} data={this.props.photo.datas[index]} general={this.props.general} actions={this.props.actions} style={styles.item} />);
        } else {
            return (<View key={index} style={styles.item_empty} />);
        }
    }

    render() {
      var photoItems = this.props.photo.datas.map((data,index) =>{
            if(index%2==0){
              return (
                  <View key={index/2} style={styles.box_view} >
                    <PhotoBox key={index} data={data} general={this.props.general} actions={this.props.actions} style={styles.item} />
                    {this.photoComponent(index+1)}
                  </View>
              )
            }
        }
      );

    return (
          <ScrollView>
            {photoItems}
          </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 1,
    backgroundColor: 'black'
  },
  item_empty: {
    flex: 1,
    margin: 1,
    backgroundColor: 'transparent'
  },
  box_view:{
    height: 200, 
    flexDirection: 'row',  
    backgroundColor: 'white'
  }
});

ListPhotoBox.propTypes= {
    photo: PropTypes.object.isRequired,
    detail: PropTypes.object.isRequired,
    general: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};
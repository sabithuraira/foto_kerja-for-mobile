import React, { Component, PropTypes } from 'react';
import {   
  StyleSheet,
  TextInput, 
  View } from 'react-native';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);      
        this.state = {
            src_term: ""
        };

        this.searchClick = this.searchClick.bind(this);
    }

    searchClick (event) {
        var is_change=false;

        if(event.nativeEvent.key=='Enter') is_change=true
        if(event.type=="click") is_change=true;

        if(is_change){
            fetch(this.props.general.url_web+'foto'+"?src_term="+this.state.src_term)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.actions.listPhoto(this.state.src_term.toLowerCase(), responseJson.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    componentDidMount() { 
        fetch(this.props.general.url_web+'foto')
          .then((response) => response.json())
          .then((responseJson) => {
            this.props.actions.listPhoto("", responseJson.data);
          })
          .catch((error) => {
            console.error(error);
          });
    }

  render() {
    return (
        <View style={styles.search_box}>
            <TextInput
                style={styles.search_input}
                onChangeText={(src_term) => this.setState({src_term})}
                onKeyPress={this.searchClick}
                value={this.state.src_term} 
                placeholder="Cari foto..."
                highlightColor={'#00BCD4'}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  search_box: {
    marginBottom: 5,
  },
  search_input:{
    height: 30, 
    borderBottomWidth: 1,
    borderBottomColor: '#e6e5e5',
    borderStyle: 'dashed',
    paddingLeft: 5,
  }
});

SearchBox.propTypes= {
    actions: PropTypes.object.isRequired,
    general: PropTypes.object.isRequired,
};
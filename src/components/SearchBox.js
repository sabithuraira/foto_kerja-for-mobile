import React, { Component, PropTypes } from 'react';
import { TextInput } from 'react-native';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);      
        this.state = {
            src_term: ""
        };

        this.searchClick = this.searchClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);  
    }

    handleInputChange(event) {
        this.setState({ src_term: event.target.value });
    }

    searchClick (event) {
        var is_change=false;

        if(event.type=="keypress" && event.key=='Enter') is_change=true
        if(event.type=="click") is_change=true;

        if(is_change){
            $.getJSON("/foto?src_term="+this.state.src_term, (response) => { 
                this.props.actions.listPhoto(this.state.src_term, response.data);
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
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.handleInputChange}
        onKeyPress={this.searchClick}
        value={this.state.src_term} 
      />
    );
  }
}

SearchBox.propTypes= {
    actions: PropTypes.object.isRequired,
    general: PropTypes.object.isRequired,
};

/*
export default class SearchBox extends React.Component {
    render() {
        return ( 
            <div className="row">
                <div className="col-md-1 col-sm-1 col-lg-1">
                    <div className="input-group nav-form">
                        <button type="button" className="btn btn-default">
                            <i className="glyphicon glyphicon-plus"></i>
                        </button>
                    </div>
                </div>

                <div className="col-md-11 col-sm-11 col-lg-11">
                    <div className="input-group nav-form">
                        <input type="text" className="form-control" 
                            value={this.state.src_term} 
                            onChange={this.handleInputChange}
                            onKeyPress={this.searchClick}
                            placeholder="Search" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.searchClick}>
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        ) 
    }
}

*/
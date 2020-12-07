import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            svSearch: '',
        };
    }

    handleChange = (event) => {
        this.setState({svSearch: event.target.value});
    }

    handleSearch = () => {
        const {svSearch} = this.state;
        this.props.onSearchSV(svSearch);
    }

    handleCancel = () => {
       this.setState({svSearch: ''});
       this.props.onSearchSV('');
    }

    render() {
        const {svSearch} = this.state;
        return(
          <div className={'Search'}>
              <input value={svSearch} type={'text'} placeholder={'Search item name'} onChange={this.handleChange}/>
              <button type={'submit'} className={'Background'} onClick={this.handleSearch}>Search</button>
              <button type={'submit'} className={'Background1'} onClick={this.handleCancel}>Cancel</button>
          </div>
        );
    }
}

Search.propTypes = {
    onClickSearch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchSV: (svSearch) => {
            dispatch(actions.searchSV(svSearch));
        },
    }
};
export default connect(null, mapDispatchToProps)(Search);
import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';

class SortBy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orderby: ''
        }
    }

    handleChange = (event) => {
        this.props.onSortSV(event.target.value);
        this.setState({orderby: event.target.value});
    }

    render() {
        const {orderby} = this.state;
        return(
            <div className={'Sort'}>
                <table>
                    <tbody>
                        <tr>
                            <td>Sort By</td>
                                <td>
                                <select value={orderby} onChange={this.handleChange}>
                                    <option value={'name'}>Name</option>
                                    <option value={'level'}>Level</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

SortBy.propTypes = {
    onClickSort: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSortSV: (orderBy) => {
            dispatch(actions.sortSV(orderBy));
        }
    }
};

export default connect(null, mapDispatchToProps)(SortBy);
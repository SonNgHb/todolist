import React from "react";
import PropTypes from 'prop-types';
import SV from "./SV";
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import apiCaller from "../axios/apiCaller";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          //dssv: [],
        };
    }
    // componentDidMount() {
    //     apiCaller('students', 'GET', null).then(res => {
    //         this.setState({
    //            dssv: res.data,
    //         });
    //     });
    // }

    // handleDelete = () => {
    //     const index = this.props;
    //     const {dssv} = this.state;
    //     // apiCaller(`stundents/${index}`, 'DELETE', null).then(res => {
    //     //        if(index.index !== -1) {
    //     //            dssv.splice(index.index, 1);
    //     //            this.setState({dssv: dssv});
    //     //        }
    //     // });
    //     if(index.index !== -1) {
    //         dssv.splice(index.index, 1);
    //     }
    // }
    actionType = (buttonType) => {
        this.props.onButton(buttonType);
    }

    render() {
        const { getIndex, buttonType} = this.props;
        //render danh sach
        let dssv1 = [];
        dssv1 = dssv1.map((sv, index) => {
                const condition = true;
                if ((buttonType === 'completed' && sv.status === false) || (buttonType === 'active' && sv.status === true)) {
                    return null;
                }
                if (condition)
                        return (
                            <SV
                                dssv1={dssv1}
                                key={index}
                                sv={sv}
                                index = {index}
                                getIndex={getIndex}
                            />
                        );
                }
        );

        //dem so luong object trong danh sach
        const dem = Object.keys(dssv1).length;

        return(
          <div>
              <table border={1} cellSpacing={1} className={'List'}>
                  <tbody>
                      <tr className={'Background'}>
                          <th colSpan={6}>
                              DANH SACH SINH VIEN
                          </th>
                      </tr>
                  </tbody>
                  <tbody>
                      <tr className={'FirstRow'}>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Level</th>
                          <th colSpan={2}>Action</th>
                          <th>Status</th>
                      </tr>
                  </tbody>
                  <tbody>
                      {dssv1}
                      <tr className={'FirstRow1'}>
                          <td colSpan={3}>Your total task you have been need do: </td>
                          <td colSpan={3}>{dem}</td>
                      </tr>
                      <tr className={'FirstRow'}>
                          <td colSpan={2}>
                              <button type={'text'} className={'FirstRow2'} onClick={() => this.actionType('all')}>All</button>
                          </td>
                          <td>
                              <button type={'text'} className={'FirstRow2'} onClick={() => this.actionType('active')}>Active</button>
                          </td>
                          <td colSpan={3}>
                              <button type={'text'} className={'FirstRow2'} onClick={() => this.actionType('completed')}>Completed</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        );
    }
}

List.propTypes = {
    dssv: PropTypes.array.isRequired,
    handeDelete: PropTypes.func,
};

List.defaultProps = {
    dssv: [],
};

const mapStateToProps = state => {
    return {
        dssv: state.dssv,
        svSort: state.sort,
        buttonType: state.button,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onButton: (button) => {
            dispatch(actions.buttonType(button));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
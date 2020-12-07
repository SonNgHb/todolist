import React from "react";
import PropType from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import {Redirect} from "react-router";

class Form extends React.Component{
    constructor(props) {
        super(props);
        const {svSelect} = props;
        this.state = {
            name: svSelect.name !== '' ? svSelect.name : '',
            level: svSelect ? svSelect.level : 0,
        };
    }

    shouldComponentUpdate(nextProps) {
        const {svSelect} = nextProps;
        const svOld = this.props.svSelect;
        if(svSelect !== svOld) {
            this.setState({
                name: svSelect.name !== '' ? svSelect.name : '',
                level: svSelect ? svSelect.level : 0,
            })
            return true;
        }
        return true;
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(
            {[name]: value}
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, level} = this.state;
        const {status} = this.props;
        const newSV = {
            id: uuidv4(),
            name: name,
            level: +level,
            status: false,
        };
        const {svSelect} = this.props;
        if(!svSelect.id) {
            this.props.onAddSV(newSV);

        }
        else {
            const oldSV = {
              id: svSelect.id,
              name: name,
              level: +level,
              status: status,
            };
            this.props.onEditSV(oldSV);
        }
        this.setState({name: ''});
        return (<Redirect to={'/list'}/>);
    }
    render() {
        const {level, name} = this.state;
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <form onSubmit={this.handleSubmit}>
                                    <input value={name} name={'name'} type={'text'} onChange={this.handleChange} placeholder={'Add item name'}/>
                                    <select value={level} name={'level'} onChange={this.handleChange}>
                                        <option value={3}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={1}>Slow</option>
                                    </select>
                                    <button type={'submit'} className={'Background'} >Submit</button>

                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Form.propTypes = {
    sv: PropType.string,
    handleSubmit: PropType.func,
};

const mapStateToProps = (state) => {
    return {
        svSelect: state.select,
        dssv: state.dssv,
        status: state.check,
    }
};
const mapDispatchToProps = (dispatch) => {
  return {
      onAddSV: (sv) => {
          dispatch(actions.postStudent(sv))
      },
      onEditSV: (sv) => {
          dispatch(actions.editStudent(sv));
      }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
// import React from "react";
// class Form extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             level: 0,
//         };
//     }
//     componentDidMount() {
//         const {sv} = this.props;
//         //const {level, name} = this.state;
//         if(sv.index !== ''){
//             this.setState({
//                 name: sv.name,
//                 level: sv.level
//             });
//         }
//     }
//     handleChange = (event) => {
//         const {name, value} = event.target;
//         this.setState(
//             {[name]: value}
//             );
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         const {name, level, dssv} = this.state;
//         const {handleSubmit} = this.props;
//         const sv = {
//             name: name,
//             level: level,
//         };
//         handleSubmit(sv);
//         this.setState({dssv: dssv})
//     }
//     render() {
//         const {level, name} = this.state;
//         return(
//           <div className={'Add'}>
//               <table>
//                   <tr>
//                       <td>
//                           <form onSubmit={this.handleSubmit}>
//                               <input  value={name} name={'name'} type={'text'} onChange={this.handleChange} placeholder={'Add item name'}/>
//                               <select value={level} name={'level'} onChange={this.handleChange}>
//                                   <option value={3}>High</option>
//                                   <option value={2}>Medium</option>
//                                   <option value={1}>Slow</option>
//                               </select>
//                               <button onSubmit={this.handleSubmit} type={'submit'} className={'Background'}>Submit</button>
//                           </form>
//                       </td>
//                   </tr>
//               </table>
//           </div>
//         );
//     }
// }
// export default Form
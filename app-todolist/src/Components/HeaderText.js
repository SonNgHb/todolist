import React from "react";
class HeaderText extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return(
          <div className={'Header'}>
              <h1>Danh sach sinh vien - ToDoList</h1>
          </div>
        );
    }
}
export default HeaderText
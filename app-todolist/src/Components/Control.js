import React from "react";
import Search from "./Search";
import SortBy from "./SortBy";
import PropTypes from 'prop-types';

class Control extends React.Component{

    render() {
        return(
          <div>
              <table>
                  <tbody>
                      <tr>
                          <td>
                              <Search />
                          </td>
                          <td>
                              <SortBy />
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        );
    }

}

Control.propTypes = {
    onClickSearch: PropTypes.func,
    onClickSort: PropTypes.func,
}
export default Control;
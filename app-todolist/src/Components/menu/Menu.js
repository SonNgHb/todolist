import React from 'react';
import {Link, Route} from "react-router-dom";

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
   <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
       const active = match ? 'active' : '';
       return (
           <li className={active}>
               <Link to={to} className={active}>
                   {label}
               </Link>
           </li>
       )
   }
   }/>
  )
};

class Menu extends React.Component{
  render() {
    return (
      <nav className={'active'}>
          <ul className={'active'}>
              <MenuLink label={'Home'} to={'/'} activeOnlyWhenExact={true} />
              <MenuLink label={'Form'} to={'/form'} activeOnlyWhenExact={false} />
              <MenuLink label={'List of Students'} to={'/list'} activeOnlyWhenExact={false} />
              {/*<MenuLink label={'Login'} to={'/login'} activeOnlyWhenExact={false} />*/}
          </ul>
      </nav>
    );
  }
}

export default Menu;

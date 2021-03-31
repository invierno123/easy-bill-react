import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.div`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0;

        .icon {
          width: 24px;
          height: 24px;
        }

        &.selected {
          color: lightblue;

          .icon {
            fill: lightblue;
          }
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink  exact activeClassName='selected' to="/tags">
            <Icon name='tag'/>标签页</NavLink>
        </li>

        <li>
          <NavLink activeClassName='selected' to="/money">
            <Icon name='money'/>记账页</NavLink>
        </li>

        <li>

          <NavLink activeClassName='selected' to="/statistics">
            <Icon name='statistics'/>统计页</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
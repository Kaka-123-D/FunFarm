import React, { Component } from 'react';
import Nav from '../../components/Nav';
import SidebarItem from '../../components/SidebarItem';
import Land from '../../components/Land';
import '../../styles/Farm.scss';


export default class Farm extends Component {
    render() {
        return (
          <div className="farm-background">
            <Nav />
            <div className="farm">
              <SidebarItem />
              <Land />
            </div>
          </div>
        );
    }
}

import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import SelectInterval from "./SelectInterval";

const HeaderComponent = () => (
    <div className='header'>
        <div className="row">
            <div className="col-md-3 title">
                <h5>COVID19</h5>
                <small>Tracking time by time</small>
            </div>
            <div className="col-md-1 all">
                <span>198.758</span>
                <small>CASES</small>
            </div>
            <div className="col-md-1 recovered">
                <span>80.758</span>
                <small>RECOVERED</small>
            </div>
            <div className="col-md-1 deaths">
                <span>8.740</span>
                <small>DEATHS</small>
            </div>
            <div className="col-md-2 offset-1">
                <Nav>
                    <NavItem>
                        <NavLink blank href="https://www.google.com/search?sxsrf=ALeKk00c4UideoKkG5TWmAWBmvlByLcUow:1584511691944&q=what+is+covid+19&spell=1&sa=X&ved=2ahUKEwi0pamErqPoAhVMIbkGHZaqByoQBSgAegQIEhAq&biw=1366&bih=635">
                            What is COVID 19?
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="col-md-3">
                <SelectInterval />
            </div>
        </div>
    </div>
);
export default HeaderComponent;
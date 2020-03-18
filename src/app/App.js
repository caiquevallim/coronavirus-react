import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment} from "./actions/counter/counterActions";
import HeaderComponent from "../components/HeaderComponent";
import LandingComponent from "../components/LandingComponent";

const App = ({ history }) => {

    return (
        <div>
            <HeaderComponent />
            <LandingComponent />
        </div>
    )
};

export default App;
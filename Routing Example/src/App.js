import { Card, CardContent, Divider, Grid } from '@material-ui/core';
import React,{useState} from 'react';
import { Headings } from './Support/Headings/Headings';
import { SimpleTextField } from './Support/TextFields/TextFields';
import {lightBorder} from './Theme/borders'
import {SimpleButton} from './Support/Buttons/Buttons'
import { SimpleLinks } from './Support/Link/Links';
import SinInForm from './Components/SinInForm';
import SinUpForm from './Components/SinUpForm'
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
function App(props) {
     
    return ( 
        <div>
            
            <Routes>
                <Route path='/books' element={<Navbar/>}/>
            </Routes>      
        </div>
    );
}


export default App;
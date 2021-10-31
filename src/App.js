import React from 'react';
import { Button, Link } from "@material-ui/core";
import { Person, InfoRounded,Info } from "@material-ui/icons";

import './App.css';

function App(){
    
    return(
        <div className="center">
        <div>    
        <h1>3brother`s Enterprise</h1>
        </div>
        <div>
            <Button
             variant="text"
             color="secondary" startIcon={<Person/>}/>
             <Button
             variant="text"
             color="secondary" startIcon={<InfoRounded/>}/>
             <Button
             variant="text"
             color="secondary" startIcon={<Person/>}/>
             <Button
             variant="text"
             color="secondary" startIcon={<Info/>}/>
        </div>
        </div>
    );
}
export default App;
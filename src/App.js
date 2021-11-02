import React from 'react';
import { Button, Link } from "@material-ui/core";
import { Person, InfoRounded,Info } from "@material-ui/icons";

import './App.css';

function App(){
    
    return(
        <div className="    center">
        <div>    
        <h1 color="primary">3brother`s Enterprise</h1>
        </div>
        <div>
            <Button className="button"
             variant="contained"
             color="primary" startIcon={<Person/>}/>
             <Button className="button"
             variant="outlined"
             color="primary" startIcon={<InfoRounded/>}/>
             <Button className="button"
             variant="outlined"
             color="primary" startIcon={<Person/>}/>
             <Button className="button"
             variant="outlined"
             color="primary" startIcon={<Info/>}/>
        </div>
        </div>
    );
}
export default App;
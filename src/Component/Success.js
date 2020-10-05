import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
 class  Success extends Component {
     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
     
        return (
            <MuiThemeProvider>
            <div>
                <AppBar title="success"/>
                <h1>thank You for Your Submission</h1>
                <p>You will get an email with further instruction</p>
            </div>
        </MuiThemeProvider>
        )
    }
}


export default Success

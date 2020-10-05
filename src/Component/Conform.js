import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
 class  Conform extends Component {
     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
       const {values:{firstName,lastName,occupation,email,bio,city}}=this.props;
        return (
            <MuiThemeProvider>
            <div>
                <AppBar title="Conform user Data"/>
                <List>
                    <ListItem
                    primaryText="First Name"
                    secondaryText={firstName}/>
                     <ListItem
                    primaryText="Last Name"
                    secondaryText={lastName}/>
                     <ListItem
                    primaryText="Email"
                    secondaryText={email}/>
                     <ListItem
                    primaryText="Occupation"
                    secondaryText={occupation}/>
                     <ListItem
                    primaryText="city"
                    secondaryText={city}/>
                     <ListItem
                    primaryText="Bio"
                    secondaryText={bio}/>
                </List>
                <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <RaisedButton 
                label="back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
            </div>
        </MuiThemeProvider>
        )
    }
}
const styles={
    button:{
        margin:15
    }
}

export default Conform

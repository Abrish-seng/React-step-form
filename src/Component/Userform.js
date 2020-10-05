import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail'
import FormPersonalDetail from './FormPersonalDetail'
import Conform from './Conform'
import Success from './Success'
 class Userform extends Component {
   state={
       step:1,
       firstName:'',
       lastName:'',
       email:'',
       occupation:'',
       city:'',
       bio:''
   }
   //proceed to the next step
   nextStep=()=>{
       const {step}= this.state
       this.setState({
           step:step + 1
       })
   }
   //go back to prev step
   prevStep=()=>{
    const {step}= this.state
    this.setState({
        step:step - 1
    })
}
//handle feilds change
handleChange=input=>e=>{
    this.setState({[input]:e.target.value})
}
    render() {
        const {step}=this.state
        const {firstName,lastName,email,occupation,city,bio}=this.state
        const values={firstName,lastName,email,occupation,city,bio}
        switch(step){
            case 1:
                return(
                    <FormUserDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
                case 2:
                    return(
                        <FormPersonalDetail
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    )
                    case 3:
                        return(
                            <Conform
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                            />
                        )
                        case 4:
                        return <Success/>
        }
    }
}

export default Userform

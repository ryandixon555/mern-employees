import React from 'react';
import Input from './Input';

const Form = (props)=>{
    return(
        <form onSubmit={props.handler}>
            <h4>{props.isEditForm ? "Editing" : "Add"}</h4>
            <div className="form-group">
            <Input name="firstName"
                    placeholder="Enter first name"
                    labelName="First name: "
                    handleChange = {props.handleChange}
                    value={props.employee.firstName}/>
            <Input name="lastName"
                    placeholder="Enter last name"
                    labelName="last name: "
                    handleChange = {props.handleChange}
                    value={props.employee.lastName}/>
            <Input name="job"
                    placeholder="job"
                    labelName="jon: "
                    handleChange = {props.handleChange}
                    value={props.employee.jon}/>
            <Input name="salary"
                    placeholder="salary"
                    labelName="salary: "
                    handleChange = {props.handleChange}
                    value={props.employee.salary}/>

           
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
           
        </form>
    )
}

export default Form;
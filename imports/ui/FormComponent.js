import React, { Component } from 'react';
import TitleBar from './TitleBar';
import { Data } from '../api/data';
import { Col, Button, FormGroup} from 'reactstrap';


export default class FormComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      agegroup: ' ',
      gender: ' ',
      delmode: ' ',
      name: ' ',
      suggestions: ' ',
      comfort: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

   handleSubmit(event){
     let name = event.target.name.value;
     let agegroup = event.target.agegroup.value;
     let gender = event.target.gender.value;
     let delmode = event.target.delmode.value;
     let suggestions = event.target.suggestions.value;
     let comfort = event.target.comfort.value;
     event.preventDefault();
     if(name){
      event.target.suggestions.value = '';
       event.target.name.value = '';
       Data.insert({agegroup, gender, delmode, name, suggestions, comfort});
       alert("Thank you for taking our survey. Your data has been submitted.");
      }
   }
    render() {
        return (
          <div>
          <TitleBar className="titlebar"/>
          <form className="form" onSubmit={this.handleSubmit}>
          <FormGroup tag="fieldset" className="form__element">
          <h2>Which Age Group Do You Fall Under?</h2><br/>
              <input type="radio" name="agegroup" onChange={this.handleInputChange} value='25' />{' '}
              Less Than 25<br/>
              <input type="radio" name="agegroup" onChange={this.handleInputChange} value='35'/>{' '}
              26-35<br/>
              <input type="radio" name="agegroup" onChange={this.handleInputChange} value='50'/>{' '}
              36-50<br/>
              <input type="radio" name="agegroup" onChange={this.handleInputChange} value='60'/>{' '}
              More Than 50<br/>
        </FormGroup>
        <FormGroup tag="fieldset" className="form__element">
          <h2>What is your gender?</h2><br/>
            <input type="radio" name="gender" value='m' onChange={this.handleInputChange} />{' '}
              Male<br/>
            <input type="radio" name="gender" value= 'f' onChange={this.handleInputChange} />{' '}
              Female<br/>
            <input type="radio" name="gender" value='d' onChange={this.handleInputChange} />{' '}
              Prefer Not To Say<br/>
            <input type="radio" name="gender" value='o' onChange={this.handleInputChange} />{' '}
              Other<br/>
            <input type="text" name="gender" placeholder="Please Specify" onChange={this.handleInputChange}/>{' '}
        </FormGroup>
        <FormGroup tag="fieldset" className="form__element">
          <h2>How Would You like your healthy life-style change care to be delivered?</h2><br/>
              <input type="radio" name="delmode" value='ma' onChange={this.handleInputChange} />{' '}
              Mobile App<br/>
              <input type="radio" name="delmode" value='pi' onChange={this.handleInputChange} />{' '}
              Personal instructor over a video call<br/>
              <input type="radio" name="delmode" value='pip' onChange={this.handleInputChange} />{' '}
              Personal instructor in person<br/>
              <input type="radio" name="delmode" value='vgs' onChange={this.handleInputChange} />{' '}
              Virtual Group Sessions<br/>
              <input type="radio" name="delmode" value='ipgs' onChange={this.handleInputChange}/>{' '}
              In-person group sessions<br/>
              <input type="radio" name="delmode" value='other' onChange={this.handleInputChange}/>{' '}
              Other <br/>
              <input type="text" name="delmode" placeholder="Please Specify" onChange={this.handleInputChange}/>{' '}
        </FormGroup>
        <FormGroup tag="fieldset" className="form__element">
          <h2>Your Name?</h2><br/>
              <input type="text" name="name" placeholder="Enter Your Name Here" onChange={this.handleInputChange} />{' '}
        </FormGroup>
        <FormGroup tag="fieldset" className="form__element">
          <h2>Anything else you want to specify?</h2><br/>
              <input type="text" name="suggestions" placeholder="Enter Your Suggestions" onChange={this.handleInputChange} />{' '}
        </FormGroup>
        <FormGroup tag="fieldset" className="form__element">
          <h2>How comfortable are you with sharing your fitness information (in social media or focus groups)?</h2><br/>
             <input type="radio" name="comfort" value='n' onChange={this.handleInputChange} />{' '}
              Not comfortable at all<br/>
             <input type="radio" name="comfort" value='s' onChange={this.handleInputChange}/>{' '}
              Open to sharing some of it<br/>
             <input type="radio" name="comfort" value='t' onChange={this.handleInputChange}/>{' '}
              Totally comfortable<br/>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 3 }}>
            <Button className="button">Submit</Button>
          </Col>
        </FormGroup>
       </form>
      </div>   
        );
    }
}
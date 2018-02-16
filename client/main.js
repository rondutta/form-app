import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import FormComponent from '../imports/ui/FormComponent';
import {Tracker} from 'meteor/tracker';
Meteor.startup(() => {
  Tracker.autorun(()=>{
    ReactDOM.render(<FormComponent/>,document.getElementById("app"));
  })
});

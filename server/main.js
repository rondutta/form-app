import { Meteor } from 'meteor/meteor';
import {Data} from '../imports/api/data';

Meteor.startup(() => {
if (Meteor.isServer){
    console.log("Welcome to Node Server");
 }
});

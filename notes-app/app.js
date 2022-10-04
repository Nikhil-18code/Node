const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const notes=require('./notes')

//Creating add command
yargs.command({
    command:'add',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'    
        }
    },
    handler(){
        notes.addNote(argv.title,argv.body)
        // console.log('Note: '+argv.title);
        // console.log('Body: '+argv.body);
    }
})
//Creating remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Remove note',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.removeNote(argv.title);
        // console.log('Removing a note');
    }
})
//Creating list command
yargs.command({
    command:'list',
    describe:'list note',
    handler(){
        // console.log('Listing the notes');
        notes.listNote();
    }
})
//Creating read command
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:'Read Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.readNote(argv.title);
    }
})
yargs.parse();
// Read 
// console.log(chalk.green.underline.bold('Success'));
// console.log(chalk.level);
//User input 
// const arr=process.argv;
// console.log(arr);
// const nums=yargs.argv;
// console.log(nums);
// if(arr==='add'){
//     console.log('Notes added');
// }
// console.log(arr[2]);

// const notes=require('./notes');
// const validator=require('validator');
// const message=notes();
// console.log(message);
// console.log(validator.isEmail('nikhil1987@gmail.com'));
// console.log(validator.isURL('https/www.npmjscom/packagevalidator'));

// This function is used to used the required modules 
// const fs=require('fs');

// require('./utils');
// fs.writeFileSync('notes.txt','This is created by App.js by Nikhil');
// fs.appendFileSync('notes.txt',' Appended words');
// console.log('Node js');
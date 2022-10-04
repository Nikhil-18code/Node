const chalk = require('chalk');
const request=require('request');
const forecast=require('./utils/forecast')
const geocode = require('./utils/geocode');

const address=process.argv[2];
if(!address){
    console.log(chalk.magenta.bold('Enter place name first...'));
}
else{
    geocode(address,(error,data)=>{
        if(data!=undefined){
            console.log(data);
            forecast(data.latitude,data.longitude,(error,forecastdata)=>{
                console.log(forecastdata);
            })
        }
        else{
            console.log(chalk.red.underline.bold(error));
        }
    })
}
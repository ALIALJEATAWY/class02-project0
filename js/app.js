'use strict';

var username = prompt('What is your name?');
console.log('userName value', username);

var age = prompt('What is your age?');
console.log('age', age);

var intersets = prompt('What is your interests');
console.log('intersets', intersets);

alert(' hi ' + username + ' your age ' + age + ' you interest in ' + intersets + ' welcome to my web site ')

 1////////////////////////////////////
var license = prompt('do you have a driving license?');

var testlicense = 'yes';
var score = score+1;
var yes = 'y'
var y = 'yes'
var no = 'n'
var n = 'no'

while (license === null || license === undefined || license === '') {
  alert('please answer');
    license = prompt('do you have a driving license?');
// console.log(license)
}

while (license.toLowerCase() !== yes && license.toLowerCase() !== no && license.toLowerCase() !== y && license.toLowerCase() !== n)
{
    alert('please answer');
      license = prompt('do you have a driving license?');
  // console.log(license)
  }

if (license.toLowerCase() === testlicense || license.toLowerCase() === "y" )  {
    // console.log(license === testlicense || license.toLowerCase() === testlicense);
    alert('very, good, you must have a driving license');
    score=score+1;
    
   
}

else if (license.toLowerCase() === "no" || license.toLowerCase() === "n"){
    alert('sorry, you cant rent a car without a driving license');
// console.log(license)
}

2//////////////////////////////

var typelicense = prompt('do you have an automatic driving license?');

var autolicense = 'yes';

while (typelicense === null || typelicense === undefined || typelicense === '') {
  alert('please answer');
    typelicense = prompt('do you have a driving license?');
// console.log(typelicense)
}

while (typelicense.toLowerCase() !== yes && typelicense.toLowerCase() !== no && typelicense.toLowerCase() !== y && typelicense.toLowerCase() !== n)
{
    alert('please answer');
      typelicense = prompt('do you have a driving license?');
  // console.log(typelicense)
  }

if (typelicense.toLowerCase() === autolicense || typelicense.toLowerCase() === "y" )  {
    // console.log(typelicense === autolicense || typelicense.toLowerCase() === autolicense);
  
    alert('Amazing, you can choose any car');
    score=score+1;
    
}

else if (typelicense.toLowerCase() === "no" || typelicense.toLowerCase() === "n"){
    alert('we are sorry we only have automatic cars');
// console.log(typelicense)
}

3/////////////////////////////////////////////////////////

var modern = prompt('do you prefer modern cars over old cars?');

var moderncar = 'yes';

while (modern === null || modern === undefined || modern === '') {
  alert('please answer');
    modern = prompt('do you prefer modern cars over old cars?');
// console.log(modern)
}

while (modern.toLowerCase() !== yes && modern.toLowerCase() !== no && modern.toLowerCase() !== y && modern.toLowerCase() !== n)
{
    alert('please answer');
      modern = prompt('do you prefer modern cars over old cars?');
  // console.log(modern)
  }


if (modern.toLowerCase() === moderncar || modern.toLowerCase() === "y" )  {
    // console.log(modern === moderncar || modern.toLowerCase() === moderncar);
    alert('Thats great, we have a modern cars');
    
}

else if (modern.toLowerCase() === "no" || modern.toLowerCase() === "n"){
    alert('we apologize, all old cars are rented at the moment');
// console.log(modern)
}


4////////////////////////////////////////////////////////////////////

var con = prompt('do you know the conditions of renting a car?');

var conrent = 'yes';

while (con === null || con === undefined || con === '') {
  alert('please answer');
    con = prompt('do you prefer modern cars over old cars?');
// console.log(con)
}

while (con.toLowerCase() !== yes && con.toLowerCase() !== no && con.toLowerCase() !== y && con.toLowerCase() !== n)
{
    alert('please answer');
      con = prompt('do you prefer modern cars over old cars?');
  // console.log(con)
  }


if (con.toLowerCase() === conrent || con.toLowerCase() === "y" )  {
    // console.log(con === conrent || con.toLowerCase() === conrent);
    alert('Great jop, you know your thing');
    
}

else if (con.toLowerCase() === "no" || con.toLowerCase() === "n"){
    alert('please read the terms and conditions');
// console.log(con)
}


5//////////////////////////////////////////////////////

var service = prompt('do you know the conditions of renting a car?');

var servicerent = 'yes';

while (service === null || service === undefined || service === '') {
  alert('please answer');
    service = prompt('do you benefit from our services before?');
// console.log(service)
}

while (service.toLowerCase() !== yes && service.toLowerCase() !== no && service.toLowerCase() !== y && service.toLowerCase() !== n)
{
    alert('please answer');
      service = prompt('do you prefer modern cars over old cars?');
  // console.log(service)
  }


if (service.toLowerCase() === servicerent || service.toLowerCase() === "y" )  {
    // console.log(service === servicerent || service.toLowerCase() === servicerent);
    alert('Welcom back, check our new services');
 
}

else if (service.toLowerCase() === "no" || service.toLowerCase() === "n"){
    alert('Welcome , to our website');
// console.log(service)
}

6 //////////////////////////////////////////////////////////////

var game = 12;
var gamenumber = prompt('try a number from 2 to 20 you have 4 try')

var i;
for (i = 1; i <= 4; i++) {
  console.log(gamenumber);
  if (gamenumber == game) {
    alert('Right its' + game)
    console.log('true');
    break;
  }
  else if (gamenumber > game) {
    alert('sorry that is too hight you try ' + i + ' time')
    
    console.log('false');
  }
  else if (gamenumber < game) {
    alert('sorry that is too low you try ' + i + ' time')
    console.log('false');
  }
 gamenumber = prompt('try another time a number from 2 to 20 you have' + i + 'try')
 
if(gamenumber == game){
  alert('correct')
  
  break;
}
 if(i==3){
  alert('sorry, The answer is ' + game);
  break; 
}
}

// 7 ////////////////////////////////////////////////////////


var myfavcar=0;
var mycar=['toyota','mazda','honda','porsche','tesla','nissan','kia'];
var car=false;
for(i=0; i<7; i++){
myfavcar=prompt('gusse my seven favorite cars?');
for(var a = 0; a < mycar.length; a++){
  if(myfavcar===mycar[a]){
    
alert('that is correct');

car=true;


break;

  }

  // else if(myfavcar!==mycar[a]){
  //   alert('try again');
  //   break;
  // }

}

}

alert(' the answers is '+ mycar );

alert(' your score is ' + score);





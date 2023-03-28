/**
* @file: 05-the-even-odd-reporter.js
* @author: Alvise Spadea
* Exercise on the flow of javascript
*
*  Uses a for loop to multiply a numer by 9 
* 
*/
for (let i = 0; i <= 10; i++) {
    let r = i*9;
    console.log(i+"*9= "+r);
}

//nested loop
for (let i= 1; i<=10; i++) {
    for(i2=0;i2<10;i2++){
        let r = i2 * i;
        console.log(i2+'*'+i+'='+r);
    }  
}
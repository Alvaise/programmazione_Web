for(let i=0;i<10;i++){
    let t = i;
    console.log('inside i= ', i);
    console.log('inside t= ', i);

}
console.log('outside i = ',i);
console.log('outside t = ',t);
for(var i=0;i<10;i++){
    var t = i;
    console.log('inside i= ', i);
    console.log('inside t= ', i);

}
console.log('outside i = ',i);
console.log('outside t = ',t);
The slice() method return a new array with containing a portion of that array, it does not modify the original array.
This is a code example:
    
    let a = [1,2,3,4,5];
    console.log(a);
    #[ 1, 2, 3, 4, 5 ]

Then I apply the slice method:
    
    console.log(a.slice(3));
    #[ 4, 5 ]

The Output is a new array with only a portion of the array a.
To prove my point I reprint the a array a this is the output:
    
    console.log(a);
    #[ 1, 2, 3, 4, 5 ]

The splice Method is instead used to modify the current array, and return the removed element as a new array.
Let's take the a array that we used before:
    
    let a = [1,2,3,4,5];
    console.log(a);
    #[ 1, 2, 3, 4, 5 ]
    console.log(a.splice(3,2));
    #[ 4, 5 ]
    console.log(a);
    #[ 1, 2, 3 ]

As we can see now the a array only has the 1,2,3 element with the 4 and 5 in a new array.
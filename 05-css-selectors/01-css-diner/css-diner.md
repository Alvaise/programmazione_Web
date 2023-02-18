Level 1
plate{ Element Selector
    Select all the plate elements.
} 
Level 2
bento{ Element Selector
    Select all the bento elements.
}
Level 3
#fancy{ ID Selector
    Select the element with id=fancy.
}
Level 4
plate apple{ Descendant Selector
    Selects all the apple element that reside anywhere within the plate element.
}
plate > apple{ Direct Child Selector
    Select all the apple element that are direct child of a plate element, that means that the apple element reside immediately inside the plate element.
}
Level 5
#fancy pickle{ ID Selector + Descendant Selector
    Select all the pickle element that reside within an element with the id=fancy.
}
Level 6
.small{ Class Selector
    Select all the element with the class attribute small
}
Level 7
orange.small{
    Select all the orange element with the class attribute small.
}
bento orange, plate orange.small{

}
Level 8
bento orange.small{
    Select all the orange with the class attribute of small inside the bento element
}
Level 9
plate,bento{ Comma selector
    Select all the plate and bento elements, the comma means that plate and bento are not in a relationship.
}
Level 10
*{ Universal Selector
    Select all the things, never use except for very specific case.
}
.table, apple, plate, orange, bento{

}
Level 11
plate *{
    Select all the element inside plate
}
Level 12
plate + apple{ Adjacent Sibling Selector
    Select the element apple that directly follow the plate element
}
Level 13
bento ~ pickle{ General Sibling Selector
    Select all the pickle element that follow the bento element
}
Level 14
plate > apple{ Child Selector
    Select the apple element that are direct child of the plate element, a child element is an element directly nested into another.
}
Level 15
plate orange:first-child{ First Child Pseudo-selector
    Select only the  first child element directly nested into the parent element plate.
}
Level 16
plate :only-child{ Only Child Pseudo-selector
    Select any element that is the only element inside of another one
}
Level 17
apple.small,pickle.small{

}
plate apple:last-child, plate + pickle{

}
Level 18
 plate:nth-child(3){ Nth Child Pseudo-selector
    Select the third plate element.
}
plate:nth-last-child(2){

}
Level 19
bento:nth-last-child(2){

}
Level 20
apple:first-of-type{
    Select the first element of type apple
}
Level 21
plate:nth-of-type(even){
    Select an element based on its type and order, so all the type plate that are even in order.
}
Level 22
plate:nth-of-type(2n+3){

}
Level 23
plate apple.small:only-of-type{

}
Level 24
orange:last-of-type,apple:last-of-type{

}
Level 25
bento:empty{

}
Level 26
apple:not(.small){ Negation Pseudo-class
    Select the apple element that don't have the class attribute small
}
Level 27
[for]{ attribute selector
    Select all element that have the for attribute
}
Level 28
plate[for]{

}
Level 29
[for="Vitaly"]{

}
Level 30
[for^="Sa"]{

}
Level 31
[for$="ato"]{

}
Level 32
[for*="ob"]{

}
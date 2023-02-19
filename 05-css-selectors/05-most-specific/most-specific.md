ul li {} 0-0-2 Just element selector
ul > li {} 0-0-2 Again element selector, the combinator don't count to the weight
body > #main.mobile a:hover {} 1-2-2 An ID selector plus class and pseudo-class and a element selector
div p > span {} 0-0-3 Again just element selector
.users .name {} 0-2-0 two classes
[href$='.pdf'] {} 0-1-0 
:hover {} 0-1-0 pseudo-class selector
div .name {} 0-1-1 element selector and class selector
a[href$='.pdf'] {} 0-1-1 pseudo class selector plus an element selector
.pictures img:hover {} 0-2-1  class selector plus pseudo-classe and an element selector 
.news.breaking.featured {} 0-3-0 three class selector
.user #name {} 1-1-0 ID selector plus a class selector
#name span {} 1-0-1 ID selector plus an element selector
nav#nav > li:hover {} 1-1-2 Id selector plus pseudo-class and two element selector
li:nth-child(2n+1):hover {} 0-2-1 two pseudo class and one element selector
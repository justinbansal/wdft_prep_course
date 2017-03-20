/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for (i=1;i<101;i++){
    console.log(i)
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

// My first attempt the day I learned about for loops and arrays
var signs=["#","##"];

for (i="#";i<signs.length;i++){
    console.log(signs[i]);
}

// My second attempt the day after I had learned about while and do while loops
var triangle = ["#","##","###","####","#####","######","#######"]
for (var i=0;i<triangle.length;i++) {
     console.log[i];
    }
    
// Got it!
var triangle = ["#","##","###","####","#####","######","#######"];
for (var i=0;i<triangle.length;i++) {
     console.log(triangle[i])
     }
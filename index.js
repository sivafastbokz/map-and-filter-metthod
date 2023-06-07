// filter()
// The filter() method creates an array filled with all array elements that pass a test implemented by the provided function. 
//The filter method is well suited for particular instances where the user must identify 
//certain items in an array that share a common characteristic. 

var playersArr = [
    {name: 'Jason', footedness: 'left', position: 'forward'},
    {name: 'Blake', footedness: 'right', position: 'defense'},
    {name: 'Philip', footedness: 'right', position: 'goalie'},
    {name: 'Logan', footedness: 'left', position: 'defense'},
    {name: 'Will', footedness: 'right', position: 'forward'}
];

const rightfoot=playersArr.filter(right=>right.footedness === 'right' ).map(function(playersArr){
    return playersArr.name
})
console.log('right footplayer are '+ rightfoot)

// map()
// The map() method creates a new array with the results of calling a function for every array element. 
//The map method allows items in an array to be manipulated to the user’s preference, 
//returning the conclusion of the chosen manipulation in an entirely new array. 

var agesArr = [25, 36, 49, 64, 81];
function age(){
    var ages=agesArr.map(Math.sqrt)
    console.log(ages)
}
age();

//The filter method doesn't do the same as the map method. 
//The map method is used to convert each item of an array, 
//while the filter method is used to select certain items of an array.

var a =[1,2,3,4,5]
b=a.map(function(x){return x*x})
console.log(b)

c=a.filter(function(x) {return x<3})
console.log(c)
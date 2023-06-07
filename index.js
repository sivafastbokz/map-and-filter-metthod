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
// console.log('right footplayer are '+ rightfoot)

// map()
// The map() method creates a new array with the results of calling a function for every array element. 
//The map method allows items in an array to be manipulated to the user’s preference, 
//returning the conclusion of the chosen manipulation in an entirely new array. 

var agesArr = [25, 36, 49, 64, 81];
function age(){
    var ages=agesArr.map(Math.sqrt)
    // console.log(ages)
}
age();

//The filter method doesn't do the same as the map method. 
//The map method is used to convert each item of an array, 
//while the filter method is used to select certain items of an array.

var a =[1,2,3,4,5]
b=a.map(function(x){return x*x})

c=a.filter(function(x) {return x<3})


let datas = [1,2,3,4,5,6]


bi=datas.map(function(x){
    if( x<3){
    return x
    }
})

// console.log(bi)


ci=datas.filter(function(x) {return x<3})
// console.log(ci)


const list =[
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":{"batter":[
                      { "id": "1001", "type": "Regular" },
                      { "id": "1002", "type": "Chocolate" },
                      { "id": "1003", "type": "Blueberry" },
                      { "id": "1004", "type": "Devil's Food" }
                  ]
          },"topping":[
              { "id": "5001", "type": "None" },
              { "id": "5002", "type": "Glazed" },
              { "id": "5005", "type": "Sugar" },
              { "id": "5007", "type": "Powdered Sugar" },
              { "id": "5006", "type": "Chocolate with Sprinkles" },
              { "id": "5003", "type": "Chocolate" },
              { "id": "5004", "type": "Maple" }
          ]
  }]

  console.log(list[0].batters.batter[3].type,'siva')
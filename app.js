//1.
// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function doubleValues(array){
    let doubledArray=[]
    array.forEach(function(val){
        doubledArray.push(val * 2)
    })
return doubledArray
}

//2. onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(array){
    let evenValues=[]
    array.forEach(function(val){
        if (val%2===0){
            evenValues.push(val)
        }
    })
    return evenValues
}

//3. showFirstAndLast

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(array){
    let firstLastArray=[]
    array.forEach(function(val){
        firstLastArray.push(val[0] + val[val.length-1])
    })
    return firstLastArray
}


//4. addKeyAndValue 
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }
  
//5 vowel count

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  

//map

//6. doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]


function doubleValuesWithMap(array){
   return array.map(function(val){
       return val*2
    })
}

//7.valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]

function valTimesIndex(array){
    return array.map(function(val, index){
       return val*index
    })
}

//8. extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )
//   // ['Elie', 'Tim', Matt', 'Colt']

function extractKey(array,key){
    return array.map(function(val){
        return val[key]
    })
}

//9. 

// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

function extractFullName(ObjArray){
    return ObjArray.map(function(val){
        return val.first + '' + val.last
    })

}

const testObj= [
    {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia"},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele"}
    ]

//10. Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

// filterByValue(
//     [
//       {first: 'Elie', last:"Schoppik"},
//       {first: 'Tim', last:"Garcia", isCatOwner: true},
//       {first: 'Matt', last:"Lane"},
//       {first: 'Colt', last:"Steele", isCatOwner: true}
//     ],
//     'isCatOwner'
//     )   
    /*
      [
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    */
    
      function filterByValue (ObjArray, key){
        return ObjArray.filter (function(val){
            return val.key
        })
      }




//11.
//find
//Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find (array, value){
    return array.filter(function (val){
        return val===value
    })
}

//12.findInObj
//Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
// find([1,2,3,4,5], 3) // 3
// find([1,2,3,4,5], 10) // undefined
// findInObj

function findInObj (ObjArray,key,value){

}


//13 removeVowels

//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

//removeVowels('Elie') // ('l')
//removeVowels('TIM') // ('tm')
//removeVowels('ZZZZZZ') // ('zzzzzz')

function removeVowels(string){
    let vowels='aeiou'
    return string.toLowerCase().split('').filter(function(val){
        return vowels.indexOf(val) ===-1
    })
   .join('')
}


//14 /doubleOddNumbers
//Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

//doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
//doubleOddNumbers([4,4,4,4,4]) // []

function doubleOddNumbers(array){
  return array.filter(function(val){ //why does filter need 2 return values 
       return val%2 !==0
    })
    .map(function(val){
       return val*2
    })

}
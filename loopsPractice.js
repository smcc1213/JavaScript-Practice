// Write your code below
let bobsFollowers = ['Sharon', 'Karen', 'Steve', 'Stanley'];

let tinasFollowers = ['Karen', 'Steve', 'Bri'];

let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < tinasFollowers.length; j++) {
   if (bobsFollowers[i] === tinasFollowers[j]) { mutualFollowers.push(tinasFollowers[j]);
      }
    }
  };

  console.log(mutualFollowers);




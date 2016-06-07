'use strict';
let slaying = true;
let youHit = Math.floor(Math.random() * 2);
let damageThisRound = Math.floor(Math.random() * 5 + 1);
let totalDamage = 0;
while (slaying) {
  if (youHit) {
    totalDamage += damageThisRound;
    if (totalDamage >= 4) {
      console.log('You win');
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
    console.log('You hit!');
  } else {
    console.log('You miss');
  }
  slaying = false;
}

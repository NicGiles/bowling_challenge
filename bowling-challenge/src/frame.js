function Frame(rolls = []) {
  this.rolls = rolls ;
}

Frame.prototype.roll = function(pins){
  this.rolls.push(pins);
}

Frame.prototype.getScore = function(){
  return this.rolls.reduce((a, b) => a + b, 0);
}


Frame.prototype.frameover = function(){
  return this.rolls.length >= 2
}

Frame.prototype.strike = function(){
return this.rolls[0] === 10
}

Frame.prototype.spare = function(){
return this.rolls[0] + this.rolls[1] === 10
}

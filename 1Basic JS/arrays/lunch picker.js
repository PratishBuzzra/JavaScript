const lunches = [];
function addLunchToEnd(str){
  lunches.push(str)
  return `${str} added to the end of the lunch menu.`;
}
function addLunchToStart(str){
  lunches.unshift(str)
  return `${str} added to the start of the lunch menu.`;
}
function removeLastLunch(){
  if(lunches.length !== 0){
    
  return `${lunches.pop()} removed from the end of the lunch menu.`;
}else{
  return "No lunches to remove.";
}
}
function removeFirstLunch(){
  if(lunches.length !== 0){
  return `${lunches.shift()} removed from the start of the lunch menu.`;
}else{
  return "No lunches to remove.";
}
}
function getRandomLunch(){
  if(lunches.length !== 0){
  return `Randomly selected lunch: ${lunches[Math.floor(Math.random() * lunches.length)]}`;
}else{
  return "No lunches available.";
}
}
function showLunchMenu(){
  if(lunches.length !== 0){
  return `Menu items: ${lunches.join(',')}`;
}else{
  return "The menu is empty.";
}
}
console.log(addLunchToStart('Momo, chowmein'));

console.log(addLunchToStart('fish'));
console.log(addLunchToEnd('Tacoes, chicken'));
console.log(addLunchToEnd('corns, Green'));
console.log(removeLastLunch());
console.log(removeFirstLunch());
console.log(getRandomLunch());
console.log(showLunchMenu());
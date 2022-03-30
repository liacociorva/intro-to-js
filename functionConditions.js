function dinner(num){
  if (num == 1){
    return "appetizer";
  }
  else if (num == 2){
    return "entree";
  }
  else if (num == 3){
    return "dessert";
  }
  else {
    return "There are only 3 courses!";
  }
}

console.log(dinner(1));

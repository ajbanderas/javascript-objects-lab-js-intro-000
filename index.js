var recipes = {eggs: '3'}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({},object,{[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
}
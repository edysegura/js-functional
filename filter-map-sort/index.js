const collection = [
  {name:"Lidy", gender:"female"},
  {name:"", gender:"unknown"},
  {name:"Guto", gender:"male"},
  {name:"Daniel", gender:"male"},
  {name:"", gender:"unknown"},
  {name:"Edy", gender:"male"},
  {name:"Udit", gender:"male"},
  {name:"Scott", gender:"male"},
  {name:"", gender:"unknown"},
  {name:"", gender:"unknown"},
  {name:"Colin", gender:"male"},
  {name:"Luciano", gender:"male"}
];

const orderedNames = collection
                    .filter(hasName)
                    .map(onlyName)
                    .sort();

console.log(orderedNames);

function hasName(item) {
  return !!item.name; //it outputs a boolean
}

function onlyName(item) {
  return item.name;
}

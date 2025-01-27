let inventory = [];
function findProductIndex(productName){
productName = productName.toLowerCase();
  for(let i = 0; i<inventory.length; i++){
  if(inventory[i].name === productName){
    return i;
  }
  }
  return -1;
}

function addProduct(products){
  products.name = products.name.toLowerCase();
  const index = findProductIndex(products.name);
  if(index !== -1){
    inventory[index].quantity += products.quantity;
    console.log(`${products.name} quantity updated`);
  }
  else{
    inventory.push(products);
    console.log(`${products.name} added to inventory`);
  }
}

function removeProduct(productsName, quantity){
  productsName = productsName.toLowerCase();
  const index = findProductIndex(productsName);
  if(index === -1){
      console.log(`${productsName} not found`);
      return;
    }
  if(inventory[index].name === productsName){
    if((inventory[index].quantity > quantity)){
    inventory[index].quantity -= quantity;
    console.log(`Remaining ${productsName} pieces: ${inventory[index].quantity}`);
    }else if(inventory[index].quantity === quantity){
      inventory.splice(index, 1); 
      console.log(`${productsName} removed from inventory`); 
    }
    else if(inventory[index].quantity < quantity){
      console.log(`Not enough ${productsName} available, remaining pieces: ${inventory[index].quantity}`)
    }
    }
  }
  
  
addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "egg", quantity: 10});
addProduct({name: "FLOUR", quantity: 15});
addProduct({name: "apple", quantity: 10});
removeProduct("hello", 20)
console.log(inventory);

removeProduct("flour", 20);
removeProduct("egg", 10);
console.log("final inventory:", inventory);
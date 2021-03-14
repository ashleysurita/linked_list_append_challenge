function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  if(!listA && !listB){
    return null
  }
  if(!listA){
    return listB
  }
  if(!listB){
    return listA
  }
  let current = listA
  console.log('list a', current.next)
  
  while(current.next){
    current = current.next
  }
  current.next = listB
  
  return listA
}

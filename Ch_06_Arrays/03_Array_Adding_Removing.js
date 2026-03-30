let arr = [1, 2, 3];
console.log(arr);

//Add to end
arr.push(4);
console.log(arr);


//Remove from end
arr.pop();
console.log(arr);


//Add to beginning
arr.unshift(0);
console.log(arr);

//Remove from beginning
arr.shift();
console.log(arr);

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1); // removes 1 item at index 2
console.log(arr);//[1,2]

arr.splice(2, 0, 99);//add 99 at index 2 and 0 means no number should be deleted
console.log(arr);//[1,2,99]

arr.splice(1, 2, 10, 20);//start at index 1 delete 2 item and add 10,20
console.log(arr);//[1,10,20]
// Array Spreading
const arr1 = [1, 3,  5];
const arr2 = arr1;
arr2.push(50); // উপরের দুটোতেই Push হয়ে যাবে।

// সমাধান-1:
const arr1 = [1, 3,  5];
const arr2 = [...arr1];
arr2.push(50);

// সমাধান:-2
const arr2 = []
for(let item of arr1){
arr2.push(item);
}
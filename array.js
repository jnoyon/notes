// Array Spreading
const problem = () => {
    const arr1 = [1, 3,  5];
    const arr2 = arr1;
    arr2.push(50); // উপরের দুটোতেই Push হয়ে যাবে।
    // console.log(arr1, arr2): [ 1, 3, 5, 50 ] [ 1, 3, 5, 50 ]
}

const solution = () => {
    // সমাধান-1:
    const arr1 = [1, 3,  5];
    const arr2 = [...arr1];
    arr2.push(50);
    // console.log(arr1, arr2): [ 1, 3, 5 ] [ 1, 3, 5, 50 ]
}


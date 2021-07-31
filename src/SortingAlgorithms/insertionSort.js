const SORT_SPEED = 3;

export function getInsertionSort(array) {
    // console.log(array);
    const animations = getInsertionSortAnimations(array);
    // console.log(array);
    // console.log(animations);

    for (let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        const [k, bar] = animations[i];
        if (k === 0){
            // color key
            setTimeout(() => {
                arrayBars[bar].style.backgroundColor = 'red';
            }, i * SORT_SPEED);
        } else if (k === 1){
            // uncolor key
            setTimeout(() => {
                arrayBars[bar].style.backgroundColor = 'grey';
            }, i * SORT_SPEED);
        } else if (k === 2){
            // color comparision with key
            setTimeout(() => {
                arrayBars[bar].style.backgroundColor = 'yellow';
            }, i * SORT_SPEED);
        } else if (k === 3){
            // color swap
            setTimeout(() => {
                arrayBars[bar].style.backgroundColor = 'blue';
                arrayBars[bar+1].style.backgroundColor = 'blue';
            }, i * SORT_SPEED);
        } else if (k === 4){
            // swap height
            setTimeout(() => {
                [arrayBars[bar].style.height, arrayBars[bar+1].style.height] = [arrayBars[bar+1].style.height, arrayBars[bar].style.height];
                arrayBars[bar].style.backgroundColor = 'blue';
                arrayBars[bar+1].style.backgroundColor = 'blue';
            }, i * SORT_SPEED);
        } else if (k === 5){
            // color swap
            setTimeout(() => {
                arrayBars[bar].style.backgroundColor = 'grey';
                arrayBars[bar+1].style.backgroundColor = 'grey';
            }, i * SORT_SPEED);
        }
    }
    return;
}

function getInsertionSortAnimations(array){
    const animations = [];
    insertionSort(array, 0, array.length-1, animations);
    return animations;
}

function insertionSort(
    array,
    lo,
    hi,
    animations,
) {
    let i, j, key;
    for (i = 1; i <= hi; i++){
        key = array[i];
        animations.push([0, i]) // color key
        j = i-1;
        while (j >= 0 && array[j] > key){
            array[j+1] = array[j];
            animations.push([2, j]); // color comparision
            animations.push([3, j]); // color swap
            animations.push([4, j]); // swap height
            animations.push([5, j]); // uncolor swap
            animations.push([0, i]); // color key
            j--;
        }
        array[j+1] = key;
        // color element and key swap
        animations.push([1, i]); // uncolor key
    }
}

// select key
// find all elements greater than key
// move them to the right
// move key to the appropriate place
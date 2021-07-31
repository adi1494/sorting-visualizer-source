const SORT_SPEED = 3;

export function getBubbleSort(array) {
    const animations = getBubbleSortAnimations(array);
    // console.log(this.state.array);
    // console.log(animations);

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [k, idx] = animations[i];
        const bar1 = arrayBars[idx].style;
        const bar2 = arrayBars[idx + 1].style;

        if (k === 0) {
            // comparision color
            setTimeout(() => {
                bar1.backgroundColor = 'yellow';
                bar2.backgroundColor = 'yellow';
            }, i * SORT_SPEED);
        } else if (k === 1) {
            // recolor
            setTimeout(() => {
                bar1.backgroundColor = 'grey';
                bar2.backgroundColor = 'grey';
            }, i * SORT_SPEED);
        } else if (k === 2) {
            // swap color
            setTimeout(() => {
                bar1.backgroundColor = 'blue';
                bar2.backgroundColor = 'blue';
            }, i * SORT_SPEED);
        } else if (k === 3) {
            // swap heights
            setTimeout(() => {
                [bar1.height, bar2.height] = [bar2.height, bar1.height];
            }, i * SORT_SPEED);
        } else if (k === 4) {
            // swap recolor
            setTimeout(() => {
                bar1.backgroundColor = 'grey';
                bar2.backgroundColor = 'grey';
            }, i * SORT_SPEED);
        }
    }
    return;
}

function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(
    array,
    animations,
) {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        let j = 0;
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] <= array[j + 1]) {
                // comparision coloring
                animations.push([0, j]); // color
                animations.push([1, j]); // recolor
            } else {
                animations.push([0, j]); // color
                animations.push([2, j]); // swap color
                animations.push([3, j]); // swap action
                animations.push([4, j]); // swap recolor
                animations.push([1, j]); // recolor
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

// Clement's Method
// function bubbleSortHelper (mainArray, animations){
//     const n = mainArray.length;

//     let sorted = false;
//     while (!sorted){
//         sorted = true;
//         // let max = n-2;
//         for (let i = 0; i < n-1; i++){
//             // console.log(mainArray[i], mainArray[i+1]);
//             if(mainArray[i] > mainArray[i+1]){
//                 sorted = false;
//                 animations.push([i, i+1]);
//                 animations.push([i, i+1]);
//                 animations.push([i, mainArray[i], i+1, mainArray[i+1]]);
//                 const temp = mainArray[i];
//                 mainArray[i] = mainArray[i+1];
//                 mainArray[i+1] = temp;
//                 // console.log(mainArray[i], mainArray[i+1], temp);
//             }
//         }
//     }
// }
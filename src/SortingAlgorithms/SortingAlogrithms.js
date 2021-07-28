// export const mergeSort = array => {
//     if (array.length === 1) return array;
//     const mid = Math.floor(array.length / 2);
//     const left = mergeSort(array.slice(0,mid));
//     const right = mergeSort(array.slice(mid));
    
//     const sortedArray = [];
//     let i = 0, j = 0;
//     while (i < left.length && j < right.length){
//         if (left[i] < right[j]){
//             sortedArray.push(left[i++]);
//         } else {
//             sortedArray.push(right[j++]);
//         }
//     }

//     while (i < left.length) sortedArray.push(left[i++]);
//     while (j < right.length) sortedArray.push(right[j++]);

//     return sortedArray;
// }

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper (
    mainArray,
    lo,
    hi,
    auxiliaryArray,
    animations,
) {
    if (lo === hi) return;
    const mid = Math.floor((lo + hi)/2);
    mergeSortHelper(auxiliaryArray, lo, mid, mainArray, animations);
    mergeSortHelper(auxiliaryArray, mid+1, hi, mainArray, animations);
    doMerge(mainArray, lo, mid, hi, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    lo,
    mid,
    hi,
    auxiliaryArray,
    animations,
) {
    // let n1 = mid+1-lo, n2 = hi-mid;
    // const leftarr = [];
    // const rightarr = [];
    // for (let i = 0; i < n1; i++) {
    //     leftarr.push(mainArray[i]);
    // }
    // for (let i = 0; i < n1; i++) {
    //     rightarr.push(mainArray[mid+1+j]);
    // }

    // let i = 0, j = mid+1, k = lo;
    // while (i < n1 && j < n2){
    //     if (leftarr[i] <= rightarr[j]){
    //         mainArray[k++] = leftarr[i++];
    //     } else {
    //         mainArray[k++] = rightarr[j++];
    //     }
    // }
    // while (i < n1){
    //     mainArray[k++] = leftarr[i++];
    // }
    // while (j < n2){
    //     mainArray[k++] = rightarr[j++];
    // }

    let i = lo, j = mid+1, k = lo;

    while (i <= mid && j <= hi){
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= mid){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= hi){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

export function getBubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper (mainArray, animations){
    const n = mainArray.length;
    // for (let i = 0; i < n; i++){
    //     for (let j = 0; j < n-i-1; j++){
    //         if (mainArray[j] > mainArray[j+1]){
    //             // animations.push([j, j+1]);
    //             // animations.push([j, j+1]);
    //             // animations.push([j, mainArray[j]]);
    //             const temp = mainArray[j];
    //             mainArray[j] = mainArray[j+1];
    //             mainArray[j+1] = temp;
    //         }
    //     }
    // }
    let sorted = false;
    while (!sorted){
        sorted = true;
        // let max = n-2;
        for (let i = 0; i < n-1; i++){
            // console.log(mainArray[i], mainArray[i+1]);
            if(mainArray[i] > mainArray[i+1]){
                sorted = false;
                animations.push([i, i+1]);
                animations.push([i, i+1]);
                animations.push([i, mainArray[i], i+1, mainArray[i+1]]);
                const temp = mainArray[i];
                mainArray[i] = mainArray[i+1];
                mainArray[i+1] = temp;
                // console.log(mainArray[i], mainArray[i+1], temp);
            }
        }
    }
}
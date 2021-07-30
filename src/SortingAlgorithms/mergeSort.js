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

// my implementation

// Clement's implementation
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
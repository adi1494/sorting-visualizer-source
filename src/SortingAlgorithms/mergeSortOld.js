export function getMergeSortAnimationsOld(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper (
    array,
    lo,
    hi,
    auxiliaryArray,
    animations,
) {
    if (lo === hi) return;
    const mid = Math.floor((lo + hi)/2);
    mergeSortHelper(auxiliaryArray, lo, mid, array, animations);
    mergeSortHelper(auxiliaryArray, mid+1, hi, array, animations);
    doMerge(array, lo, mid, hi, auxiliaryArray, animations);
}

// Clement's implementation
function doMerge(
    array,
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
    //     leftarr.push(array[i]);
    // }
    // for (let i = 0; i < n1; i++) {
    //     rightarr.push(array[mid+1+j]);
    // }

    // let i = 0, j = mid+1, k = lo;
    // while (i < n1 && j < n2){
    //     if (leftarr[i] <= rightarr[j]){
    //         array[k++] = leftarr[i++];
    //     } else {
    //         array[k++] = rightarr[j++];
    //     }
    // }
    // while (i < n1){
    //     array[k++] = leftarr[i++];
    // }
    // while (j < n2){
    //     array[k++] = rightarr[j++];
    // }

    let i = lo, j = mid+1, k = lo;

    while (i <= mid && j <= hi){
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            array[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            array[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= mid){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        array[k++] = auxiliaryArray[i++];
    }
    while (j <= hi){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        array[k++] = auxiliaryArray[j++];
    }
}
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    mergeSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function mergeSortHelper(
    array,
    lo,
    hi,
    animations,
) {
    if (lo >= hi) return;
    const mid = Math.floor((lo + hi) / 2);
    mergeSortHelper(array, lo, mid, animations);
    mergeSortHelper(array, mid + 1, hi, animations);
    merge(array, lo, mid, hi, animations);
}

// my implementation
function merge(
    array,
    lo,
    mid,
    hi,
    animations,
) {
    let len1 = mid + 1 - lo, len2 = hi - mid;
    animations.push([0, lo, mid, hi]) // color boundaries
    const left = [], right = [];
    for (let i = 0; i < len1; i++) {
        left.push(array[lo + i]);
        animations.push([0, lo + i]); // color reading elements
        animations.push([1, lo + i]); // uncolor reading elements
        animations.push([0, lo, mid, hi]) // color boundaries
    }
    for (let j = 0; j < len2; j++) {
        right.push(array[mid + 1 + j]);
        animations.push([0, mid + 1 + j]); // color reading elements
        animations.push([1, mid + 1 + j]); // uncolor reading elements
        animations.push([0, lo, mid, hi]) // color boundaries
    }
    let i = 0, j = 0, k = lo;
    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            animations.push([3, k]); // color setheight
            animations.push([2, k, left[i]]); // setheight
            animations.push([4, k]); // uncolor setheight
            animations.push([0, lo, mid, hi]) // color boundaries
            array[k++] = left[i++];
        } else {
            animations.push([3, k]); // color setheight
            animations.push([2, k, right[j]]); // setheight
            animations.push([4, k]); // uncolor setheight
            animations.push([0, lo, mid, hi]) // color boundaries
            array[k++] = right[j++];
        }
    }
    while (i < len1) {
        animations.push([3, k]); // color setheight
        animations.push([2, k, left[i]]); // setheight
        animations.push([4, k]); // uncolor setheight
        animations.push([0, lo, mid, hi]) // color boundaries
        array[k++] = left[i++];
    }
    while (j < len2) {
        animations.push([3, k]); // color setheight
        animations.push([2, k, right[j]]); // setheight
        animations.push([4, k]); // uncolor setheight
        animations.push([0, lo, mid, hi]) // color boundaries
        array[k++] = right[j++];
    }
    animations.push([1, lo, mid, hi]) // uncolor boundaries
}
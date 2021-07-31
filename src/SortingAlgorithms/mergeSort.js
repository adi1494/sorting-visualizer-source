const SORT_SPEED = 3;

export function getMergeSort(array) {
    // console.log(this.state.array);
    const animations = getMergeSortAnimations(array);
    // console.log(this.state.array);
    // console.log(animations);

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        let l = animations[i].length;
        if (l === 4) {
            // color boundaries
            const [k, lobar, midbar, hibar] = animations[i];
            if (k === 0) {
                // console.log('coloring');
                setTimeout(() => {
                    arrayBars[lobar].style.backgroundColor = 'red';
                    arrayBars[hibar].style.backgroundColor = 'red';
                    arrayBars[midbar].style.backgroundColor = 'blue';
                }, i * SORT_SPEED);
            } else if (k === 1) {
                // console.log('uncoloring');
                setTimeout(() => {
                    arrayBars[lobar].style.backgroundColor = 'grey';
                    arrayBars[hibar].style.backgroundColor = 'grey';
                    arrayBars[midbar].style.backgroundColor = 'grey';
                }, i * SORT_SPEED);
            }
        } else if (l === 3) {
            // set bar height
            const [k, bar, height] = animations[i];
            if (k === 2) {
                setTimeout(() => {
                    arrayBars[bar].style.height = `${height}px`;
                }, i * SORT_SPEED);
            }
        } else {
            // set bar color
            const [k, bar] = animations[i];
            if (k === 0) {
                setTimeout(() => {
                    arrayBars[bar].style.backgroundColor = 'yellow';
                }, (i-1) * SORT_SPEED);
            } else {
                setTimeout(() => {
                    arrayBars[bar].style.backgroundColor = 'grey';
                }, i * SORT_SPEED);
            }
        }
    }
}

function getMergeSortAnimations(array) {
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
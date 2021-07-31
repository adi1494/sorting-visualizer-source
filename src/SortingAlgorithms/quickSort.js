const SORT_SPEED = 3;

export function getQuickSort(array) {
    // console.log(this.state.array);
    const animations = getQuickSortAnimations(array);
    // console.log(this.state.array);
    // console.log(animations);

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [k, bar1, bar2] = animations[i];
        const bar1style = arrayBars[bar1].style;
        const bar2style = arrayBars[bar2].style;
        // const setMode = k % 3;
        if (k === 0) {
            //color swapped
            setTimeout(() => {
                bar1style.backgroundColor = 'blue';
                bar2style.backgroundColor = 'blue';
            }, i * SORT_SPEED);
        } else if (k === 1) {
            // swap heights
            setTimeout(() => {
                [bar1style.height, bar2style.height] = [bar2style.height, bar1style.height];
            }, i * SORT_SPEED);
        } else if (k === 2) {
            // recolor swapped
            setTimeout(() => {
                bar1style.backgroundColor = 'grey';
                bar2style.backgroundColor = 'grey';
            }, i * SORT_SPEED);
        } else if (k === 3) {
            // color pivot and compare
            setTimeout(() => {
                bar1style.backgroundColor = 'red';
                bar2style.backgroundColor = 'yellow';
            }, i * SORT_SPEED)
        } else if (k === 4) {
            // recolor pivot
            setTimeout(() => {
                bar1style.backgroundColor = 'grey';
                bar2style.backgroundColor = 'grey';
            }, i * SORT_SPEED);
        }
    }
}

function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(
    array,
    lo,
    hi,
    animations,
) {
    if (lo >= hi) return;

    let pi = quickSortPartition(array, lo, hi, animations);
    quickSortHelper(array, lo, pi - 1, animations);
    quickSortHelper(array, pi + 1, hi, animations);
}

function quickSortPartition(
    array,
    lo,
    hi,
    animations
) {
    let pivot = array[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
        if (array[j] < pivot) {
            animations.push([3, j, hi]); // color pivot and jth element
            [array[i], array[j]] = [array[j], array[i]];
            animations.push([0, i, j]); // color elements to swap
            animations.push([1, i, j]); // swap heights
            animations.push([2, i, j]); // recolor swapped elements 
            i++;
        }
    }
    animations.push([4, lo, hi]); // recolor pivot
    [array[i], array[hi]] = [array[hi], array[i]];
    animations.push([0, i, hi]);
    animations.push([1, i, hi]);
    animations.push([2, i, hi]);
    return i;
}
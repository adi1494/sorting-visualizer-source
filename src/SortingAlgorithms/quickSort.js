export function getQuickSortAnimations(array) {
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
            animations.push([2, i, j, lo]); // recolor swapped elements
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
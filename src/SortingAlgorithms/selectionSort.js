const SORT_SPEED = 3;

export function getSelectionSort(array) {
  //   console.log(array);
  const animations = getSelectionSortAnimations(array);
  // console.log(animations);
  //   console.log(array);

  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const [k, left, right] = animations[i];
    if (k === 0){
      // color leftmost element
      setTimeout(() => {
        arrayBars[left].style.backgroundColor = 'red';
      }, i * SORT_SPEED);
    } else if (k === 1){
      // color element searching
      setTimeout(() => {
        arrayBars[left].style.backgroundColor = 'cyan';
      }, i * SORT_SPEED);
    } else if (k === 2){
      // uncolor element searching
      setTimeout(() => {
        arrayBars[left].style.backgroundColor = 'grey';
      }, i * SORT_SPEED);
    } else if (k === 3){
      // color min value element and uncolor previous min value element
      setTimeout(() => {
        arrayBars[left].style.backgroundColor = 'red';
        arrayBars[right].style.backgroundColor = 'grey';
      }, i * SORT_SPEED);
    } else if (k === 4){
      // animate the swap
      setTimeout(() => {
        [arrayBars[left].style.height, arrayBars[right].style.height] = [arrayBars[right].style.height, arrayBars[left].style.height];
      }, i * SORT_SPEED);
    } else if (k === 5){
      // color the swap
      setTimeout(() => {
        arrayBars[left].style.backgroundColor = 'yellow';
        arrayBars[right].style.backgroundColor = 'yellow';
      }, i * SORT_SPEED);
    } else if (k === 6){
      // uncolor the swap
      setTimeout(() => {
        arrayBars[left].style.backgroundColor = 'grey';
        arrayBars[right].style.backgroundColor = 'grey';
      }, i * SORT_SPEED);
    }
  }
}

function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSortHelper(array, animations);
  return animations;
}

function selectionSortHelper(array, animations) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    animations.push([0, minIdx, 0]);
    for (let j = i + 1; j < array.length; j++) {
      animations.push([1,j,0]);
      if (array[j] <= array[minIdx]) {
        animations.push([3, j, minIdx]);
        minIdx = j;
        continue;
      }
      animations.push([2, j, 0]);
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
    // animate the swap
    // uncolor the minidx element
    animations.push([5, i, minIdx]);
    animations.push([4, i, minIdx]);
    animations.push([6, i, minIdx]);
  }
}
// function selectionSortHelper(array, animations) {
//   for (let i = 0; i < array.length; i++) {
//     let minIdx = i;
//     // color min index element
//     animations.push([0, i, null]);
//     for (let j = i + 1; j < array.length; j++) {
//       // color comparision bw min idx elements
//       animations.push([1, j, i]);
//       if (array[j] < array[minIdx]) {
//         animations.push([4, j, minIdx]); // j red minidx grey
//         minIdx = j;
//       }
//       // uncolor j, color minidx
//       animations.push([3, j, minIdx]);
//     }
//     [array[i], array[minIdx]] = [array[minIdx], array[i]];
//     // color swap
//     // animations.push([4, i, minIdx]);
//     // swap height
//     // animations.push([5, i, minIdx]);
//     // uncolor swap
//     // animations.push([6, i, minIdx]);
//     // uncolor min idx element
//     animations.push([2, i, null]);
//   }
// }

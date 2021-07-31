import React from 'react'
import './SortingVisualizer.css';
// import {getMergeSortAnimations, getBubbleSortAnimations, getQuickSortAnimations} from '../SortingAlgorithms/SortingAlogrithms';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort';
// import { getMergeSortAnimationsOld } from '../SortingAlgorithms/mergeSortOld';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort';
// import { array } from 'prop-types';


const ARRAY_SIZE = 150;
const SORTING_SPEED = 3;

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < ARRAY_SIZE; i++){
            array.push(randomNumberBetween(10,500));
        }
        // console.log(this.state.array);
        this.setState({array});
        // console.log(this.state.array);
    }

    mergeSort() {
        // console.log(this.state.array);
        const animations = getMergeSortAnimations(this.state.array);
        // console.log(this.state.array);
        console.log(animations);

        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            let l = animations[i].length;
            if (l === 4){
                // color boundaries
                const [k, lobar, midbar, hibar] = animations[i];
                if (k === 0){
                    // console.log('coloring');
                    setTimeout(() => {
                        arrayBars[lobar].style.backgroundColor = 'red';
                        arrayBars[hibar].style.backgroundColor = 'red';
                        arrayBars[midbar].style.backgroundColor = 'blue';
                    }, i * SORTING_SPEED);
                } else if (k === 1) {
                    // console.log('uncoloring');
                    setTimeout(() => {
                        arrayBars[lobar].style.backgroundColor = 'grey';
                        arrayBars[hibar].style.backgroundColor = 'grey';
                        arrayBars[midbar].style.backgroundColor = 'grey';
                    }, i * SORTING_SPEED);
                }
            } else if (l === 3){
                // set bar height
                const [k, bar, height] = animations[i];
                if (k === 2){
                    setTimeout(() => {
                        arrayBars[bar].style.height = `${height}px`;
                    }, i * SORTING_SPEED);
                }
            } else {
                // set bar color
                const [k, bar] = animations[i];
                if (k === 0){
                    setTimeout(() => {
                        arrayBars[bar].style.backgroundColor = 'yellow';
                    }, i * SORTING_SPEED);
                } else {
                    setTimeout(() => {
                        arrayBars[bar].style.backgroundColor = 'grey';
                    }, i * SORTING_SPEED);
                }
            }
        }
    }

    // mergeSortOld() {
    //     // console.log(this.state.array);
    //     const animations = getMergeSortAnimationsOld(this.state.array);
    //     console.log(this.state.array);
    //     console.log(animations);

    //     for (let i = 0; i < animations.length; i++){
    //         const arrayBars = document.getElementsByClassName('array-bar');
    //         const isColorChange = i % 3 !== 2;
    //         if (isColorChange){
    //             const [barOne, barTwo] = animations[i];
    //             const barOneStyle = arrayBars[barOne].style;
    //             const barTwoStyle = arrayBars[barTwo].style;
    //             const color = i % 3 === 0 ? 'red' : 'grey';
    //             setTimeout(() => {
    //                 barOneStyle.backgroundColor = color;
    //                 barTwoStyle.backgroundColor = color;
    //             }, i * SORTING_SPEED);
    //         } else {
    //             setTimeout(() => {
    //                 const [barOne, newHeight] = animations[i];
    //                 const barOneStyle = arrayBars[barOne].style;
    //                 barOneStyle.height = `${newHeight}px`;
    //             }, i * SORTING_SPEED);
    //         }
    //     }
        
    //     // console.log(this.state.array);
    // }

    quickSort() {
        // console.log(this.state.array);
        const animations = getQuickSortAnimations(this.state.array);
        // console.log(this.state.array);
        // console.log(animations);

        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [k, bar1, bar2] = animations[i];
            const bar1style = arrayBars[bar1].style;
            const bar2style = arrayBars[bar2].style;
            // const setMode = k % 3;
            if (k === 0){
                //color swapped
                setTimeout(() => {
                    bar1style.backgroundColor = 'blue';
                    bar2style.backgroundColor = 'blue';
                }, i * SORTING_SPEED);
            } else if (k === 1){
                // swap heights
                setTimeout(() => {
                    [bar1style.height, bar2style.height] = [bar2style.height, bar1style.height];
                }, i * SORTING_SPEED);
            } else if (k === 2){        
                // recolor swapped
                setTimeout(() => {
                    bar1style.backgroundColor = 'grey';
                    bar2style.backgroundColor = 'grey';
                }, i * SORTING_SPEED);
            } else if (k === 3){
                // color pivot and compare
                setTimeout(() => {
                    bar1style.backgroundColor = 'red';
                    bar2style.backgroundColor = 'yellow';
                }, i * SORTING_SPEED)
            } else if (k === 4){
                // recolor pivot
                setTimeout(() => {
                    bar1style.backgroundColor = 'grey';
                    bar2style.backgroundColor = 'grey';
                }, i * SORTING_SPEED);
            }
        }
    }

    heapSort() {

    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        // console.log(this.state.array);
        // console.log(animations);

        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [k, idx] = animations[i];
            const bar1 = arrayBars[idx].style;
            const bar2 = arrayBars[idx+1].style;

            if (k === 0) {
                // comparision color
                setTimeout(() => {
                    bar1.backgroundColor = 'yellow';
                    bar2.backgroundColor = 'yellow';
                }, i * SORTING_SPEED);
            } else if (k === 1) {
                // recolor
                setTimeout(() => {
                    bar1.backgroundColor = 'grey';
                    bar2.backgroundColor = 'grey';
                }, i * SORTING_SPEED);
            } else if (k === 2){
                // swap color
                setTimeout(() => {
                    bar1.backgroundColor = 'blue';
                    bar2.backgroundColor = 'blue';
                }, i * SORTING_SPEED);
            } else if (k === 3) {
                // swap heights
                setTimeout(() => {
                    [bar1.height, bar2.height] = [bar2.height, bar1.height];
                }, i * SORTING_SPEED);
            } else if (k === 4){
                // swap recolor
                setTimeout(() => {
                    bar1.backgroundColor = 'grey';
                    bar2.backgroundColor = 'grey';
                }, i * SORTING_SPEED);
            }
        }
    }

    // bubbleSortOld() {
    //     // console.log(this.state.array);
    //     const animations = getBubbleSortAnimations(this.state.array);
    //     // console.log(this.state.array);
    //     // console.log(animations);

    //     // let lastindex = animations.length-1;
    //     for (let i = 0; i < animations.length; i++){
    //         const arrayBars = document.getElementsByClassName('array-bar');
    //         const isColorChange = i % 3  !== 2;
    //         if (isColorChange){
    //             const [barOne, barTwo] = animations[i];
    //             const barOneStyle = arrayBars[barOne].style;
    //             const barTwoStyle = arrayBars[barTwo].style;
    //             const color = i % 3 === 0 ? 'red' : 'grey';
    //             // const color = 'red';
    //             setTimeout(() => {
    //                 barOneStyle.backgroundColor = color;
    //                 barTwoStyle.backgroundColor = color;
    //             }, i * 3);
    //         } else {
    //             setTimeout(() => {
    //                 const [bar1, height1, bar2, height2] = animations[i];
    //                 const barOneStyle = arrayBars[bar1].style;
    //                 barOneStyle.height = `${height2}px`;
    //                 // barOneStyle.backgroundColor = 'blue';
    //                 const barTwoStyle = arrayBars[bar2].style;
    //                 barTwoStyle.height = `${height1}px`;
    //                 // barTwoStyle.backgroundColor = 'blue';
    //             }, i * 3);
    //         }
    //     }
        
    // }

    // testSortingAlgorithms() {
    //     for (let i = 0; i < 100; i++){
    //         const array = [];
    //         const length = randomNumberBetween(1, 1000);
    //         for (let j = 0; j < length; j++){
    //             array.push(randomNumberBetween(0, 1000));
    //         }
    //         const jsSortedArray = array.slice().sort((a,b) => a - b);
    //         const sortedArray = SortingAlgorithms.mergeSort(array);
    //         console.log(arrayEqual(sortedArray, jsSortedArray));
    //     }
    // }

    render () {
        const {array} = this.state;

        return (
            <div className="container">            
                
                <div className="button-container">
                    <button className="button" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="button" onClick={() => this.mergeSortOld()}>Merge Sort Old</button>
                    <button className="button" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="button" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    {/* <button className="button" onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithm</button> */}
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar"
                            key={idx}
                            style={{
                                height: `${value}px`,
                                backgroundColor: 'grey',
                        }}>
                            
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function randomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arrayEqual(array, jsarray){
//     if (array.length !== jsarray.length) return false;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] !== jsarray[i]) return false;
//     }
//     return true;
// }



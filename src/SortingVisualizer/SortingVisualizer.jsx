import React from 'react'
import './SortingVisualizer.css';
import {getMergeSortAnimations, getBubbleSortAnimations} from '../SortingAlgorithms/SortingAlogrithms';
// import { array } from 'prop-types';


const ARRAY_SIZE = 300;
const SORTING_SPEED = 2;

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
        // console.log(animations);

        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange){
                const [barOne, barTwo] = animations[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = i % 3 === 0 ? 'red' : 'blue';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SORTING_SPEED);
            } else {
                setTimeout(() => {
                    const [barOne, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * SORTING_SPEED);
            }
        }
        
        // console.log(this.state.array);
    }

    quickSort() {
        
    }

    heapSort() {

    }

    bubbleSort() {
        // console.log(this.state.array);
        const animations = getBubbleSortAnimations(this.state.array);
        // console.log(this.state.array);
        console.log(animations);

        // let lastindex = animations.length-1;
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3  !== 2;
            if (isColorChange){
                const [barOne, barTwo] = animations[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = i % 3 === 0 ? 'red' : 'blue';
                // const color = 'red';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {
                setTimeout(() => {
                    const [bar1, height1, bar2, height2] = animations[i];
                    const barOneStyle = arrayBars[bar1].style;
                    barOneStyle.height = `${height2}px`;
                    // barOneStyle.backgroundColor = 'blue';
                    const barTwoStyle = arrayBars[bar2].style;
                    barTwoStyle.height = `${height1}px`;
                    // barTwoStyle.backgroundColor = 'blue';
                }, i * 3);
            }
        }
        
    }

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
                                backgroundColor: 'blue',
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



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
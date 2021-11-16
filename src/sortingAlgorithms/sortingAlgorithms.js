export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSort(array){
  const animations = [];
  doQuickSort(array, animations);
  return animations;
}
function doQuickSort(origArray, animations) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
    animations.push([origArray.length-1, pivot]);
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
      animations.push([i, origArray[i]]);
		}

		return newArray.concat(doQuickSort(left, animations), pivot, doQuickSort(right, animations));
	}
}

export function getBubbleSort(array){
  const animations = [];
  bblSort(array, animations);
  return animations;
}
function bblSort(arr, animations){
    //  console.log(`BEFORE SORT: ${arr}`)
  for(var i = 0; i < arr.length; i++){  
    for(var j = 0; j < ( arr.length - i -1 ); j++){    
      if(arr[j] > arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        animations.push([j, arr[j]]);
        animations.push([j+1, arr[j+1]]);
      }
    }
  }
  // console.log(`AFTER SORT: ${arr}`)
 }

 export function getInsertionSort(array){
   const animations = [];
   insertionSort(array, animations);
   return animations;
 }
 function insertionSort(arr, animations) {
   console.log(`BEFORE SORT: ${arr}`)
   for(let i = 1; i < arr.length;i++){
    for(let j = i - 1; j > -1; j--){
        if(arr[j + 1] < arr[j]){
          [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
          animations.push([j, arr[j]]);
          animations.push([j+1, arr[j+1]]);
        }
    }
  }
  // for(let i=0;i<arr.length;i++){
  //   animations.push([i, arr[i]]);
  // }
  // console.log(`ANIMATION: ${animations}`)

}

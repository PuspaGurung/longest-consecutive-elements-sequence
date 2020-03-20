/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (numbers) => {
	// 1) Create a empty object (it may store elements of input array of number)
	let objArr = {};
	// 2) Create a empty Array (it may store the length of each consecutive numbers / or also can insert consecutive numbers for check)
	const consNum = [];
	// 3) Iterate through input array of numbers and insert elements in object
	for (let num of numbers) {
		objArr[num] = true;
	}

	for (let num in objArr) {
		/*
		4) Linearly iterate over the object of array element and check if objArr[num - 1] desnt exit,
		then it is the first element of its corresponding sequence.
		Insert empty array to consNum[] so that the new array may store length of each corresponding sequence. 
		Set count to 0 so that when new sequence start then count begins from 0
		*/
		if (!objArr[num - 1]) {
			consNum.push([]);
			count = 0;
		}

		//5) Increment the count by 1 each time until the end of that particular corresponding sequence
		count++;

		// 6)Put updated count to newly created array (the array was create when new corresponding sequence is figure out)

		consNum[consNum.length - 1] = count;
		//consNum[consNum.length - 1].push(num);
	}
	// 7) Get the max number from the array that store length of consecutive sequence number
	let maxLength = Math.max(...consNum);
	console.log(maxLength)
	console.log(consNum)
	return maxLength;

};
longestConsecutive([100, 4, 200, 1, 0, 3, 2, 5, 10, 11, 20, 21]);
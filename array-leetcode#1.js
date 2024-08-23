// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    if (n === 0) {
        return nums1; 
    }

    for (let i = m, j = 0; i < nums1.length; i++, j++) {
        nums1[i] = nums2[j];
    }

    nums1Sort = nums1.sort((a,b)=>a-b); // O(nlogn)
    return nums1Sort

};



// 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
 
    return nums.length;
};

// 80. Remove Duplicates from Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
    
//     let count = 1;
//     for (let i = 1; i < nums.length ; i++) {
      
//         if (nums[i] === nums[i-1]) {
//             count++;
//         } else {
//             count = 1;
//         }

//         if (count > 2) {
//             console.log('counter')
//             nums.splice(i,1);
//             i--
//         }
//         console.log(nums)

//     }

// A better solution with O(n)
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let writeIndex = 1; // Pointer to write the next valid element
    let count = 1; // Count the occurrences of the current element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1; // Reset count for a new element
        }

        if (count <= 2) {
            nums[writeIndex] = nums[i]; // Write the current element
            writeIndex++;
        }
    }

    return writeIndex; // Length of the array with no more than 2 duplicates
};

    

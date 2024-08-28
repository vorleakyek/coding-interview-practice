// 380. Insert Delete GetRandom O(1)


var RandomizedSet = function() {
    this.object = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    console.log(val)
  if (this.object[val] === undefined) {
    this.object[val] = val
    return true;
  } 
 console.log(this.object)   
  return false;
  
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.object[val] !== undefined) {
        delete(this.object[val])
        return true
    }

    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    // for (let key in this.object) {
    //     this.array.push(key)
    // }

    // const randIndex = Math.floor(Math.random() * this.array.length);

    // return this.array[randIndex]

     // Convert the object keys to an array
        const keysArray = Object.keys(this.object);

        // Generate a random index
        const randIndex = Math.floor(Math.random() * keysArray.length);

        // Return the key at the random index
        return keysArray[randIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

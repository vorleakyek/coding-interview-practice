function canConstruct(ransomNote, magazine){
   const map = {};

   for ( let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] === undefined) {
        map[magazine[i]] = 0; 
    }
     map[magazine[i]] += 1; 
   } 
   console.log(map)

   for (let c = 0; c < ransomNote.length; c++) {
    console.log(map[ransomNote[c]])
    if (map[ransomNote[c]] === undefined){
        return false
    } else {
        map[ransomNote[c]] -= 1;
        if (map[ransomNote[c]] < 0) {
            return false 
        }
    }
   }
   
   return true; 
};

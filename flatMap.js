const data = [
  {
    name: "user1",
    projects: []
  },
  {
    name: "user2",
    projects: ['project1', 'project2']
  }
 ];
  

const filteredArray1 = [];
data.forEach((user) => {
    user.projects.forEach((project) => {
      filteredArray1.push({ ...user, project });
    });
});
  
//Alternative way 	  
const filteredArray2 = data.flatMap((user) => {return user.projects.map((project) => ({ ...user, project }))})

console.log(filteredArray1)
console.log(filteredArray2)          

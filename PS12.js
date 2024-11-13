let marks = {
  saurabh: 100,
  trishal: 50,
  ayush: 68,
  hrushabh: 45,
};

// for(i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
// }

for(let key in marks){
    console.log("The marks of "+ key + " are "+ marks[key])
}
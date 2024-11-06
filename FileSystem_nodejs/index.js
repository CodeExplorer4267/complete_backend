import fs from 'fs';
//how to read the content of input.txt
fs.readFile("input.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log(data.toString())//this is an asynchronous read
})
//append content to a file
fs.appendFile("input.txt","Hello File",(err)=>{
    if(err){
        throw err;
    }
    console.log("Saved!")
})
//write content to a file..basically replacing
fs.writeFile("input.txt","I am writing this to input.txt",(err)=>{
    if(err){
        throw err;
    }
    console.log("Saved!")
})
//to rename the file
fs.rename("input.txt","newinput.txt",(err)=>{
    if(err){
        throw err;
    }
    console.log("File renamed")
})
//to delete a file 
fs.unlink("newinput.txt",(err)=>{
    if(err){
        throw err;
    }
    console.log("File deleted")
})
// import http from "http"
// import { percentage } from "./feature.js"
// import fs from "fs"
// const server = http.createServer((req, res) => {
//     //--->First learning----------->
//     // if (req.url === "/percentage") {
//     //     res.end(`
//     //         <html>
//     //             <body>
//     //                 <form id="percentageForm" onsubmit="event.preventDefault(); calculatePercentage();">
//     //                     <input name="name1" placeholder="Enter name1" required />
//     //                     <input name="name2" placeholder="Enter name2" required />
//     //                     <button type="submit">Submit</button>
//     //                 </form>
//     //                 <h2 id="result">Love is: </h2>
                    
//     //                 <script>
//     //                     async function calculatePercentage() {
//     //                         const response = await fetch("/getPercentage");
//     //                         const result = await response.text();
//     //                         document.getElementById("result").innerText = "Love is: " + result + "%";
//     //                     }
//     //                 </script>
//     //             </body>
//     //         </html>
//     //     `);
//     // } else if (req.url === "/getPercentage") {
//     //     const result = percentage();
//     //     res.end(result.toString());
//     // } else {
//     //     res.end("404 Not Found");
//     // }
//     //---------------------------------------------------------------------
//    fs.readFile('hello.txt',(err,data)=>{
//       res.end(data)
//    })
// });
// server.listen(5000,()=>{
//     console.log("Server is listening")
//     console.log("http://localhost:5000")
// })
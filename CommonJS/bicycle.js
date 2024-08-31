const { useState } = require("react");

let history="Vehicles that have two wheels and require balancing by the rider date back to the early 19th century. The first means of transport making use of two wheels arranged consecutively, and thus the archetype of the bicycle, was the German draisine dating back to 1817. The term bicycle was coined in France in the 1860s, and the descriptive title `penny Farthing` used to describe an `ordinary bicycle` is a 19th-century term"
let bImage="🚲" ;
let bModels=["Tour Bicycle","Road Bicycle","Cyclo-Cross Bicycle","Fixed-gear Bicycle"];

let [comments,setComments]=useState([]);
let commentsAPI= async ()=>{
let jsonData = await fetch("https://jsonplaceholder.typicode.com/comments",{method:"GET"});
let jsoData = await jsonData.jso();

console.log(jsoData);
setComments(jsoData);

}

{comments.map((ele,i)=>{
    return(
<div>
<p>{ele.postId}</p>
<p>{ele.name}</p>
</div>
    );
})}
module.exports ={history,bImage,bModels,commentsAPI};
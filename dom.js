//console.dir(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.head);
console.log(document.doctype);
 document.all[10].textContent="hello";
 console.log(document.links);
 let headerTitle=document.getElementById("header_title");
 console.log(headerTitle);
 headerTitle.textContent="goodbye";
 //headerTitle.innerText="goodbye";
 headerTitle.style.borderBottom='solid 3px #000';
 //document.all[10].style.borderBottom="solid 3px #000"
 document.getElementById("header_title").textContent="hello";
 document.getElementsByClassName("title").style.color="green";
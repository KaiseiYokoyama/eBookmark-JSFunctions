//ムズい
var title
var id
var tags
var is_bookmark
var memo

try{

  fetch("http://"+"His IP Address"+ ":8080/get/all", {
      method: "GET",
    }).then(response => response.json())
    .then(text => {
      title = text.title
    });
}catch(e){
  console.log(e)
}
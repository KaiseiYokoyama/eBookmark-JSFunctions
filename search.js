//与える値が投げやりなので変えてください
//json_dataを適宜整形してください

var ser_title;
var ser_is_bookmark;

var json_data;

try{
    fetch("http://"+"His IP Address"+ ":8080/search", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": ser_title,
            "tags" : ["","",""],
            "is_bookmark" : ser_is_bookmark,
        })
      }).then(response => response.json())
      .then(text => {
        json_data = text;
      });
  }catch(e){
    console.log(e)
}
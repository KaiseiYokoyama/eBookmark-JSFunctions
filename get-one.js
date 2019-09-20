//get_jsonを適宜整形してください

var get_id = "";
var get_json = "";

function getone() {
  try{
    fetch("http://"+"His IP Address"+ ":8080/get/one", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": get_id,
          })
      }).then(response => response.json())
      .then(text => {
        get_json = text;
        console.log(get_json)
      });
  }catch(e){
    console.log(e)
  }
}

getone();
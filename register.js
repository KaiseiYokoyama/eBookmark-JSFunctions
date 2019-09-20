var reg_id;
var reg_title;

try{
    fetch("http://"+"His IP Address"+ ":8080/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": reg_id,
            "title": reg_title,
        })
      });
  }catch(e){
    console.log(e)
}
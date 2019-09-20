//完成
var delete_id

try{
    fetch("http://"+"His IP Address"+ ":8080/delete", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": delete_id,
          })
    });
}catch(e){
    console.log(e)
}
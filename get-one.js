//get_jsonを適宜整形してください

/**
 *
 * @param id {String} 取得対象のid
 */
function getOne(id) {
    fetch("http://" + ip + ":8080/get/one", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": id,
        })
    })
        .then(response => response.json())
        .then(json => {
            let book = JSON.parse(json);
            // todo 取得した本を用いた処理
        })
        .catch((e) => {
            console.error(e)
        });
}

//ムズい

function getAll() {
    fetch("http://" + ip + ":8080/get/all", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => {
            let books = JSON.parse(json);
            // todo 取得したBook一覧を用いた処理を実行
        })
        .catch((e) => {
            console.error(e);
        });
}
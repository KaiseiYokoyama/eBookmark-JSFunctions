//与える値が投げやりなので変えてください
//json_dataを適宜整形してください

class SearchQuery {
    constructor(title, tags, is_bookmark) {
        this.title = title;
        this.tags = tags;
        this.is_bookmark = is_bookmark;
    }
}

/**
 *
 * @param query {SearchQuery} 検索のクエリ 詳しくはStandardを参照
 */
function search(query) {
    fetch("http://" + ip + ":8080/search", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(query)
    })
        .then(response => response.json())
        .then(json => {
            const books = JSON.parse(json);
            // todo 取得した検索結果を用いた操作
        })
        .catch((e) => {
            console.log(e)
        });
}

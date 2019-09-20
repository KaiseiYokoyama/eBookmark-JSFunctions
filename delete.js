//完成

/**
 *
 * @param delete_id {string} 削除する本に対応したNFCのID
 */
async function del(delete_id) {
    await fetch("http://" + ip + ":8080/delete", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": delete_id,
        })
    }).then(function (response) {
        return response.status;
    }).then((status) => {
        if (status === 200) {
            // todo 削除成功時の処理
        } else {
            // todo 失敗時の処理
        }
    }).catch((e) => {
        console.error(e)
    });
}

// async function fetch_sample() {
//     await fetch("./get-all.js")
//         .then((response) => {
//             console.log(response.status);
//         }).catch((e) => {
//             console.error(e);
//         });
// }
//
// fetch_sample();
//CARD
function cardShow(data) {
    let labelProgress = data.completed ? "Done" : "On Progress"
    let colorProgress = data.completed ? "#0a9a1f" : "#c78809"
    console.log(data, 'data')
    return (
        ` <div
        style="
          border: 1px rgb(126, 126, 126) solid;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 16px;
          padding-right: 16px;
          border-radius: 10px;
        "
      >
        <div style="font-size: 24px">${data.title}</div>
        <div
          style="
            font-size: 16px;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
          "
        >
          <div>User id:${data.userId}</div>
          <div
            style="
              background-color: ${colorProgress};
              color: white;
              padding-top: 3px;
              padding-bottom: 3px;
              padding-left: 5px;
              padding-right: 5px;
              border-radius: 8px;
            "
          >
            ${labelProgress}
          </div>
        </div>
      </div>`
    )
}



//PROMISE
// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
//         res.json().then((resData) => {
//             displayData(resData)
//         })
//     })
// }

//ASYNC/AWAIT
async function fetchData() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos')
        let dataCon = await data.json()

        displayData(dataCon)
    } catch (err) {
        console.log(err)
    }
}

function displayData(data) {
    let containerElm = document.getElementById('list_task')

    data.forEach(function (task) {
        let taskItem = document.createElement('div')
        taskItem.innerHTML = cardShow(task)
        containerElm.appendChild(taskItem)
    })
}



fetchData()


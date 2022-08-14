const baseUrl = "https://jsonplaceholder.typicode.com/users";

const getTasksList = () => fetch(baseUrl).then((response) => response.json());

const getTaskById = (taskId) =>
    fetch(`${baseUrl}/${taskId}`).then((response) => response.json());

getTasksList().then((tasksList) => {
    console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById("4").then((taskData) => {
    console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
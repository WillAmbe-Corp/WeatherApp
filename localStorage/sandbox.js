localStorage.setItem('name','Will');
localStorage.setItem('age',25);

console.log(localStorage.getItem('name'))

localStorage.age = 30;

const todos = [
    {title:"go home", id:1, completion: true},
    {title:"complete JS", id:2, completion: false},
    {title:"eat dinner", id:3, completion: false},
    {title:"wash clothes", id:4, completion: true}
];

const work = JSON.stringify(todos);
const task = localStorage.setItem('todos', work)
console.log(localStorage.getItem('todos'));

console.log(JSON.parse(work));
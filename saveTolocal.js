// var
var studentData;
var studentTable = document.getElementById("studentList");

// save example
var arr = [{name: '홍길동', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
            {name: '홍길은', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
            {name: '홍길금', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B', subject3: 'C', subject4: 'A', subject5: 'A', subject6: 'A'},
]

// save data to localStorage
function saveDataToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(arr));
}

// get data in localStorage
function getDataFromLocalStorage() {
    studentData = JSON.parse(localStorage.getItem("students"));
}

// print table
function createTable(data) {

    getDataFromLocalStorage();

    for (key in studentData) {
        var row = '<tr><td>' + studentData[key].name + '</td>' 
        + '<td>' + studentData[key].schoolNum + '</td>'
        + '<td>' + studentData[key].major + '</td>'
        + '<td>' + studentData[key].subject1 + '</td>'
        + '<td>' + studentData[key].subject2 + '</td>'
        + '<td>' + studentData[key].subject3 + '</td>'
        + '<td>' + studentData[key].subject4 + '</td>'
        + '<td>' + studentData[key].subject5 + '</td>'
        + '<td>' + studentData[key].subject6 + '</td>';

        studentTable.innerHTML += row;
    }
}

saveDataToLocalStorage();
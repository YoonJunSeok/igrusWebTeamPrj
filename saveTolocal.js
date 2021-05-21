// 저장한 것을 표로 나타내기 위한 예제.

// var
var studentData;
var studentTable = document.getElementById("studentList");

// save example
var arr = [
            {name: '홍길동', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길은', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길금', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'},
            {name: '홍길둥', schoolNum: '12121212', major: '컴퓨터공학과', subject1: 'A', subject2: 'B'}
]

// save data to localStorage
function saveDataToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(arr));
}

saveDataToLocalStorage();

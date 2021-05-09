function store() { // localStorage에 데이터 저장
    var name = document.getElementById('stdName').value; //이름을 localstorage의 key값으로 한다.
    var gender = document.getElementById('stdGender').value;
    var date = document.getElementById('stdBirth').value;
    var adress = document.getElementById('stdAdress').value;
    var phone = document.getElementById('stdPhone').value;

    const Student = {
        gender: gender,
        date: date,
        phone: phone,
        adress: adress,
    }

    window.localStorage.setItem(name, JSON.stringify(Student)); 
    // Student객체를 string으로 저장 (localstorage에서 keyvalue는 무조건 string이어야함)
}

function retrieveRecords() { // 학생 정보 조회
    // localStorage에 있는 키값에 해당하는 데이터 불러오기 (구현 덜 됨)
    var key = document.getElementById('retrieveName').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph); 
}
function removeItem(){
    // 키값에 해당하는 데이터 삭제
    var name = document.getElementById('retrieveName').value;
    localStorage.removeItem(name);
    console.log("remove items");
}

function clearStorage(){
    // localStorage에 있는 모든 데이터 삭제
    localStorage.clear();
    console.log("clear recors");
}

window.onload = function(){
    document.getElementById("studentform").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}
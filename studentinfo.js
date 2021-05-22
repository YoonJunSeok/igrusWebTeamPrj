function store() { // localStorage에 데이터 저장
    var num = document.getElementById('stdNum').value; //학번을 localstorage의 key값으로 저장한다.
    var name = document.getElementById('stdName').value; 
    var obj = document.getElementById('stdGender').length;
	/*var gender = "";
	for (var i=0;i<obj;i++) {
		if (document.getElementById('stdGender').checked==true){
			gender+=document.getElementById('stdGender')[idx].value;
		}
	}*/
    var gender = document.getElementById('stdGender').value; // 수정해야 됨
    var date = document.getElementById('stdBirth').value;
    var adress = document.getElementById('stdAdress').value;
    var phone = document.getElementById('stdPhone').value;

    const Student = {
        name : name,
        gender: gender, 
        date: date, 
        phone: phone, 
        adress: adress,
    }

    window.localStorage.setItem(num, JSON.stringify(Student)); 
    // Student객체를 string으로 저장
}

function retrieveRecords() { // 학생 정보 조회
    // localStorage에 있는 키값에 해당하는 데이터 불러오기
    console.log("retrieve records");
    var key = document.getElementById('retrieveNum').value;
    if(key==""){
        alert("학번을 입력하세요.");
    }
    var records = window.localStorage.getItem(key);

    var paragraph = document.createElement("div"); // create a new div element
    var infor = document.createTextNode(records); // give it records
    paragraph.appendChild(infor); // add the text node to the newly created div

    var currentDiv = document.getElementById('retrieve'); 
    document.body.insertBefore(paragraph, currentDiv);
}

function editRecords() { // 학생 정보 수정
    
}

function removeItem(){
    // 키값에 해당하는 데이터 삭제
    var key = document.getElementById('removeNum').value;
    localStorage.removeItem(key);
    alert("정보를 삭제하시겠습니까?");
    console.log(key, "의 정보를 삭제합니다.");
}

function clearStorage(){
    // localStorage에 있는 모든 데이터 삭제
    alert("전체 정보를 삭제하시겠습니까?");
    localStorage.clear();
    console.log("clear records");
}

window.onload = function(){
    document.getElementById("studentform").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
    document.getElementById("editButton").onclick = editRecords
}
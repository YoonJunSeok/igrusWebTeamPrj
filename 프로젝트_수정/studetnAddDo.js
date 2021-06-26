window.onload = function(){
    document.getElementById("studentform").onsubmit = addStudent
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeStudent
    //document.getElementById("retrieveButton").onclick = getStudent
   // document.getElementById("editButton").onclick = modifyStudent
}

function getStudent(){}

function addStudent(){
    // localstorage에서 student arr 가져오기
    studentArr = JSON.parse(localStorage.getItem("students"));

    // studentAdd.html에서 입력받은 data 불러오기
    var num = document.getElementById('stdNum').value;      // 학번 schoolNum
    var name = document.getElementById('stdName').value;    // 이름 name
    var obj = document.getElementsByName('stdGender').length;
	var gender = "";                                        // 성별 gender
	for (var i=0;i<obj;i++) {
		if (document.getElementsByName('stdGender')[i].checked==true){
			gender+=document.getElementsByName('stdGender')[i].value;
		}
	}
    var date = document.getElementById('stdBirth').value;   // 생년월일 date
    var major = document.getElementById('stdMajor').value;  // 전공 major
    
    var s1 = document.getElementById('subject1'); 
    var subject1 = s1.options[s1.selectedIndex].value;
    var s2 = document.getElementById('subject2'); // 성적
    var subject2 = s2.options[s2.selectedIndex].value;
    var s3 = document.getElementById('subject3'); // 성적
    var subject3 = s3.options[s3.selectedIndex].value;
    const Student = {
        name : name,
        schoolNum : num,
        gender: gender, 
        date : date, 
        major : major,
        subject1 : subject1,
        subject2 : subject2,
        subject3 : subject3
    }

    // student arr에 삽입 
    studentArr.push(Student);

    // localstoarge에 저장
    localStorage.setItem("students", JSON.stringify(studentArr));
}

function modifyStudent(){
}

function removeStudent(){
    // localstorage에서 student arr 가져오기
    studentArr = JSON.parse(localStorage.getItem("students"));
    // 삭제할 학번
    stdNum = document.getElementById('removeNum').value; 
    if(stdNum==""){
        alert("학번을 입력하세요.");
    }
    else {
    alert("정보를 삭제하시겠습니까?");
    console.log(stdNum, "의 정보를 삭제합니다.");
    
    // 삭제
    for(let i=0; i< studentArr.length; i++){
        if (studentArr[i].schoolNum === stdNum) {
            studentArr.splice(i, 1);
            i--;
        }
    }

    // localstorage에 저장
    localStorage.setItem("students", JSON.stringify(studentArr));
    }
}

function clearStorage(){
    // localStorage에 있는 모든 데이터 삭제
    alert("전체 정보를 삭제하시겠습니까?");
    localStorage.clear();
    console.log("clear records");
}

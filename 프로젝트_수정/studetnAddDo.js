window.onload = function(){
    document.getElementById("studentform").onsubmit = addStudent
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeStudent
    document.getElementById("retrieveButton").onclick = getStudent
    document.getElementById("editButton").onclick = modifyStudent
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
    document.writeln(
       /* <table border="1" class="table table-bordered">
                <tr>
                    <th><label for="stdNum">학번</label></th> 
                    <td><input type="text" id="stdNum" name="stdNum" required></input></td>
                </tr>
                <tr>
                    <th><label for="stdName">이름</label></th>
                    <td><input type="text" id="stdName" name="stdName" required></input></td>
                </tr>
                <tr>
                    <th><label for="stdGender">성별</label></th>
                    <td>
                    <label><input type="radio" id="stdGender" name="stdGender"value="male">남</input></label>
                    <label><input type="radio" name="stdGender"value="female">여</input></label>
                    </td>
                </tr>
                <tr>
                    <th><label for="stdBirth">생년월일</label></th>
                    <td><input type="date" id="stdBirth" name="stdBirth" required></input></td>
                </tr>
                <tr>
                    <th><label for="stdMajor">전공</label></th>
                    <td><input type="text" id="stdMajor" name="stdMajor" required></input></td>
                </tr>
                <tr>
                    <th><label for="subject1">과목1</label></th>
                    <td><select type="text" id="subject1" name="subject1">
                        <option value="4.5" selected>A+</option>
                        <option value="4.0" >A0</option>
                        <option value="3.5">B+</option>
                        <option value="3.0">B0</option>
                        <option value="2.5">C+</option>
                        <option value="2.0">C0</option>
                    </select></td>
                </tr>
                <tr>
                    <th><label for="subject2">과목2</label></th>
                    <td><select type="text" id="subject2" name="subject2">
                        <option value="4.5" selected>A+</option>
                        <option value="4.0" >A0</option>
                        <option value="3.5">B+</option>
                        <option value="3.0">B0</option>
                        <option value="2.5">C+</option>
                        <option value="2.0">C0</option>
                    </select></td>
                </tr>
                <tr>
                    <th><label for="subject3">과목3</label></th>
                    <td><select type="text" id="subject3" name="subject3">
                        <option value="4.5" selected>A+</option>
                        <option value="4.0" >A0</option>
                        <option value="3.5">B+</option>
                        <option value="3.0">B0</option>
                        <option value="2.5">C+</option>
                        <option value="2.0">C0</option>
                    </select></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                    <button type="submit" class="btn btn-primary btn-sm">저장</button>
                    <button type="reset" class="btn btn-primary btn-sm">초기화</button>
                    </td>
                </tr>
            </table>
*/
    )
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

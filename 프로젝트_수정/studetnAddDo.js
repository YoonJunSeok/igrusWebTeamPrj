window.onload = function(){
    document.getElementById("studentform").onsubmit = addStudent
    document.getElementById("removeButton").onclick = removeStudent
}

import axios from 'axios';

// 함수

function addStudent() {
  // studentAdd.html에서 입력받은 data 불러오기
  var num = document.getElementById('stdNum').value;      // 학번 schoolNum
  var name = document.getElementById('stdName').value;    // 이름 name
  var obj = document.getElementsByName('stdGender').length;
  var gender = "";                                        // 성별 gender
  for (var i=0;i<obj;i++) {
    if (document.getElementsByName('stdGender')[i].checked==true){
      gender+=document.getElementsByName('stdGender')[i].value;
  }}
  var date = document.getElementById('stdBirth').value;   // 생년월일 date
  var major = document.getElementById('stdMajor').value;  // 전공 major
  var s1 = document.getElementById('subject1');  // 성적1
  var subject1 = s1.options[s1.selectedIndex].value;
  var s2 = document.getElementById('subject2'); // 성적2
  var subject2 = s2.options[s2.selectedIndex].value;
  var s3 = document.getElementById('subject3'); // 성적3
  var subject3 = s3.options[s3.selectedIndex].value;

  // POST 요청
  axios.post('localhost:3000/studentInfo', {
      name : name,
      schoolNum : num,
      gender: gender,
      date : date,
      major : major,
      subject1 : subject1,
      subject2 : subject2,
      subject3 : subject3
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

function removeStudent() {
  // 삭제할 학번
  stdNum = document.getElementById('removeNum').value;
  if(stdNum==""){
      alert("학번을 입력하세요.");
  }
  else {
  alert("정보를 삭제하시겠습니까?");
  console.log(stdNum, "의 정보를 삭제합니다.");

  // 삭제
  axios({
    method: "DELETE",
    url: '/studentInfo',
    params:{
      "schoolNum": stdNum
    }
  }).then((res)=>{
    res.data
    console.log(res);
  }).catch((err)=>{
    console.log(err);
    throw new Error(error);
  });
}

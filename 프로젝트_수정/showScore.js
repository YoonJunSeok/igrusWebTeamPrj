function show(){
  // localstorage에서 student arr 가져오기
  studentArr = JSON.parse(localStorage.getItem("students"));
  // 확인할 학번
  stdNum = document.getElementById("schoolNum").value;

  // 확인
  if(stdNum==""){
        alert("학번을 입력하세요.");
  }  else {
  var list = '';
  for(let i=0; i< studentArr.length; i++){
      if (studentArr[i].schoolNum === stdNum) {
          list += studentArr[i];
      }
  }
  if (list === ''){
    list += stdNum + '학번을 가진 학생이 없습니다.';
    alert(list);
  }
  else {
    document.getElementById("result").innerText = list;
  }
  }
}

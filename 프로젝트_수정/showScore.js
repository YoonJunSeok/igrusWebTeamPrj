import axios from 'axios';

function show(){
  // 확인할 학번
  stdNum = document.getElementById("schoolNum").value;
  const url = ""

  axios.get(url, {
    params: {stdNum : stdNum}
  })
  .then((Response)=>{
    console.log(Response.data);
    
}).catch((Error)=>{
    console.log(Error);
})

  // 확인
  if(stdNum==""){
        alert("학번을 입력하세요.");
  }  else {
  var list = '';
  for(let i=0; i< studentArr.length; i++){
      if (studentArr[i].schoolNum === stdNum) {
          list += '이름 : '+studentArr[i].name+'\n'
          + '전공 : '+studentArr[i].major+'\n'
          + '과목1 : '+studentArr[i].subject1+'\n'
          + '과목2 : '+studentArr[i].subject2+'\n'
          + '과목3 : '+studentArr[i].subject3+'\n'
          + '석차 : '+ '\n\n';

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

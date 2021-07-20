
window.onload = function(){
    const studentData = JSON.parse(localStorage.getItem("students"));
    const gradedata = document.getElementById('gradedata');
    var maxlan=0;
    var minlan=100;
    
    var maxmath=0;
    var minmath=100;
    
    var maxeng=0;
    var mineng=100;
    
    var totallan=0;
    var lanavg;
    
    var tatalmath=0;
    var mathavg;
    
    var totaleng=0;
    var engavg;
    
    var manylan = new Array(101);
    var manymath = new Array(101);
    var manyeng = new Array(101);
    for(var i = 0; i < 101; i++) //초기화
    {   
            manylan[0] = 0;
            manymath[0] = 0;
            manyeng[0] = 0;
    }
    var lanmode=0;//국어최반값 점수
    var lancount=0;//최빈값 횟수
    
    var mathmode=0;
    var mathcount=0;
    
    var engmode=0;
    var engcount=0;
    var count = 0;

    
    for (key in studentData) 
    {
        manylan[studentData[key].lan]++;
        manymath[studentData[key].math]++;
        manyeng[studentData[key].math]++;
        if(maxlan < studentData[key].lan) //국어 최대값 설정
        {
            maxlan = studentData[key].lan;
        }
        if(maxmath < studentData[key].math)//수학 최대값
        {
            maxmath = studentData[key].math;
        }
        if(maxeng < studentData[key].eng)//영어 최대값
        {
            maxeng = studentData[key].eng;
        }
        if(minlan > studentData[key].lan)//국어 최소값 설정
        {       
            minlan = studentData[key].lan;
        }
        if(minmath > studentData[key].math)//수학 최소값
        {
            minmath = studentData[key].math;
        }  
        if(mineng > studentData[key].eng)// 영어 최소값
        {
            mineng = studentData[key].eng;
        }
        totallan += studentData[key].lan;//국어총합
        totalmathn += studentData[key].math;//수학총합
        totaleng += studentData[key].eng;//영어총합
        count++;
    }
    for(var i = 0; i <101; i++) //최빈값
    {
        if(lancount < manylan[i])
        {
            lancount = manylan[i];
            lanmode = i;
        }
        if(mathcount < manymath[i])
        {
            mathcount = manymath[i];
            mathmode = i;
        }
        if(mathcount < manyengn[i])
        {
            engcount = manyeng[i];
            engmode = i;
        }
    }
    lanavg = totallan / count;
    mathavg = tatalmath / count;
    engavg = totaleng / count;
    
    gradedata.innerHTML = '<tr><td>국어</td><td>' + maxlan + '</td><td>'+minlan+'</td><td>'+ lanmode + '</td><td>'+lanavg+'</td></tr>'+'<tr><td>수학</td><td>' + maxmath + '</td><td>'+minmath+'</td><td>'+ mathmode + '</td><td>'+mathavg+'</td></tr>'+'<tr><td>영어</td><td>' + maxeng + '</td><td>'+mineng+'</td><td>'+ engmode + '</td><td>'+engavg+'</td></tr>';
}
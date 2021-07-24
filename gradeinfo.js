import axios from "axios";
const url = '';

window.onload = function(){
    axios.get(url).then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})
    const sub1 = document.getElementById('sub1');
    const sub2 = document.getElementById('sub2');
    const sub3 = document.getElementById('sub3');
    const gradedata = document.getElementById('gradedata');
    
    var totalavg = 0;
    var totalmax = 0;
    var totalmin = 4.5;
    
    var privatetotal = 0;
    var privateavg = 0;

    var total1 = 0;
    var total2 = 0;
    var total3 = 0;

    var avg1 = 0;
    var avg2 = 0;
    var avg3 = 0;

    var count1 = new Array(9);
    var count2 = new Array(9);
    var count3 = new Array(9);

    var in1 ='';
    var in2 ='';
    var in3 ='';

    for(var i = 0; i < 9; i++) //초기화
    {   
            count1[i] = 0;
            count2[i] = 0;
            count3[i] = 0;
    }
    
    // var lanmode=0;//국어최반값 점수
    // var lancount=0;//최빈값 횟수
    
    // var mathmode=0;
    // var mathcount=0;
    
    // var engmode=0;
    // var engcount=0;
    var count = 0;

    
    for (key in studentData) 
    {   
        privatetotal = studentData[key].subject1 + studentData[key].subject2 + studentData[key].subject3;
        privateavg = privatetotal / 3;
        totalavg = totalavg + privateavg;
        if(totalmax < privateavg)
        {
            totalmax = privateavg;
        }
        if (totalmin > privateavg)
        {
            totalmin = privateavg;
        }
        
        total1 = total1 + parseInt(studentData[key].subject1);
        total2 = total2 + parseInt(studentData[key].subject2);
        total3 = total3 + parseInt(studentData[key].subject3);

        if(studentData[key].subject1 == "0.5")
        {
            count1[0]++;
        }
        else if(studentData[key].subject1 == "1.0")
        {
            count1[1]++;
        }
        else if(studentData[key].subject1 == "1.5")
        {
            count1[2]++;
        }
        else if(studentData[key].subject1 == "2.0")
        {
            count1[3]++;
        }
        else if(studentData[key].subject1 == "2.5")
        {
            count1[4]++;
        }
        else if(studentData[key].subject1 == "3.0")
        {
            count1[5]++;
        }
        else if(studentData[key].subject1 == "3.5")
        {
            count1[6]++;
        }
        else if(studentData[key].subject1 == "4.0")
        {
            count1[7]++;
        }
        else if(studentData[key].subject1 == "4.5")
        {
            count1[8]++;
        }//과목1

        if(studentData[key].subject2 == "0.5")
        {
            count2[0]++;
        }
        else if(studentData[key].subject2 == "1.0")
        {
            count2[1]++;
        }
        else if(studentData[key].subject2 == "1.5")
        {
            count2[2]++;
        }
        else if(studentData[key].subject2 == "2.0")
        {
            count2[3]++;
        }
        else if(studentData[key].subject2 == "2.5")
        {
            count2[4]++;
        }
        else if(studentData[key].subject2 == "3.0")
        {
            count2[5]++;
        }
        else if(studentData[key].subject2 == "3.5")
        {
            count2[6]++;
        }
        else if(studentData[key].subject2 == "4.0")
        {
            count2[7]++;
        }
        else if(studentData[key].subject2 == "4.5")
        {
            count2[8]++;
        }// 과목2

        if(studentData[key].subject3 == "0.5")
        {
            count3[0]++;
        }
        else if(studentData[key].subject3 == "1.0")
        {
            count3[1]++;
        }
        else if(studentData[key].subject3 == "1.5")
        {
            count3[2]++;
        }
        else if(studentData[key].subject3 == "2.0")
        {
            count3[3]++;
        }
        else if(studentData[key].subject3 == "2.5")
        {
            count3[4]++;
        }
        else if(studentData[key].subject3 == "3.0")
        {
            count3[5]++;
        }
        else if(studentData[key].subject3 == "3.5")
        {
            count3[6]++;
        }
        else if(studentData[key].subject3 == "4.0")
        {
            count3[7]++;
        }
        else if(studentData[key].subject3 == "4.5")
        {
            count3[8]++;
        }//과목3
        
        count++;
    }
    
    document.getElementById('high').innerHTML = totalmax;
    document.getElementById('low').innerHTML = totalmin;
    
    in1 = '<tr><td>학생수</td><td>' + count1[0] + '</td><td>' + count1[1] + '</td><td>' + count1[2] + '</td><td>' + count1[3] + '</td><td>'
    + '</td><td>' + count1[4] + '</td><td>' + count1[5] + '</td><td>' + count1[6] + '</td><td>' + count1[7] + '</td><td>' + count1[8] + '</td></tr>'
    + '<tr><td>비율</td><td>' + count1[0] / count + '</td><td>' + count1[1] / count + '</td><td>' + count1[2] / count+ '</td><td>' + count1[3] / count+ '</td><td>'
    + '</td><td>' + count1[4] / count + '</td><td>' + count1[5] / count + '</td><td>' + count1[6] / count + '</td><td>' + count1[7] / count + '</td><td>' + count1[8] / count + '</td></tr>'
    + "<tr><td>평균</td><td colspan='9'>" + total1 / count + '</td></tr>';

    sub1.innerHTML = in1;

    in2 = '<tr><td>학생수</td><td>' + count2[0] + '</td><td>' + count2[1] + '</td><td>' + count2[2] + '</td><td>' + count2[3] + '</td><td>'
    + '</td><td>' + count2[4] + '</td><td>' + count2[5] + '</td><td>' + count2[6] + '</td><td>' + count2[7] + '</td><td>' + count2[8] + '</td></tr>'
    + '<tr><td>비율</td><td>' + count2[0] / count + '</td><td>' + count2[1] / count + '</td><td>' + count2[2] / count+ '</td><td>' + count2[3] / count+ '</td><td>'
    + '</td><td>' + count2[4] / count + '</td><td>' + count2[5] / count + '</td><td>' + count2[6] / count + '</td><td>' + count2[7] / count + '</td><td>' + count2[8] / count + '</td></tr>'
    + "<tr><td>평균</td><td colspan='9'>" + total2 / count + '</td></tr>';

    sub2.innerHTML = in2;

    in3 = '<tr><td>학생수</td><td>' + count3[0] + '</td><td>' + count3[1] + '</td><td>' + count3[2] + '</td><td>' + count3[3] + '</td><td>'
    + '</td><td>' + count3[4] + '</td><td>' + count3[5] + '</td><td>' + count3[6] + '</td><td>' + count3[7] + '</td><td>' + count3[8] + '</td></tr>'
    + '<tr><td>비율</td><td>' + count3[0] / count + '</td><td>' + count3[1] / count + '</td><td>' + count3[2] / count+ '</td><td>' + count3[3] / count+ '</td><td>'
    + '</td><td>' + count3[4] / count + '</td><td>' + count3[5] / count + '</td><td>' + count3[6] / count + '</td><td>' + count3[7] / count + '</td><td>' + count3[8] / count + '</td></tr>'
    + "<tr><td>평균</td><td colspan='9'>" + total3 / count + '</td></tr>';

    sub3.innerHTML = in3;
    
}
function store() { // localstorage에 section 저장
    var language = document.getElementById('language').value; 
    var math = document.getElementById('math').value;
    var english = document.getElementById('english').value;

    const section = {
        language: language,
        math: math,
        english: english,
    }

    window.localStorage.setItem(language, JSON.stringify(section)); 
}

function Dlesection() {
    // localStorage에 있는 section 삭제(초기화)
    var language = document.getElementById('language').value;
    var math = document.getElementById('math').value;
    var english = document.getElementById('english').value;
}

window.onload = function(){
    document.getElementById("save processing program form").onsubmit = store
}
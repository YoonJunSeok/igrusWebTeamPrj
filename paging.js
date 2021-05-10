var totalData = 1000;
var dataPerPage = 20;
var pageCnt = 5;

function paging(totalData, dataPerPage, pageCnt, curPage) {

    var totalPage = Math.ceil(totalData / dataPerPage);
    var pageGroup = Math.ceil(curPage / pageCnt);

    var last = pageGroup * pageCnt;
    if (last > totalPage) 
        last = totalPage;
    var first = last - (pageCnt - 1);
    var next = last + 1;
    var prev = first - 1;

}(function () {
    "use strict";

    function Pagination() {

        const objJson = JSON.parse(localStorage.getItem("students"));
        //const test = JSON.parse(localStorage.getItem("key"));

        const prevButton = document.getElementById('button_prev');
        const nextButton = document.getElementById('button_next');
        const clickPageNumber = document.querySelectorAll('.clickPageNumber');

        let current_page = 1;
        let records_per_page = 5;

        this.init = function () {
            changePage(1);
            pageNumbers();
            selectedPage();
            clickPage();
            addEventListeners();
        }

        let addEventListeners = function () {
            prevButton.addEventListener('click', prevPage);
            nextButton.addEventListener('click', nextPage);
        }

        let selectedPage = function () {
            let page_number = document
                .getElementById('page_number')
                .getElementsByClassName('clickPageNumber');
            for (let i = 0; i < page_number.length; i++) {
                if (i == current_page - 1) {
                    page_number[i].style.opacity = "1.0";
                } else {
                    page_number[i].style.opacity = "0.5";
                }
            }
        }

        let checkButtonOpacity = function () {
            current_page == 1
                ? prevButton
                    .classList
                    .add('opacity')
                : prevButton
                    .classList
                    .remove('opacity');
            current_page == numPages()
                ? nextButton
                    .classList
                    .add('opacity')
                : nextButton
                    .classList
                    .remove('opacity');
        }

        let changePage = function (page) {

            const listingTable = document.getElementById('listingTable');

            if (page < 1) {
                page = 1;
            }
            if (page > (numPages() - 1)) {
                page = numPages();
            }

            listingTable.innerHTML = "";

            // print table
            for ( var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
                var row = '<tr><td>' + objJson[i].name + '</td><td>' + objJson[i].schoolNum + '</td><td>' +
                        objJson[i].major + '</td><td>' + objJson[i].subject1 + '</td><td>' +
                        objJson[i].subject2 + '</td><td>' + objJson[i].subject3 + '</td><td>' +
                        objJson[i].subject4 + '</td><td>' + objJson[i].subject5 + '</td><td>' +
                        objJson[i].subject6 + '</td></tr>';

                listingTable.innerHTML += row;
            }

            checkButtonOpacity();
            selectedPage();
        }

        let prevPage = function () {
            if (current_page > 1) {
                current_page--;
                changePage(current_page);
            }
        }

        let nextPage = function () {
            if (current_page < numPages()) {
                current_page++;
                changePage(current_page);
            }
        }

        let clickPage = function () {
            document.addEventListener('click', function (e) {
                // nodeName 현재 노드의 이름을 string 형식으로 반환.
                if (e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                    current_page = e.target.textContent;
                    changePage(current_page);
                }
            });
        }

        // print page numbers
        let pageNumbers = function () {
            let pageNumber = document.getElementById('page_number');
            pageNumber.innerHTML = "";

            for (let i = 1; i < numPages() + 1; i++) {
                pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
            }
        }

        // return total page count
        let numPages = function () {
            return Math.ceil(objJson.length / records_per_page);
        }
    }
    let pagination = new Pagination();
    pagination.init();

})();
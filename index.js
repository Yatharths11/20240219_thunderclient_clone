document.addEventListener('DOMContentLoaded', function () {
    // Get all left-tab-buttons
    const tabButtons = document.querySelectorAll('.left-tab-button');

    // Add click event listener to each tab button
    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Remove 'selected' class from the currently selected tab button
            const currentlySelectedButton = document.querySelector('.left-tab-button.selected');
            if (currentlySelectedButton) {
                currentlySelectedButton.classList.remove('selected');
            }

            // Add 'selected' class to the clicked tab button
            button.classList.add('selected');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all left-tab-buttons
    const tabButtons = document.querySelectorAll('.right-tab-button');

    // Add click event listener to each tab button
    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Remove 'selected' class from the currently selected tab button
            const currentlySelectedButton = document.querySelector('.right-tab-button.selected');
            if (currentlySelectedButton) {
                currentlySelectedButton.classList.remove('selected');
            }

            // Add 'selected' class to the clicked tab button
            button.classList.add('selected');
        });
    });
});

var status
var status_text

let result 
var api_address = (document.getElementById('searchbar')).value
console.log(api_address)
// fetch(api_address)
// .then((response)=>{
//     status_text = response.statusText;
//     // status = response.status;
// })
// console.log(status_text,status)


function get_fetch(){
    var api_address = document.getElementById('searchbar').value
    fetch('https://dog-api.kinduff.com/api/facts')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(typeof data);
        document.getElementById('print_response').innerText = JSON.stringify(data);
    })




}
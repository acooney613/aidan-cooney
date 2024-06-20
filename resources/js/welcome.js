// javascript file for welcome page

const popupLinkBYU = document.getElementById('BYU-Popup');
const closeBtnBYU = document.getElementById('closeBtnBYU');
const popupBYU = document.getElementById('popup-BYU');
const popupLinkUT = document.getElementById('UT-Popup');
const closeBtnUT = document.getElementById('closeBtnUT');
const popupUT = document.getElementById('popup-UT');

// Popup for Brigham Young University Information
function showPopupBYU() {
    popupBYU.style.display = 'block';
    popupUT.style.display = 'none';
}

function hidePopupBYU() {
    popupBYU.style.display = 'none';
}

popupLinkBYU.addEventListener('click', showPopupBYU);
closeBtnBYU.addEventListener('click', hidePopupBYU);

// Popup for University of Texas Information

function showPopupUT() {
    popupUT.style.display = 'block';
    popupBYU.style.display = 'none';
}

function hidePopupUT() {
    popupUT.style.display = 'none';
}

popupLinkUT.addEventListener('click', showPopupUT);
closeBtnUT.addEventListener('click', hidePopupUT);

document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});
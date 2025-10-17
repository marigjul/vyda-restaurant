document.addEventListener('DOMContentLoaded', function () {
    var dateInput = document.getElementById('daySelect');

    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var dd = String(today.getDate()).padStart(2, '0');
    var minDate = yyyy + '-' + mm + '-' + dd;

    dateInput.min = minDate;
})

// This code has been written with the help of chatGPT, because Date functions in javascript are very confusing. 
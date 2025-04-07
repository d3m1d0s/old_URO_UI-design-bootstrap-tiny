document.addEventListener("DOMContentLoaded", function () {
    alert("Hello, Bootstrap!");
});

$(document).ready(function() {
    $('#authorButton').click(function() {
        $('#authorModal').modal('show');
    });
});

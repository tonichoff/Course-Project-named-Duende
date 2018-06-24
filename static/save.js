function saveImg() {
    let digit_image = canvas.toDataURL('img/jpeg');
    $.ajax({
        type: "POST",
        url: "/hook",
        data: {
            imageBase64: digit_image
        }
    }).done(function (response) {
        console.log(response)
        let result = document.getElementById("result");
        let json = jQuery.parseJSON(response);
        result.alt = json.digit;
        result.src = json.image;
    });
}

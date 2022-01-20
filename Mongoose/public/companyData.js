$(document).ready(function() {
    $("#registerCompanyForm").click(() => {
        $("#registerForm").toggleClass('invisible')
    })

    $("#submitRegisterForm").click((e) => {
        e.preventDefault()
        const data = {
            name: $("#name").val(),
            registerNumber: $("#registerNumber").val(),
            city: $("#city").val(),
            province: $("#province").val(),
            creationDate: $("#creationDate").val(),
            phoneNumber: $("#phoneNumber").val(),
        }
        $.ajax({
            method: "POST",
            url: `/company/create`,
            data,
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                }, 3000)
            },
            error: function(err){
                console.log(err)
            }
        })
    })

})


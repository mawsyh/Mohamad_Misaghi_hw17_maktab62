$(document).ready(function() {
    let companies  = $("#companies").html()
    companies = companies.split("},")

    $(`#delete0`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum0`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
        })
    $(`#delete1`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum1`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $(`#delete2`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum2`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $(`#delete3`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum3`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $(`#delete4`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum4`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $(`#delete5`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum5`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $(`#delete6`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum6`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $(`#delete7`).click(() => {
        $.ajax({
            method: "POST",
            url: `/company/delete`,
            data: {
                registerNumber: $(`#regNum7`).html(),
            },
            success: function(data) {
                $('#successMessage').toggleClass('invisible')
                setTimeout(function(){
                    $('#successMessage').toggleClass('invisible')
                    location.reload();
                }, 3000)

            },
            error: function(err){
                console.log(err)
            }
        })
    })




    console.log('lol')
})


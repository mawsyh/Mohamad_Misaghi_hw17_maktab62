$(document).ready(function() {
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
    $(`#info0`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId0`).html()}`)
    })
    $(`#info1`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId1`).html()}`)
    })
    $(`#info2`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId2`).html()}`)
    })
    $(`#info3`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId3`).html()}`)
    })
    $(`#info4`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId4`).html()}`)
    })
    $(`#info5`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId5`).html()}`)
    })
    $(`#info6`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId6`).html()}`)
    })
    $(`#info7`).click(() => {
        window.location.replace(`http://localhost:6006/company/registered/${$(`#companyId7`).html()}`)
    })


})


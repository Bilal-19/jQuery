// 1. Hide / Show
$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide()
    }),
        $("#show").click(function () {
            $("p").show()
        })
})


// 2. toggle
$(document).ready(function () {
    $("#show-content").click(function () {
        $("#collapse").toggle()
    })
})


// 2. Fade
// fade mean to gradually disappear
// fadeIn() - Display the element 
// To check the work of "fade", set display property of the element to none
$(document).ready(function () {
    $("#fade-in").click(function () {
        $("#blue-box").fadeIn("slow")       //speed parameters: slow, fast, milliseconds
    })
})

// fadeOut() - Hide the element
$(document).ready(function () {
    $("#fade-out").click(function () {
        $("#orange-box").fadeOut("fast")   //speed parameters: slow, fast, milliseconds
    })
})

// fadeToggle()
// Toggle between fadeIn() and fadeOut() elements
$(document).ready(function () {
    $("#fade-toggle").click(function () {
        $("#red-box").fadeToggle()    //speed parameters: slow, fast, milliseconds
    })
})

// fadeTo()
// Allow fade to a give opacity between 0 and 1
$(document).ready(function () {
    $("#fade-to").click(function () {
        $("#green-box").fadeTo("slow", 0.5) //speed parameter, opacity
    })
})

// 3. Slide
// Slide methods slide element up and down

// slide up
$(document).ready(function () {
    $("#slide-up").click(function () {
        $("#flip-container-up").slideUp("fast")
    })
})



// slide down
$(document).ready(function () {
    $("#slide-down").click(function () {
        $("#flip-container-down").slideDown("fast")
    })
})

// slide toggle
// toggle between slide down and slide up
$(document).ready(function () {
    $("#slide-toggle").click(function () {
        $("#flip-container-toggle").slideToggle("slow")
    })
})

// 4. Animate


// 5. stop()


// 6. callback


// 7. Chaining
// Commonly Used jQuery Event Methods

// 1. document.ready()
// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

// 2. click()
// This event executed when the user click on an HTML element
// Explanation: When the click event fire on an element with id = "hide-btn", hide that button element
$(document).ready(
    function () {
        $("#hide-btn").click(function () { $(this).hide() })
    }
)


// 3. dblclick()
// This event executed when the user double click on an HTML element
$(document).ready(
    function () {
        $("#dbclick").dblclick(
            function () { alert('User double click on the "submit button"') }
        )
    }
)

// 3. mouseenter()
// This event executed when the mouse pointer enter the HTML element
$(document).ready(
    function () {
        $("#mouse-event").mouseenter(
            function () {
                alert("Mouse is inside the boundary of div.")
            }
        )
    }
)


// 4. mouseleave()
// This event executed when the mouse pointer leave the HTML element
$(document).ready(
    function () {
        $("#mouse-event").mouseleave(
            function () {
                alert("Mouse is outside of the boundary of the div")
            }
        )
    }
)

// 5. mousedown()
// This event executed when the left, right or middle button of the mouse is pressed while the mouse is over the HTML element.
$(document).ready(
    function () {
        $("#mouse-down-leave").mousedown(
            function () {
                alert("Left/Right/Middle button of the mouse was clicked")
            })
    }
)

// 6. mouseleave()
// This event executed when the left, right or middle button of the mouse is released while the mouse is over the HTML element.
$(document).ready(
    function () {
        $("mouse-down-leave").mouseup(
            function () {
                alert("Left/Right/Middle button of the mouse was released")
            }
        )
    }
)

// 7. hover()
// method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
// The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML element:
$(document).ready(
    function () {
        $("#hover").hover(
            function () {
                alert("User hover over the login button")
            },
            function () {
                alert("User leave the login button")
            }
        )
    }
)

// 8. focus()
// This event is executed when the form field get focused.
$(document).ready(
    function () {
        $("#focus-event").focus(
            function () {
                $(this).css("padding", "10px")
            }
        )
    }
)

// 9. blur()
// This event is executed when the form field leave focus
$(document).ready(
    function () {
        $("#blur-event").blur(
            function () {
                $(this).css("background-color", "lightgrey")
            }
        )
    }
)


// The "on()" method
// Used to attach one or more than one event handlers for the selected element
$(document).ready(
    function () {
        $("h4").on({
            mouseenter: function () { $(this).css("color", "red") },
            mouseleave: function () { $(this).css("color", "black") },
            click: function () { $(this).css({ "background-color": "yellow", "padding": "3px" }) }
        }
        )
    }
)


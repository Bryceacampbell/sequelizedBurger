$(document).ready(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("succesfully added new burger");
            location.reload();
        });
    });

    $(".devour-btn").on("click", function (event) {
        
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");
        newDevoured = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed Devoured to: ", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
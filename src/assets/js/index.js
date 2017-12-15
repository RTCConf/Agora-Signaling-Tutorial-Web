(function($) {
    $(() => {
        $("#join-meeting").click(function(e) {
            //join btn clicked
            e.preventDefault();
            var account = $("#account-name").val() || "";
            if (account) {
                //account has to be a non empty numeric value
                window.location.href = `meeting.html?account=${account}`;
            } else {
                $("#account-name").removeClass("is-invalid").addClass("is-invalid");
            }
        });
    });
}(jQuery));
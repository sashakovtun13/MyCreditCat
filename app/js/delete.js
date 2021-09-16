jQuery(function($) {

    $(document).on('click', '.btn_del', function() {
        // получение ID  
        let credit_id = $(this).attr('data-id');
        $.ajax({
            url: "./app/php/delete.php",
            type: "POST",
            data: "id=" + JSON.stringify(credit_id),
            success: function(result) {

                showData();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
        return false;
    });
});
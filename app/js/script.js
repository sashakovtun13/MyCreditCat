jQuery(function($) {




    $(document).on('click', '.add_pay', function() {
        // получение ID  
        let credit_id = $(this).attr('data-id');


        $.ajax({
            url: "./app/php/add_pay.php",
            type: "POST",
            data: "id=" + JSON.stringify(credit_id),
            success: function(result) {
                showData(credit_id);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
        // $('#' + credit_id).attr('open', '');
        return false;
    });
});

function Rename_title(text) {
    $("#header_title").html(text);
}
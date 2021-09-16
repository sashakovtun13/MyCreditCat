jQuery(function($) {

    showData();

});

function showData(open_id) {

    //доработать ????



    // let empty = `<img src="./app/img/empty.png" alt="" class="empty">
    // <button class="bottom_btn add_credit">+</button>`;
    // $(".faq").html(empty);
    $.getJSON("./data.json", function(data) {
        // console.log(data);
        console.log(data.length);
        if (data.length > 0) {
            let out_html = "";
            $.each(data, function(key, val) {
                if (val.id == open_id) {
                    out_html += '<details id=\"' + val.id + '\" open><summary>' + val.name + '</summary><div class="credit"><div class="credit_mouths">';

                } else {
                    out_html += '<details id=\"' + val.id + '\"><summary>' + val.name + '</summary><div class="credit"><div class="credit_mouths">';

                }
                for (let i = 0; i < val.pay_months; i++) {
                    out_html += '<div class="mouth paid"></div>';

                }
                for (let i = 0; i < (val.months - val.pay_months); i++) {
                    out_html += '<div class="mouth"></div>';
                }
                out_html += '</div><div class="credit_amount">';
                out_html += '<div class="p_amount">' + val.pay_amount + '</div><div class="date">до ' + val.data_end + '</div><div class="a_amount">' + val.all_amount + '</div></div>';
                // добавить data
                out_html += '<div class="credit_edit"><h2 class="pay">' + val.one_amount + '</h2><button class="add_pay" data-id=\"' + val.id + '\">+</button>';
                out_html += '<div><img src="./app/img/edit.svg" alt="" data-id=\"' + val.id + '\"><img class="btn_del" src="./app/img/delete.svg" alt=""data-id=\"' + val.id + '\"></div></div></div></details>';

            });
            Rename_title("Все кредиты");
            out_html += '<button class="bottom_btn add_credit">+</button>';
            $(".faq").html(out_html);
        } else {
            let empty = `<img src="./app/img/empty.png" alt="" class="empty">
    <button class="bottom_btn add_credit">+</button>`;
            $(".faq").html(empty);
        }
    });



}

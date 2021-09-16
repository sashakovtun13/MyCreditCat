jQuery(function($) {



    $(document).on('click', '.add_credit', function() {




        let create_credit_html = `
            <form id='create-credit-form' action='#' method='post'>
            <p>Название кредита</p>
            <input type="text" name="name" required>
            <p>Вся сумма</p>
            <input type="number" name="all_amount" required>
            <p>Конечная дата</p>
            <input type="date" name="data_end" required>
            <p>Количество месяцов</p>
            <input type="number" name="months" required>
            <p>Один платеж</p>
            <input type="number" name="one_amount" required>
            <button type="submit">Добавить</button>
        </form>
        '<button class="bottom_btn back_to_credit"><</button>'
            `;
        Rename_title("Добавление кредита");
        $(".faq").html(create_credit_html);


    });


    // будет работать, если создана форма товара 
    $(document).on('submit', '#create-credit-form', function() {

        let data_f = $(this).serialize();


        $.ajax({
            url: "./app/php/create.php",
            type: "POST",
            data: data_f,
            success: function(result) {
                showData();
            },
            error: function(xhr, resp, text) {
                // вывести ошибку в консоль 
                console.log(xhr, resp, text);
            }
        });

        return false;




    });

    $(document).on('click', '.back_to_credit', function() {
        showData();
    });
});
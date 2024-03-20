
function ConvertNumberToWords(number) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    number = number.toString();
    var atemp = number.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}

function printInvoice(e) {
    document.body.classList.add("print");
    let el = document.getElementById("main_formm");
    el.classList.remove("hidden");
    html2pdf(el, {
        filename:'GE#'+ e + '.pdf'
    });
}






document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById('but');
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        const form_main = document.getElementById('form_main');
        form_main.classList.remove("hidden");

        const sample_form = document.getElementById('sample_form');
        sample_form.classList.add("hidden");
        const date_input = document.getElementById('date_input').value;
        const date_output = document.getElementById('date_output');
        date_output.textContent = `${date_input}`;

        const val = document.getElementById('gstinput');
        const half_gst = document.querySelectorAll(".gst");
        const mainval = parseFloat(val.value);
        const without_gst = parseFloat((mainval / 1.05).toFixed(2));
        const gst = parseFloat((mainval - without_gst).toFixed(2)) / 2;
        const full_value = parseFloat(2 * gst + without_gst).toFixed(2);

        const basic_value = document.querySelectorAll('.basic_value');
        basic_value.forEach(function (e) {
            e.textContent = `${without_gst}`;
        });
        half_gst.forEach(function (element) {
            element.textContent = `${gst}`;
        });

        const main_with_gst_value = document.getElementById('main_with_gst_value');
        main_with_gst_value.textContent = `${full_value}`;

        const rounded = document.getElementById('rounded');
        const rounded_value = (mainval - full_value).toFixed(2);
        rounded.textContent = `${rounded_value}`;

        const car_details_input = document.getElementById('car_details_input').value;
        const car_details = document.getElementById('car_details');
        car_details.textContent = `${car_details_input.toUpperCase()}`;
        const color_input = document.getElementById('color_input').value;
        const color = document.getElementById('color');
        color.textContent = `${color_input.toUpperCase()} COLOR`;
        const ch_input = document.getElementById('ch_input').value;
        const ch_output = document.getElementById('ch_output');
        ch_output.textContent = `${ch_input.toUpperCase()}`;
        const quantity_input = document.getElementById('quantity_input').value;
        const quantity_output = document.getElementById('quantity_output')
        quantity_output.textContent = `${quantity_input} NOS`;

        const word = ConvertNumberToWords(mainval);
        const amount_word = document.getElementById('amount_word');
        amount_word.textContent = `${word.toUpperCase()} ONLY.`;



        const biller_name_input = document.getElementById('biller_name_input');
        const biller_name_value = biller_name_input.value;

        const spanBillerName = document.getElementById('biller_name');
        spanBillerName.textContent = `${biller_name_value.toUpperCase()}`;

        const city_name_input_val = document.getElementById('city').value;
        const PS_input_val = document.getElementById('P.S').value;
        const PO_input_val = document.getElementById('P.O').value;
        const dist_input_val = document.getElementById('dist').value;
        const pincode_input_val = document.getElementById('pincode').value;
        const invoice_input_val = document.getElementById('invoice').value;


        const city_output = document.getElementById('city_output');
        city_output.textContent = `${city_name_input_val.toUpperCase()} , ${PS_input_val.toUpperCase()} ,${PO_input_val.toUpperCase()}`;
        const dist_output = document.getElementById('dist_output');
        dist_output.textContent = `${dist_input_val.toUpperCase()} , WEST BENGAL`;
        const pincode_output = document.getElementById('pincode_output');
        pincode_output.textContent = `${pincode_input_val}`;
        const invoice_bill = document.getElementById('invoice_bill');
        invoice_bill.textContent = `${invoice_input_val}`;
        const gst_name_input = document.getElementById('gst_name_input').value;
        const gst_output=document.getElementById('gstname');
        gst_output.textContent=`${gst_name_input.toUpperCase()}`;
        const print = document.getElementById('printBtn');
        print.addEventListener('click', function () {
            printInvoice(invoice_input_val);
        });
    });
});

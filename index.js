let choice;
choice = 'Monthly'
function changeAnnuallyToMonthly() {
    if (choice === 'Monthly') {


        document.getElementById('basic-price').textContent = "$199.99"
        document.getElementById('professional-price').textContent = "$249.99"
        document.getElementById('master-price').textContent = "$399.99"
        choice = "Annual";

    } else {

        document.getElementById('basic-price').textContent = "$19.99"
        document.getElementById('professional-price').textContent = "$24.99"
        document.getElementById('master-price').textContent = "$39.99"
        choice = "Monthly"
    }
}




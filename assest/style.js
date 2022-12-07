let billAmount = document.getElementById('bill-amount');
let discount = document.getElementById('discount');
let discountAmount = document.getElementById('discountAmount');
let total = document.getElementById('total');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    billAmount = Number(billAmount.value);
    discount = Number(discount.value);

         let calculatedTip =  (discount/100) * billAmount;
         discountAmount.value = calculatedTip;
         let calculatedTotal = billAmount - calculatedTip
         total.value =  calculatedTotal
}
)
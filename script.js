// function CountPrice(){
//     const price = 45000
//     const discount = prompt('How much do you buy this product?')
//     const totalPrice = price * discount 
//     alert (`The total price after discount is ${totalPrice} won`)

//     const userAgree = confirm('Are you sure you want to buy this product?')

//     alert (`Siz qiymati ${totalPrice} product sotib olganingiz uchun tashakkur`)
// }


function CountPrice(price) {
    const quantity = Number(prompt('Сколько штук вы хотите купить?'));

    if (isNaN(quantity) || quantity <= 0) {
        alert("Пожалуйста, введите корректное количество.");
        return;
    }

    const totalPrice = price * quantity;
    alert(`Общая стоимость: ${totalPrice} сум`);

    const userAgree = confirm('Вы уверены, что хотите купить этот товар?');

    if (userAgree) {
        alert(`Спасибо за покупку! Итоговая сумма: ${totalPrice} сум`);
    } else {
        alert("Покупка отменена.");
    }
}
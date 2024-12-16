// Получаем элементы
const modal = document.getElementById('taxiModal');
const orderTaxiBtn = document.getElementById('orderTaxiBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const taxiForm = document.getElementById('taxiForm');

// Открытие модального окна при клике на кнопку
orderTaxiBtn.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна при клике на крестик (кнопка закрытия)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна, если пользователь кликает вне окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка формы (пример)
taxiForm.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;

    // Выводим данные заказа в консоль (в реальной ситуации их нужно отправить на сервер)
    console.log('Заказ такси:', { name, phone, pickup, destination });

    // Закрыть модальное окно после отправки
    modal.style.display = "none";
    
    // Можно добавить уведомление или сообщение о подтверждении заказа
    alert("Ваш заказ принят! Мы скоро с вами свяжемся.");
}

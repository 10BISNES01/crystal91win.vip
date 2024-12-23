const ADMIN_PASSWORD = '23aw5f6g77Kasino77'; // Пароль для входа в админку

// Проверка на наличие админа в localStorage
if (localStorage.getItem('isAdminLoggedIn') === 'true') {
    showAdminDashboard();
}

// Обработчик формы для входа
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;

    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        showAdminDashboard();
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});

// Показать админскую панель
function showAdminDashboard() {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';

    // Здесь можно добавить код для загрузки данных пользователей, отчетов и т.д.
    loadUserList();
}

// Загрузка списка пользователей
function loadUserList() {
    const userList = [
        { username: 'player1', balance: 1000 },
        { username: 'player2', balance: 500 },
        { username: 'player3', balance: 1200 }
    ];

    const userListElement = document.getElementById('user-list');
    userListElement.innerHTML = ''; // Очищаем текущий список

    userList.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username} - Баланс: $${user.balance}`;
        userListElement.appendChild(listItem);
    });
}

// Показать отчет (например, данные по прибыли, транзакциям)
function showReport() {
    alert('Отчет: Здесь будет информация о прибыли, проигрышах и т.д.');
}

// Выход из админки
function logout() {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.reload();
}

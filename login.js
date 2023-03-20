var userName = document.getElementById('username');
var password = document.getElementById('password');
var loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(userName.value === 'admin@gmail.com' && password.value === '123456') {
        alert('Đăng nhập thành công!');
        window.location.href = "https://fullstack.edu.vn/";
    } else {
        alert('Đăng nhập thất bại vui lòng kiểm tra lại tài khoản hoặc mật khẩu!');
    }
})

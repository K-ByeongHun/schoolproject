document.addEventListener('DOMContentLoaded', (event) => {
  const showPasswordButton = document.getElementById('showPasswordButton');
  const passwordInput = document.getElementById('password');
  const showCheckPasswordButton = document.getElementById('showCheckPasswordButton');
  const checkPasswordInput = document.getElementById('checkpassword');

  showPasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showPasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordInput.type = 'password';
      showPasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
  });

  showCheckPasswordButton.addEventListener('click', () => {
    if (checkPasswordInput.type === 'password') {
      checkPasswordInput.type = 'text';
      showCheckPasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      checkPasswordInput.type = 'password';
      showCheckPasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
  });

  // 폼 제출 및 유효성 검사
  const form = document.getElementById('signupForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkpassword = document.getElementById('checkpassword').value;
    const name = document.getElementById('name').value;
    const emailWarning = document.getElementById('emailWarning');
    const passwordWarning = document.getElementById('passwordWarning');
    const checkpasswordWarning = document.getElementById('checkpasswordWarning');
    const nameWarning = document.getElementById('nameWarning');
    let isError = false; // 오류 여부 변수 초기화

    function isValidEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // gmail만 사용
      return re.test(email);
    }

    function hasSpecialCharacter(password) {
      const specialCharacterRegex = /[$&+,:;=?@#|'<>.^*()%!-]/; // 비밀번호에 특수문자 필수
      return specialCharacterRegex.test(password);
    }

    const nameRegex = /^[a-zA-Z가-힣\s]+$/; // 이름 특수문자 제외

    if (!isValidEmail(email)) {
      emailWarning.textContent = '올바른 이메일 주소를 입력하세요.';
      isError = true;
    } else {
      emailWarning.textContent = ''; // 경고 메시지 없애기
    }

    if (!nameRegex.test(name)) {
      nameWarning.textContent = '이름에는 특수문자를 사용할 수 없습니다.';
      isError = true;
    } else {
      nameWarning.textContent = ''; // 경고 메시지 없애기
    }

    if (password.length < 8) {
      passwordWarning.textContent = '비밀번호는 최소 8자 이상이어야 합니다.';
      isError = true;
    } else {
      passwordWarning.textContent = ''; // 경고 메시지 없애기
    }

    if (!hasSpecialCharacter(password)) {
      passwordWarning.textContent = '비밀번호에는 특수 문자가 반드시 포함되어야 합니다.';
      isError = true;
    } else {
      passwordWarning.textContent = ''; // 경고 메시지 없애기
    }

    if (checkpassword !== password) {
      checkpasswordWarning.textContent = '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
      isError = true;
    } else {
      checkpasswordWarning.textContent = ''; // 경고 메시지 없애기
    }
    
    if (!isError) {
      // 서버로 데이터 전송
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password
        })
      })
      .then(response => response.text())
      .then(data => {
        alert(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  });

  // Enter 키로 폼 제출 방지 및 가입하기 버튼 클릭
  form.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 Enter 행동 방지
      document.querySelector('.btn').click(); // 가입하기 버튼 클릭
    }
  });
});

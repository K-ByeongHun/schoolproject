const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorDiv = document.getElementById('error');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지

    const email = emailInput.value;
    const password = passwordInput.value;

    // 간단한 예제로 비밀번호가 "1234"일 때만 로그인 성공으로 가정합니다.
    if (email === 'user@example.com' && password === '1234') {
      // 로그인 성공
      alert('로그인 성공!');
      // 여기에 로그인 후 리다이렉트 또는 다른 작업을 수행할 수 있습니다.
    } else {
      // 로그인 실패
      errorDiv.textContent = '이메일 또는 비밀번호가 잘못되었습니다.';
    }
  });
const form = document.getElementById('passwordChangeForm');
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const newPasswordConfirmInput = document.getElementById('newPasswordConfirm');
    const passwordChangeWarning = document.getElementById('passwordChangeWarning');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // 기본 동작(폼 제출) 방지

      const currentPassword = currentPasswordInput.value;
      const newPassword = newPasswordInput.value;
      const newPasswordConfirm = newPasswordConfirmInput.value;

      // 새로운 비밀번호와 확인 비밀번호가 일치하는지 확인
      if (newPassword !== newPasswordConfirm) {
        passwordChangeWarning.textContent = '새로운 비밀번호와 비밀번호 확인이 일치하지 않습니다.';
        return;
      }

      // 비밀번호 변경 로직 구현
      // 여기에 비밀번호 변경을 위한 서버 요청 등의 로직을 추가.
      // 비밀번호 변경에 성공하면 적절한 메시지를 표시하고 페이지를 리다이렉트
      // 아직 서버가 없어서 구현 불가능
      console.log('현재 비밀번호:', currentPassword);
      console.log('새로운 비밀번호:', newPassword);
      console.log('비밀번호 변경에 성공했습니다.');
    });
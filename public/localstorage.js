// window.addEventListener('beforeunload', function() {
//     // Получаем текущий URL
//     let currentPage = window.location.href;
//     // Сохраняем URL в localStorage
//     localStorage.setItem('currentPage', currentPage);
//   });

//   window.addEventListener('beforeunload', function() {
//     // Получаем сохраненный URL из localStorage
//     let savedPage = localStorage.getItem('currentPage');
//     // Получаем флаг из localStorage
//     let redirectFlag = localStorage.getItem('redirectFlag');
//     // Если есть сохраненный URL и флаг не установлен, перенаправляем пользователя на сохраненную страницу
//     if (savedPage && !redirectFlag) {
//       // Устанавливаем флаг в localStorage
//       localStorage.setItem('redirectFlag', 'true');
//       // Перенаправляем пользователя на сохраненную страницу
//       window.location.href = savedPage;
//     } else {
//       // Если флаг уже установлен, удаляем его из localStorage
//       localStorage.removeItem('redirectFlag');
//     }
//   });

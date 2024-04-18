// для поиска в шапке сайта
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.add('search-form__show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.remove('search-form__show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
      e.preventDefault()

  })

});

// для бургера

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger-js").addEventListener("click", function() {
    document.getElementById("open").classList.remove('display-none')
  })
});


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("close-img").addEventListener("click", function() {
    document.getElementById("open").classList.add('display-none')
  })
});


// для закрытия поля контакты
const close = document.getElementById('contact__button-close');

close.addEventListener('click', (e) => {
  document.getElementById('info').classList.add('display-none')
});


// для валидации форм

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 30
    },
    email: {
      required: true,
      email: true,
    },

  },
  messages: {
    email: {
      required: 'Недопустимый формат',
    },

    name: {
      required: 'Недопустимый формат',
    }
  },
  colorWrong: '#FF3030',

});

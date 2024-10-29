const questions = [
  {
    question: "Якого кольору бургер?",
    answers: [
      {
        title: 'Стандарт',
        url: './image/burger.png'
      },
      {
        title: 'Чорний',
        url: './image/burgerBlack.png'
      }
    ],
    type: 'radio'
  },
  {
    question: "З якого м'яса котлета?",
    answers: [
      {
        title: 'Курка',
        url: './image/chickenMeat.png'
      },
      {
        title: 'Яловичина',
        url: './image/beefMeat.png'
      },
      {
        title: 'Свинина',
        url: './image/porkMeat.png'
      }
    ],
    type: 'radio'
  },
  {
    question: "Додаткові інгредієнти ?",
    answers: [
      {
        title: 'Помідор',
        url: './image/tomato.png'
      },
      {
        title: 'Огірок',
        url: './image/cucumber.png'
      },
      {
        title: 'Салат',
        url: './image/salad.png'
      },
      {
        title: 'Цибуля',
        url: './image/onion.png'
      }
    ],
    type: 'checkbox'
  },
  {
    question: "Додати соус?",
    answers: [
      {
        title: 'Часниковий',
        url: './image/sauce1.png'
      },
      {
        title: 'Томатний',
        url: './image/sauce2.png'
      },
      {
        title: 'Гірчичний',
        url: './image/sauce3.png'
      }
    ],
    type: 'radio'
  },
  {
    question: "Назвіть свій бургер:",
    answers: [
      {
        type: 'text',
        placeholder: 'Введіть назву'
      }
    ],
    type: 'input'
  },
  {
    question: "Завантажте картинку свого бургера:",
    answers: [
      {
        type: 'file',
        accept: 'image/*'
      }
    ],
    type: 'file'
  }
];
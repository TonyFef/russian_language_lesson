const question = "Вопрос";

export const questions = {
  question: "Морфема?",
  options: [
    { value: "ending", label: "Окончание" },
    { value: "starting", label: "Приставка" },
    { value: "suffix", label: "Суффикс" },
    { value: "root", label: "Корень" },
  ],
  ending: {
    question: "Часть речи?",
    options: [
      { value: "noun", label: "Существительное" },
      { value: "adjective", label: "Прилагательное" },
      { value: "verb", label: "Глагол" },
    ],
    noun: {
      question: "Склонение?",
      options: [
        { value: "first", label: "Первое" },
        { value: "second", label: "Второе" },
        { value: "third", label: "Третье" },
      ],
      first: {
        question: "Слово в настоящей форме оканчивается на -ия?",
        options: [
          { value: "yes", label: "Да" },
          { value: "no", label: "Нет" },
        ],
        yes: { answer: "нужна картинка" },
        no: { answer: "Проверочное слово: РУКА" },
      },
      second: {
        question: "Слово в настоящей форме оканчивается на -ий/-ие?",
        options: [
          { value: "yes", label: "Да" },
          { value: "no", label: "Нет" },
        ],
        yes: { answer: "нужна картинка" },
        no: { answer: "Проверочное слово: ПЛЕЧО" },
      },
      third: { answer: "Проверочное слово: ГРУДЬ" },
    },
    adjective: {
      answer: "Проверка вопросом. Какое окончание в вопросе, такое и в слове",
    },
    verb: {
      question: "Спряжение?",
      options: [
        { value: "first", label: "Первое" },
        { value: "second", label: "Второе" },
        { value: "idk", label: "Не знаю" },
      ],
      first: { answer: " Буквы окончаний -Е, -У, -Ю" },
      second: { answer: " Буквы окончаний -И, -А, -Я" },
      idk: {
        question: "Глагол в инфинитиве оканчивается на -ить?",
        options: [
          { value: "yes", label: "Да" },
          { value: "no", label: "Нет" },
        ],
        yes: {
          question: "Это брить/стелить?",
          options: [
            { value: "yes2", label: "Да" },
            { value: "no2", label: "Нет" },
          ],
          yes2: { answer: "I спряжение, буквы окончаний -Е, -У, -Ю" },
          no2: { answer: "II спряжение, буквы окончаний -И, -А, -Я" },
        },
        no: {
          question: "Слово является одним из ?",
          options: [
            { value: "yes2", label: "Да" },
            { value: "no2", label: "Нет" },
          ],
          yes2: { answer: "II спряжение, буквы окончаний -И, -А, -Я" },
          no2: { answer: "I спряжение, буквы окончаний -Е, -У, -Ю" },
        },
      },
    },
  },
  starting: {
    question: "К какой группе относится?",
    options: [
      { value: "prepri", label: "Пре/при" },
      { value: "zs", label: "На -З, -С" },
      { value: "rest", label: "Не подходят другие варианты" },
    ],
    prepri: {
      answer: "II спряжение, буквы окончаний -И, -А, -Я + ДОБАВИТЬ КАРТИНКУ",
    }, // TO-DO: добавить картинку
    zs: {
      question: "После приставки буква обозначает глухой звук?",
      options: [
        { value: "yes", label: "Да" },
        { value: "no", label: "Нет" },
      ],
      yes: { answer: "С + ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      no: { answer: "З + ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
    },
    rest: {
      answer:
        "Перед тобой слово с неизменяемой приставкой. Найди ее и запомни написание + ДОБАВИТЬ КАРТИНКУ",
    }, // TO-DO: добавить картинку
  },
  suffix: {
    question: "Часть речи?",
    options: [
      { value: "noun", label: "Существительное" },
      { value: "adjective", label: "Прилагательное" },
      { value: "adverb", label: "Наречие" },
      { value: "причастие", label: "Причастие" },
      { value: "gerund", label: "Деепричастие" },
    ],
    noun: {
      question: "Выберите нужный суффикс существительного",
      options: [
        { value: "shk", label: "ШК/ЩИК" },
        { value: "ik", label: "ИК/ЕК" },
        { value: "ink", label: "ИНК/ЕНК" },
        { value: "ec", label: "ЕЦ/ИЦ" },
        { value: "oAndI", label: "О и Е после шипящих и Ц" },
      ],
      shk: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      ik: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      ink: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      ec: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      oAndI: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
    },
    adjective: {
      question: "Выберите нужный суффикс прилагательного",
      options: [
        { value: "ksk", label: "К/СК" },
        { value: "ov", label: "ОВ/ЕВ" },
        { value: "nn", label: "НН/Н" }, // TO-DO: что со стеклянным, оловянным и деревянным?
        { value: "onk", label: "ОНЬК/ЕНЬК" },
      ],
      ksk: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      ov: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      nn: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      onk: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
    },
    adverb: {
      question: "Выберите нужный суффикс наречия",
      options: [
        { value: "aou", label: "А/О/У" },
        { value: "oeom", label: "О/Е/ОМ после шипящих" },
      ],
      aou: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
      oeom: { answer: "ДОБАВИТЬ КАРТИНКУ" }, // TO-DO: добавить картинку
    },
  },
  // starting: {
  //   question: "Часть речи?",
  //   options: [
  //     { value: "noun", label: "Существительное" },
  //     { value: "adjective", label: "Прилагательное" },
  //     { value: "verb", label: "Глагол" },
  //   ],
  // },
};

// export const questions = [
//   {
//     question: "Какая морфема: в постел_ ??",
//     correctAnswer: "ending",
//     options: [
//       { value: "ending", label: "Окончание" },
//       {
//         value: "starting",
//         label: "Приставка",
//       },
//       {
//         value: "suffix",
//         label: "Суффикс",
//       },
//       {
//         value: "smth",
//         label: "Еще что-то",
//       },
//     ],
//   },
//   {
//     question: "Какая часть речи: в постел_ ?",
//     correctAnswer: "noun",
//     options: [
//       {
//         value: "noun",
//         label: "Существительное",
//       },
//       {
//         value: "verb",
//         label: "Глагол",
//       },
//       {
//         value: "adverb",
//         label: "Наречие",
//       },
//       {
//         value: "participle",
//         label: "Причастие",
//       },
//     ],
//   },
//   {
//     question: "Какое склонение: в постел_ ?",
//     correctAnswer: "third",
//     options: [
//       {
//         value: "first",
//         label: "Первое",
//       },
//       {
//         value: "second",
//         label: "Второе",
//       },
//       {
//         value: "third",
//         label: "Третье",
//       },
//     ],
//   },
// ];

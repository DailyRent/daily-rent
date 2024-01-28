import { v4 } from 'uuid';

export const textInfoAppartId = [
  {
    id: v4(),
    title: 'Розрахунковий час — 12:00 година дня.',
    titleEN: 'The estimated time is 12:00 pm.',
    text: 'Надаються документи по 2 та 3 групі з наявністю касового апарату (робота з підприємствами, ПДВ).',
    textEN:
      'Documents for Groups 2 and 3 with a cash register are provided (work with enterprises, VAT).',
  },
  {
    id: v4(),
    title: 'Ціна:',
    titleEN: 'Price:',
    text: 'Вартість проживання залежить від кількості днів та гостей. Ціна може змінюватися залежно від дати бронювання, кількості гостей та загального періоду бронювання.',
    textEN:
      'The cost of accommodation depends on the number of days and guests. The price may vary depending on the date of booking, number of guests and the total booking period.',
  },
  {
    id: v4(),
    title: 'Правила:',
    titleEN: 'Rules:',
    rulesList: [
      {
        id: v4(),
        rules:
          '-Заборона організації заходів: Абсолютно заборонено проведення заходів, компаній та торжеств у даній квартирі.',
        rulesEN:
          '-Prohibition of organising events: It is absolutely forbidden to hold events, companies and celebrations in this apartment.',
      },
      {
        id: v4(),
        rules:
          '-Обмеження кількості гостей: Згідно з угодою, максимальна кількість проживаючих суворо обмежена.',
        rulesEN:
          '-Limitation of the number of guests: According to the agreement, the maximum number of guests is strictly limited.',
      },
      {
        id: v4(),
        rules:
          "-Санкції за порушення правил: Всі порушення вищезазначених правил будуть розглядатися як серйозні і призведуть до виселення гостей з зобов'язанням оплатити всі надані послуги.",
        rulesEN:
          "-Sanctions for violation of the rules: All violations of the above rules will be treated as serious and will result in the eviction of guests with the obligation to pay for all services provided.",
      },
    ],
  },
  {
    id: v4(),
    text: "Прохання уважно ознайомитися з вищезазначеними правилами перед заселенням. Дотримання цих правил обов'язкове для створення безпечного і комфортного середовища для всіх гостей.",
    textEN:
      "Please read the above rules carefully before checking in. Compliance with these rules is mandatory to create a safe and comfortable environment for all guests.",
  },
  {
    id: v4(),
    text: 'Дякуємо за Ваше розуміння. Ми готові зробити ваше перебування зручним і приємним!',
    textEN:
      'Thank you for your understanding. We are ready to make your stay comfortable and enjoyable!',
  },
];

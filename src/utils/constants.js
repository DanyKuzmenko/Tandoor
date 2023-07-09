import img1 from '../assets/images/rating/image1.png';
import img2 from '../assets/images/rating/image2.png';
import img3 from '../assets/images/rating/image3.png';
import img4 from '../assets/images/rating/image4.png';
import img5 from '../assets/images/rating/image5.png';
import image1 from '../assets/images/marketing/image1.png';
import image2 from '../assets/images/marketing/image2.png';
import image3 from '../assets/images/marketing/image3.png';

export const kpiItems = [
  {
    id: 1,
    name: 'Адель ВХ',
    plan: 5000,
    fact: 1,
    percent: 99,
    type: 'Входные двери',
    kpi: 'KPI № 1',
    material: 'Итальянский орех',
    img: 'door1.png',
  },
  {
    id: 2,
    name: 'Урбан ВХ',
    plan: 14,
    fact: 1,
    percent: 95,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 2',
    material: 'Итальянский орех',
    img: 'door2.png',
  },
  {
    id: 3,
    name: 'Доканто серый бархат ВХ',
    plan: 300,
    fact: 24,
    percent: 86,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 3',
    material: 'Итальянский орех',
    img: 'door3.png',
  },
  {
    id: 4,
    name: 'Сити зеркало Метал-Метал',
    plan: 30,
    fact: 14,
    percent: 75,
    type: 'Входные двери',
    kpi: 'KPI № 2',
    material: 'Итальянский орех',
    img: 'door4.png',
  },
  {
    id: 5,
    name: 'Лу ВХ',
    plan: 45,
    fact: 24,
    percent: 69,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 1',
    material: 'Итальянский орех',
    img: 'door5.png',
  },
  {
    id: 6,
    name: 'Сицилия ВХ',
    plan: 70,
    fact: 24,
    percent: 58,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 3',
    material: 'Итальянский орех',
    img: 'door6.png',
  },
  {
    id: 7,
    name: 'Гладкая ВХ',
    plan: 14,
    fact: 12,
    percent: 45,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 2',
    material: 'Итальянский орех',
    img: 'door7.png',
  },
  {
    id: 8,
    name: 'Американская решетка ВХ',
    plan: 80,
    fact: 24,
    percent: 37,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 3',
    material: 'Итальянский орех',
    img: 'door1.png',
  },
  {
    id: 9,
    name: 'Барокко',
    plan: 180,
    fact: 24,
    percent: 26,
    type: 'Входные двери',
    kpi: 'KPI № 1',
    material: 'Итальянский орех',
    img: 'door2.png',
  },
  {
    id: 10,
    name: 'Лиственница ВХ',
    plan: 32,
    fact: 25,
    percent: 20,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 3',
    material: 'Итальянский орех',
    img: 'door3.png',
  },
  {
    id: 11,
    name: 'Лиственница ВХ',
    plan: 25,
    fact: 24,
    percent: 18,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 2',
    material: 'Итальянский орех',
    img: 'door4.png',
  },
  {
    id: 12,
    name: 'Лиственница ВХ',
    plan: 35,
    fact: 24,
    percent: 15,
    type: 'Межкомнатные двери',
    kpi: 'KPI № 3',
    material: 'Итальянский орех',
    img: 'door5.png',
  },
  {
    id: 13,
    name: 'Лиственница ВХ',
    plan: 91,
    fact: 24,
    percent: 12,
    type: 'Входные двери',
    kpi: 'KPI № 1',
    material: 'Итальянский орех',
    img: 'door6.png',
  },
  {
    id: 14,
    name: 'Лиственница ВХ',
    plan: 170,
    fact: 24,
    percent: 5,
    type: 'Входные двери',
    kpi: 'KPI № 2',
    material: 'Итальянский орех',
    img: 'door7.png',
  },
];

export const kpiSelectOptions = [
  { value: '', label: 'Все KPI' },
  { value: 'KPI № 1', label: 'KPI № 1' },
  { value: 'KPI № 2', label: 'KPI № 2' },
  { value: 'KPI № 3', label: 'KPI № 3' },
];
export const constTasks = [
  {
    id: '001',
    name: 'Позвонить в отдел маркетинга по поводу визиток',
    // mm.dd.yyyy
    dateCreate: '09.12.2021 12:34',
    dateEnd: '09.12.2021 12:34',
    active: true,
  },
  {
    id: '002',
    name: 'Сформирован (1)',
    dateCreate: '09.12.2021 12:34',
    dateEnd: '09.12.2021 12:34',
    active: false,
  },
];

export const tableData = {
  head: [
    {
      id: '01',
      value: '№',
    },
    {
      id: '02',
      value: 'Краткое наименование',
    },
    {
      id: '03',
      value: 'Полное наименование',
    },
    {
      id: '04',
      value: 'Содержание',
    },
  ],
  body: [
    {
      id: '05',
      rowData: [
        {
          id: '001',
          value: '001',
        },
        {
          id: '002',
          value: 'KPI №1',
        },
        {
          id: '003',
          value: 'Июльский KPI по межкомнатным дверям',
        },
        {
          id: '004',
          value: 'Прага/Венге/Классика/Александра/Виктория',
        },
      ],
    },
    {
      id: '06',
      rowData: [
        {
          id: '005',
          value: '002',
        },
        {
          id: '006',
          value: 'KPI №1',
        },
        {
          id: '007',
          value: 'Летная мотивация по входным дверям',
        },
        {
          id: '008',
          value: 'Входные двери',
        },
      ],
    },
    {
      id: '07',
      rowData: [
        {
          id: '009',
          value: '003',
        },
        {
          id: '0010',
          value: 'KPI №1',
        },
        {
          id: '0011',
          value: 'Июльский KPI по межкомнатным дверям',
        },
        {
          id: '0012',
          value: 'Александра/Виктория',
        },
      ],
    },
    {
      id: '07',
      rowData: [
        {
          id: '0013',
          value: '004',
        },
        {
          id: '0014',
          value: 'KPI №1',
        },
        {
          id: '0015',
          value: 'Продать складские остатки за премию',
        },
        {
          id: '0016',
          value: 'Межкомнатные складские остатки',
        },
      ],
    },
    {
      id: '08',
      rowData: [
        {
          id: '0017',
          value: '005',
        },
        {
          id: '0018',
          value: 'KPI №1',
        },
        {
          id: '0019',
          value: 'Июльский KPI по межкомнатным дверям',
        },
        {
          id: '0020',
          value: 'Прага/Венге/Классика/Александра/Виктория',
        },
      ],
    },
    {
      id: '09',
      rowData: [
        {
          id: '0021',
          value: '006',
        },
        {
          id: '0022',
          value: 'KPI №1',
        },
        {
          id: '0023',
          value: 'Летная мотивация по входным дверям',
        },
        {
          id: '0024',
          value: 'Фурнитура/Дверные ручки',
        },
      ],
    },
  ],
};

export const infoCardsData = {
  plan: [
    {
      id: '01',
      title: 'План',
      value: '1 345 678 ₽',
    },
    {
      id: '02',
      title: 'Факт',
      value: '2 456 ₽',
    },
    {
      id: '03',
      title: 'Осталось',
      value: '1 789 ₽',
    },
  ],
  kpi: [
    {
      id: '04',
      title: 'План',
      value: '2',
    },
    {
      id: '05',
      title: 'Факт',
      value: '40',
    },
    {
      id: '06',
      title: 'Осталось',
      value: '40',
    },
  ],
  bonus: [
    {
      id: '07',
      title: 'План',
      value: '12',
    },
    {
      id: '08',
      title: 'Факт',
      value: '6',
    },
    {
      id: '09',
      title: 'Осталось',
      value: '1',
    },
  ],
};

export const ratingData = [
  {
    id: '0001',
    place: '1',
    placeColor: 'gold',
    title: 'Василиса Примудрая',
    percent: '100%',
    image: img1,
  },
  {
    id: '0002',
    place: '2',
    placeColor: 'silver',
    title: 'Екатерина Медяникова',
    percent: '99%',
    image: img2,
  },
  {
    id: '0003',
    place: '3',
    placeColor: 'bronze',
    title: 'Василиса Степанова',
    percent: '92%',
    image: img3,
  },
  {
    id: '0004',
    place: '4',
    title: 'Анатолий Весёлый',
    percent: '84%',
    image: img4,
  },
  {
    id: '0005',
    place: '5',
    title: 'Антон Иванов',
    percent: '2%',
    image: img5,
  },
];
export const marketingItems = [
  {
    id: 1,
    name: 'Гарантия лучшей цены!',
    dateEnd: '09.12.2021 12:34',
    image: image1,
    title: 'Гарантия лучшей цены!',
    text: 'Программа «ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ! Найдете дешевле – сделаем...',
  },
  {
    id: 2,
    name: 'Электронные замки',
    dateEnd: '07.05.2023 22:50',
    image: image2,
    title: 'Электронные замки',
    text: 'В нашем ассортименте Вы с легкостью найдете как современн...',
  },
  {
    id: 3,
    name: 'Новый магазин а г. Новороссийск',
    dateEnd: '07.05.2023 22:50',
    image: image3,
    title: 'Новый магазин а г. Новороссийск',
    text: 'В семье Tandoor – пополнение 20 февраля распахнул свои двери ...',
  },
];

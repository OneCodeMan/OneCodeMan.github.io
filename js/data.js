let aboutMeTextElement = document.getElementById('about-me-text');
let socialElement = document.getElementById('social');
let projectsTitleElement = document.getElementById('projects-title');
let projectsList = document.getElementById('projects-list');
let englishSpanElement = document.getElementById('lang-eng-toggle');
let latinSpanElement = document.getElementById('lang-lat-toggle');
let currentLang = 'EN';

let aboutMe = {
  english: `Hello! I'm a software developer doing my 4th year of computer science at 
  <span id="school">McMaster University.</span>
  I train <span id="mma">mixed martial arts</span>, love reading all kinds of 
  <span id="books">books</span>, and I am currently
  teaching myself <span id="latin">Latin</span>.`,
  latin: `Salve! Ego program elit in quartus annus meus de computarum scientium in <span id="school">McMaster Academia.</span>
  <span id="mma">Mixta martial artem</span> exerceo, <span id="books">libros</span> genus agere amo, et me <span id="latin">lingua Latina</span> doceo.`
};

let social = {
  english: `You can find me on <a href="http://github.com/onecodeman">github</a>, 
  <a href="https://linkedin.com/in/dave-gumba">linkedin</a>, and 
  <a href="http://medium.com/@davegumba">medium</a>.`,
  latin: `me possum <a href="http://github.com/onecodeman">github</a>,
  <a href="https://linkedin.com/in/dave-gumba">linkedin</a>, et 
  <a href="http://medium.com/@davegumba">medium</a> invenis.`
};

let projectsTitle = {
  english: `<h2>Projects</h2>`,
  latin: `<h2>Opera</h2>`
};

let projects = [
  {
    title: 'Reflections (iOS)',
    description: {
      english: 'An app that helps you get to know yourself and others.',
      latin: 'Programma ipsumque alii scio iuvetis.'
    },
    link: 'https://apps.apple.com/us/app/reflection-cards/id1254906833',
    backgroundColor: 'd84796',
  },
  {
    title: 'Kuzushi (iOS)',
    description: {
      english: 'A cryptocurrency app with simple UI, uses the Coinbase API.',
      latin: 'Programma cryptocurrency cum simplex UI, Coinbase API utitur.',
    },
    link: 'https://apps.apple.com/us/app/digital-coin-info/id1378037153',
    backgroundColor: '52489C',
  },
  {
    title: 'Github Jobs (iOS)',
    description: {
      english: 'An app that helps you find a job using the Github Jobs API.',
      latin: 'Programma labor invenire iuvetis, Github Jobs API utitur.'
    },
    link: 'https://github.com/OneCodeMan/github-jobs',
    backgroundColor: '000000',
  },
  {
    title: 'Memor (iOS)',
    description: {
      english: 'An app that helps you keep track of time during your meditation practice.',
      latin: 'Programma tempus indago iuvetis in tua meditatio.'
    },
    link: 'https://github.com/OneCodeMan/Memor',
    backgroundColor: '4392F1',
  },
  {
    title: 'Mount (iOS)',
    description: {
      english: 'A journaling app I made to practice Firebase and CRUD concepts.',
      latin: 'Programma diurnalis facio ad Firebase et CRUD perceptiones exerceo.'
    },
    link: 'https://github.com/OneCodeMan/mount',
    backgroundColor: '6A8D73',
  },
  {
    title: 'Closed Guard (iOS)',
    description: {
      english: 'A machine learning app that predicts what a picture is of. I made it to practice CoreML.',
      latin: 'Programma machina doctrina imago praedicet. CoreML exerceo facio.'
    },
    link: 'https://github.com/OneCodeMan/closed-guard',
    backgroundColor: '5A3A31',
  },
  {
    title: 'Positab',
    description: {
      english: 'A chrome extension that promotes mental health with positive messages on every new tab.',
      latin: 'Chrome extension qui mentalis salutis cum verbum consolatium in omnis novis fenestris provehot.'
    },
    link: 'https://github.com/OneCodeMan/Positab',
    backgroundColor: 'F08700',
  },
  {
    title: 'Gin Data',
    description: {
      english: 'Some statistics on the anime <i>Gintama</i>, made with Plotly.js',
      latin: 'Statistica on spectaculum <i>Gintama</i>, Plotly.js facio.'
    },
    link: 'https://onecodeman.github.io/GinData/',
    backgroundColor: '890620',
  },
  {
    title: 'OnionOrNot',
    description: {
      english: 'Scrapes r/theonion and r/nottheonion for news headlines.',
      latin: 'r/theonion et r/nottheonion nuntii inscriptii scribot. '
    },
    link: 'https://onecodeman.github.io/OnionOrNot/',
    backgroundColor: '60D394',
  },
  {
    title: 'WhatCostsMore',
    description: {
      english: 'Gives you two items and you have to figure out which one costs more. Inspired by the Higher Lower Game.',
      latin: 'Deus item das et quae una pretis magis cognoscere habes. Higher Lower Game excitatet.'
    },
    link: 'https://onecodeman.github.io/WhatCostsMore/',
    backgroundColor: '50808E',
  },
];
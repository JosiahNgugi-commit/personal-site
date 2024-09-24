/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Promptfoo',
    position: 'Co-founder & CTO',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'Promptfoo builds open-source tools to evaluate, find, and fix vulnerabilities in large language models (LLMs). Our open-source tools are used by over 30,000 developers and researchers worldwide.',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.',
      'Built and scaled engineering team, emphasizing diversity and open-source contributionLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.',
    ],
  },
  {
    name: 'Smile Identity',
    position: 'VP Engineering & Head of AI',
    url: 'https://smileidentity.com',
    startDate: '2022-01-01',
    endDate: '2024-07-01',
    summary: 'Lor afadfadf afadfadfa afadfadf afafad',
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
    ],
  },
  {
    name: 'Skeptical Investments',
    position: 'Co-founder',
    url: 'http://skepticalinvestments.biz',
    startDate: '2017-04-01',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'afafafafafaf.',
      'fadfafdgafdafg.',
    ],
  },
  {
    name: 'Matroid',
    position: 'Co-founder',
    url: 'https://matroid.com',
    startDate: '2015-07-01',
    endDate: '2016-01-01',
    summary: `Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,
    events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in
    defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the
    Series A to focus on Arthena.`,
    highlights: [
      'Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies.',
    ],
  },
  {
    name: 'Facebook',
    position: 'Software Engineer Intern',
    url: 'https://facebook.com',
    startDate: '2013-06-01',
    endDate: '2013-09-01',
    highlights: [
      'adfhaodfboadfbob adfodbaodfboadbfo adbfoabdfobdf adfadf.',
    ],
  },
];

export default work;

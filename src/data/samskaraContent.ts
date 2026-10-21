import type { Block } from "./blocks";
import { garbhadhana } from "./garbhadhana";


export type Quote = {
  text: string;
  /** Book / lecture, place and date, e.g. "Bhagavad-gita 3.21 purport" */
  source: string;
};

export type Samskara = {
  /** Shown as the accordion title. */
  name: string;
  /** Shown when the item is opened. Blank lines start a new paragraph. */
  description: string | Block[];
};

export type SamskaraGroup = {
  title: string;
  items: Samskara[];
};

const soon = (name: string) =>
  `${name} `;

export const quotesIntro =
  "";

export const quotes: Quote[] = [
  {
    text: "The secret of success depends on the parents’ acceptance of the various purificatory methods known as saṁskāras.",
    source: "Śrīmad-Bhāgavatam 4.22.53 · Purport",
  },
  {
    text: "There are ten kinds of reformation. The first reformation is garbhādhāna-saṁskāra.",
    source: "Śrīmad-Bhāgavatam 1.16.1, Los Angeles, December 29, 1973",
  },
  {
    text: "The real aim of saṁskāras is to bring a rascal to the platform of knowledge. Janmanā jāyate śūdraḥ: by birth, everyone is the same – śūdra. In other words, one is without any knowledge. So the purpose of saṁskāras is to gradually bring a person who has no knowledge of spiritual life to the spiritual platform. As it is said, saṁskārād bhaved dvijaḥ: by the purificatory processes, one attains spiritual rebirth. That is essential.",
    source: " Civilization and Transcendence, Chapter 10: The Process of Purification",
  },
  {
    text: "The garbhādhāna saṁskāra, the ceremony for begetting a child, must be observed by the higher section of people, namely the dvijas. One who follows the garbhādhāna saṁskāra system is actually twice-born, but those who do not, who deviate from the principles of varṇāśrama-dharma, are called dvija-bandhus.",
    source: "Śrīmad-Bhāgavatam 7.11 Summary (Chapter Eleven: The Perfect Society: Four Social Classes)",
  },
  {
    text: "The reformatory processes, or saṁskāras, are meant for purifying a person so that he becomes mukta-saṅgaḥ, liberated from all the bad association of material existence and eligible to go back home, back to Godhead.",
    source: "Civilization and Transcendence, Chapter 10",
  },
];

export const timeline = {
  title: "The Samskara Timeline",
  intro: "A visual guide to the samskaras across life. Click the image to enlarge it.",
  /** File to place in /public/images/ */
  file: "samskaras-timeline.jpg",
  alt: "Timeline of the samskaras from marriage through childhood, education and the home",
};

export const groups: SamskaraGroup[] = [
  {
    title: "Marriage",
    items: [{ name: "Vivaha (Wedding)", description: soon("Vivaha") }],
  },
  {
    title: "Before Birth",
    items: [
      
{
  name: "Garbhadhana Samskar",
  description: garbhadhana,
},

      { name: "Pumsavana Samskar", description: soon("Pumsavana") },
      { name: "Simantonnayana (Baby Shower)", description: "According to the Asvalayana Smrti: Evil demons bent on sucking blood, come to the pregnant woman to devour the fetus. In order to remove them, the husband should perform Simantonnayana.\n\nFrom the fourth month of pregnancy, the formation of the mind of the child begins. therefore the pregnant woman is required to take the utmost care to avoid any physical shock to the fetus." },
      { name: "Shoshyanti Homa (For safe delivery)", description: soon("Shoshyanti Homa") },
    ],
  },
  {
    title: "Childhood",
    items: [
      { name: "Jatakarma (Birth Ceremony)", description: soon("Jatakarma") },
      {
        name: "Nishkramanam (Taking the child outside for the first time)",
        description: "The mother and child should remain indoors however until the third lunar day of the third waxing moon after the child’s birth.",
      },
      { name: "Namakarana (Naming Ceremony)", description: "The child should be named on the tenth, twelfth, hundred and first day, or one full year from his birth." },
      { name: "Paustika Karma (Ceremony for continued health of the child)", description: "This ceremony should be performed every month, during the child’s first year, on the tithi and pakìa (waxing or waning phase of the moon) corresponding to the tithi and pakìa on which the child was born." },
      { name: "Annaprashana (First Solid Food)", description: "In the case of a male child the rite should be performed in the sixth or eighth month, on an auspicious day. In the case of girl, it should be performed in the fifth or seventh month, on an auspicious day." },
      { name: "Karnavedha (Piercing the ears)", description: "According to Suëruta, this ceremony should be performed in the sixth or seventh month after birth, though it may be performed along with the Câéàkaraêa ceremony or at Upanayanam." },
      { name: "Chudakarana (First Haircut)", description: "This saîskàra should be performed during the male child’s first year (between the child’s first and second year — the best option), third year (second option) or fifth year (third option)." },
    ],
  },
  {
    title: "Education",
    items: [
      { name: "Vidyarambha (Beginning of Education)", description: "This is performed when the child is five, or at the same time as the hair-cutting ceremony, but before Upanayanam." },
      { name: "Upanayana (Sacred Thread Ceremony)", description: "The upanayanam ceremony should be conducted, for bràhmaêas, counting eight years from conception or eight years from the birth of the son, on an auspicious day. If that is not possible, the ceremony should take place latest before the sixteenth year from the birth of the child, has passed. According to the original rules, if there is more delay, the child is not entitled to undergo the ceremony and receive the sacred thread." },
    ],
  },
  {
    title: "Home & Blessings",
    items: [
      { name: "Griha Pravesh (House Warming)", description: soon("Griha Pravesh") },
      { name: "Bhumi Pujan (Land Blessing)", description: soon("Bhumi Pujan") },
      { name: "Narsingh Yagya", description: soon("Narsingh Yagya") },
    ],
  },
];

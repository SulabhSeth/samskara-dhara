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
      { name: "Simantonnayana (Baby Shower)", description: soon("Simantonnayana") },
      { name: "Shoshyanti Homa (For safe delivery)", description: soon("Shoshyanti Homa") },
    ],
  },
  {
    title: "Childhood",
    items: [
      { name: "Jatakarma (Birth Ceremony)", description: soon("Jatakarma") },
      {
        name: "Nishkramanam (Taking the child outside for the first time)",
        description: soon("Nishkramanam"),
      },
      { name: "Namakarana (Naming Ceremony)", description: soon("Namakarana") },
      { name: "Annaprashana (First Solid Food)", description: soon("Annaprashana") },
      { name: "Karnavedha (Piercing the ears)", description: soon("Karnavedha") },
      { name: "Chudakarana (First Haircut)", description: soon("Chudakarana") },
    ],
  },
  {
    title: "Education",
    items: [
      { name: "Vidyarambha (Beginning of Education)", description: soon("Vidyarambha") },
      { name: "Upanayana (Sacred Thread Ceremony)", description: soon("Upanayana") },
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

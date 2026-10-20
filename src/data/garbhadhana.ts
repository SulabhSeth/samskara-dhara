import type { Block } from "./blocks";

/** Content of the Garbhadhana Samskar description. Edit the text freely. */
export const garbhadhana: Block[] = [
  { type: "heading", title: "Garbhadhana Samskara Days" },
  {
    type: "dayGroups",
    caption: "Days counted from the beginning of the menstrual period",
    groups: [
      { label: "For begetting a son", tone: "forest", days: ["6th", "8th", "10th", "12th", "14th", "16th"] },
      { label: "For begetting a daughter", tone: "gold", days: ["5th", "7th", "9th", "11th", "13th", "15th"] },
    ],
  },
  {
    type: "callout",
    title: "Important Notes",
    items: [
      "Most recommended is seven or more days after the menstrual period ends.",
      "Auspicious tithi and nakshatra should be considered when calculating the exact date of Garbhadhana Samskara.",
    ],
  },
  { type: "heading", title: "Understanding the Menstrual Cycle" },
  {
    type: "terms",
    intro: "Menstrual cycle is divided into three periods:",
    items: [
      { name: "Rajasrava", text: "The first 4–7 days from the onset of menstruation." },
      { name: "Rtu Kala", badge: "Fertile period", highlight: true, text: "The 4th to the 16th day, described here as a period of 12 days." },
      { name: "Rtu-vyatitakala", text: "The period from the 17th to the 28th day, described here as a period of 11 days." },
    ],
    outro: "According to this, Rtu Kala is considered the fertile period, while Rtu-vyatitakala refers to the period following it.",
  },
  {
    type: "passages",
    eyebrow: "Insights from the Bhagavatam",
    title: "Vedic Embryology",
    intro: "The following passages are drawn from Śrīmad-Bhāgavatam, primarily the teachings of Lord Kapila in the Third Canto, Chapter 31, describing conception, the development of the embryo, and the living entity's experience in the womb.",
    footnote: "The above descriptions are based on the Śrīmad-Bhāgavatam.",
    items: [
      {
        "title": "The Journey Toward Human Birth",
        "reference": "3.30.34",
        "text": "Having gone through all the miserable, hellish conditions and having passed in a regular order through the lowest forms of animal life prior to human birth, and having thus been purged of his sins, one is reborn again as a human being on this earth."
      },
      {
        "title": "Conception and the Entry of the Soul",
        "reference": "3.31.1",
        "text": "The Personality of Godhead said: Under the supervision of the Supreme Lord and according to the result of his work, the living entity, the soul, is made to enter into the womb of a woman through the particle of male semen to assume a particular type of body."
      },
      {
        "title": "The Initial Development of the Embryo",
        "reference": "3.31.2",
        "text": "On the first night, the sperm and ovum mix, and on the fifth night the mixture ferments into a bubble. On the tenth night it develops into a form like a plum, and after that, it gradually turns into a lump of flesh or an egg, as the case may be.",
        "milestone": "First to tenth night"
      },
      {
        "title": "Formation of the Body",
        "reference": "3.31.3",
        "text": "In the course of a month, a head is formed, and at the end of two months the hands, feet and other limbs take shape. By the end of three months, the nails, fingers, toes, body hair, bones and skin appear, as do the organ of generation and the other apertures in the body, namely the eyes, nostrils, ears, mouth and anus.",
        "milestone": "Months 1–3"
      },
      {
        "title": "Further Development in the Womb",
        "reference": "3.31.4",
        "text": "Within four months from the date of conception, the seven essential ingredients of the body, namely chyle, blood, flesh, fat, bone, marrow and semen, come into existence. At the end of five months, hunger and thirst make themselves felt, and at the end of six months, the fetus, enclosed by the amnion, begins to move on the right side of the abdomen.",
        "milestone": "Months 4–6"
      },
      {
        "title": "Nourishment and the Environment in the Womb",
        "reference": "3.31.5",
        "text": "Deriving its nutrition from the food and drink taken by the mother, the fetus grows and remains in that abominable residence of stools and urine, which is the breeding place of all kinds of worms."
      },
      {
        "title": "The Living Entity's Suffering",
        "reference": "3.31.6",
        "text": "Bitten again and again all over the body by the hungry worms in the abdomen itself, the child suffers terrible agony because of his tenderness. He thus becomes unconscious moment after moment because of the terrible condition."
      },
      {
        "title": "The Effect of the Mother's Food",
        "reference": "3.31.7",
        "text": "Owing to the mother's eating bitter, pungent foodstuffs, or food which is too salty or too sour, the body of the child incessantly suffers pains which are almost intolerable."
      },
      {
        "title": "The Child's Position in the Womb",
        "reference": "3.31.8",
        "text": "Placed within the amnion and covered outside by the intestines, the child remains lying on one side of the abdomen, his head turned towards his belly and his back and neck arched like a bow."
      },
      {
        "title": "Remembrance of Previous Lives",
        "reference": "3.31.9",
        "text": "The child thus remains just like a bird in a cage, without freedom of movement. At that time, if the child is fortunate, he can remember all the troubles of his past one hundred births, and he grieves wretchedly. What is the possibility of peace of mind in that condition?"
      },
      {
        "title": "The Development of Consciousness",
        "reference": "3.31.10",
        "text": "Thus endowed with the development of consciousness from the seventh month after his conception, the child is tossed downward by the airs that press the embryo during the weeks preceding delivery. Like the worms born of the same filthy abdominal cavity, he cannot remain in one place.",
        "milestone": "From the seventh month"
      },
      {
        "title": "Prayers to the Supreme Lord",
        "reference": "3.31.11",
        "text": "The living entity in this frightful condition of life, bound by seven layers of material ingredients, prays with folded hands, appealing to the Lord, who has put him in that condition."
      },
      {
        "title": "The Living Entity Before Birth",
        "reference": "3.31.22",
        "text": "Lord Kapila continued: The ten-month-old living entity has these desires even while in the womb. But while he thus extols the Lord, the wind that helps parturition propels him forth with his face turned downward so that he may be born.",
        "milestone": "Tenth month"
      },
      {
        "title": "The Moment of Birth",
        "reference": "3.31.23",
        "text": "Pushed downward all of a sudden by the wind, the child comes out with great trouble, head downward, breathless and deprived of memory due to severe agony.",
        "milestone": "Birth"
      }
    ],
  },
];

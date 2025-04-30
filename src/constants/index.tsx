import { Android, Ios, Mac, Windows } from "./components";

export const features = [
  {
    id: "0",
    icon: "./images/feature-1.png",
    caption: "No more missed details",
    title: "Automatic Transcription",
    text: "Xora captures every word from your meetings in real-time and converts speech into accurate, searchable text.",
    button: {
      icon: "./images/magictouch.svg",
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: "./images/feature-2.png",
    caption: "Clarity in minutes",
    title: "AI-Powered Summaries",
    text: "Get instant summaries of your calls, highlighting key points, decisions, and next steps—perfect for sharing and following up.",
    button: {
      icon: "./images/docs.svg",
      title: "Read the docs",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: "./images/detail-1.png",
    title: "Google Meet, Zoom & Teams",
  },
  {
    id: "1",
    icon: "./images/detail-2.png",
    title: "Speaker Identification",
  },
  {
    id: "2",
    icon: "./images/detail-3.png",
    title: "Secure Cloud Storage",
  },
  {
    id: "3",
    icon: "./images/detail-4.png",
    title: "Multilingual Transcription",
  },
];

export const faq = [
  {
    id: "0",
    question: "What platforms does Xora support?",
    answer: "Xora works with Zoom, Google Meet, and Microsoft Teams.",
  },
  {
    id: "1",
    question: "Do I need to install anything?",
    answer:
      " Yes, Xora requires a lightweight desktop app to record your meetings seamlessly.",
  },
  {
    id: "2",
    question: "Can I use Xora for past meetings?",
    answer:
      "Yes, you can upload recorded meetings for transcription and summary.",
  },
  {
    id: "3",
    question: "Is my meeting data secure?",
    answer:
      "Absolutely. All data is encrypted and stored securely in the cloud.",
  },
  {
    id: "4",
    question: "Does Xora identify different speakers?",
    answer:
      "Yes, our AI automatically tags different speakers in transcriptions.",
  },
  {
    id: "5",
    question: "Can I share meeting summaries?",
    answer: "Yes, you can export and share summaries in TXT or PDF formats.",
  },
  {
    id: "6",
    question: "What languages are supported?",
    answer: "Xora supports English, Spanish, Portuguese, French, and more.",
  },
  {
    id: "7",
    question: "How quickly are summaries generated?",
    answer: "Summaries are available within minutes after the meeting ends.",
  },
  {
    id: "8",
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel or change your plan at any time.",
  },
  {
    id: "9",
    question: "Do you offer a free trial?",
    answer: "Yes, all new users get a 7-day free trial with full features.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Starter",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for individuals",
    features: [
      "5 meetings per month",
      "Basic transcription",
      "100MB Cloud storage",
      "24/7 support",
    ],
    icon: "./images/circle.svg",
    logo: "./images/plan-1.png",
  },
  {
    id: "1",
    title: "Team",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "40 meetings per month",
      "1TB additional storage",
      "Speaker tags",
      "Analytics",
    ],
    icon: "./images/triangle.svg",
    logo: "./images/plan-2.png",
  },
  {
    id: "2",
    title: "Business",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "For teams only",
    features: [
      "Unlimited meetings",
      "10TB additional storage",
      "Real-time transcription",
      "Management dashboard",
    ],
    icon: "./images/hexagon.svg",
    logo: "./images/plan-3.png",
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "./images/testimonials/jessica-saunders.png",
    comment:
      "Xora's customer support is second to none! They're like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "./images/testimonials/mark-erixon.png",
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "./images/testimonials/melanie-hurst.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: "./images/testimonials/alicia-barker.png",
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: "./images/testimonials/becky-snider.png",
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: "./images/testimonials/jim-bradley.png",
    comment:
      "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  },
];

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "./images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "./images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "./images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "./images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "./images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "MacOS",
    icon: <Mac />,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "./images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "./images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "./images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "./images/socials/discord.svg",
    url: "#",
  },
];

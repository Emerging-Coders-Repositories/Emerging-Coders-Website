const getImagePath = (imageName) => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "";
  return `${basePath}${imageName}`;
};

const execBoard2023 = [
  {
    role: "President",
    name: "Emran Majidy",
    pronouns: "He/Him",
    major: "Computer Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/emranm/",
    img: getImagePath("/Emran.jpeg"),
    email: "emranmajidy2025@u.northwestern.edu",
    website: "",
    founder: true,
  },
  {
    role: "Vice President",
    name: "Amiin Muse",
    pronouns: "He/Him",
    major: "Computer Science & Data Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/amiin-muse/",
    img: getImagePath("/Amiin.jpeg"),
    email: "amiinmuse2025@u.northwestern.edu",
    website: "",
    founder: true,
  },
  {
    role: "Vice President",
    name: "Chisara Ojiako",
    pronouns: "He/Him",
    major: "Computer Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/godfrey-ojiako/",
    img: getImagePath("/Chisara.jpeg"),
    email: "godfreyojiako2025@u.northwestern.edu",
    website: "",
    founder: true,
  },
  {
    role: "Secretary",
    name: "Attzy Rodriguez",
    pronouns: "She/Her",
    major: "Cognitive Science & Design Certificate",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/attzy-rodriguez-887917206/",
    img: getImagePath("/Attzy.jpeg"),
    email: "attzyrodriguez2025@u.northwestern.edu",
    website: "",
    founder: true,
  },
  {
    role: "Treasurer",
    name: "Safiya Menk",
    pronouns: "She/Her",
    major: "Computer Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/safiyamenk/",
    img: getImagePath("/Safiya.jpeg"),
    email: "safiyamenk2025@u.northwestern.edu",
    website: "",
    founder: true,
  },
  {
    role: "Social Media Chair",
    name: "Audrey Benitez-Rojo",
    pronouns: "She/Her",
    major: "Computer Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/aixabenitezrojo/",
    img: getImagePath("/Audrey.jpeg"),
    email: "audreybenitezrojo2025@u.northwestern.edu",
    website: "",
    founder: true,
  },
  {
    role: "Webmaster",
    name: "Ethan Piñeda",
    pronouns: "He/They",
    major: "Computer Science & Data Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/ethanpineda/",
    img: getImagePath("/Ethan.jpeg"),
    email: "ethanpineda2025@u.northwestern.edu",
    website: "https://ethanpaneraa.github.io/Ethan/",
    founder: true,
  },
  {
    role: "Professional Liaison",
    name: "Donell Makuvire",
    pronouns: "He/Him",
    major: "Computer Science",
    classStanding: "Sophomore",
    linkedin: "https://www.linkedin.com/in/donell-makuvire/",
    img: getImagePath("/Don.jpeg"),
    email: "donellmakuvire2026@u.northwestern.edu",
    website: "",
    founder: true,
  },
];

const juniorExecBoard2023 = [
  {
    role: "Junior Exec Board Member",
    name: "Kathy Cui",
    pronouns: "She/Her",
    major: "Computer Science",
    classStanding: "Sophomore",
    linkedin: "https://www.linkedin.com/in/",
    img: getImagePath("/Kat.jpg"),
    email: "KathyCui2026@u.northwestern.edu",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Yafet Hailu",
    pronouns: "He/Him",
    major: "Computer Engineering & HCI Certificate",
    classStanding: "Sophomore",
    linkedin: "https://www.linkedin.com/in/yafet-hailu-a8b854205/",
    img: getImagePath("/Yafet.jpg"),
    email: "YafetHailu2026@u.northwestern.edu",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Mukhtar Handulle",
    pronouns: "He/Him",
    major: "Computer Science",
    classStanding: "Freshmen",
    linkedin: "https://www.linkedin.com/in/mukhtar-handulle",
    img: getImagePath("/Mukhtar.jpg"),
    email: "MukhtarHandulle2027@u.northwestern.edu",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Sydney Hoppenworth",
    pronouns: "She/They",
    major: "Computer Science",
    classStanding: "Sophomore",
    linkedin: "https://www.linkedin.com/in/sydney-hoppenworth",
    img: getImagePath("/Sydney.jpg"),
    email: "sydneyhoppenworth2026@u.northwestern.edu",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Eden Kim",
    pronouns: "She/Her",
    major: "Computer Science",
    classStanding: "Junior",
    linkedin: "",
    img: getImagePath("/Eden.jpg"),
    email: "edenkim2025@u.northwestern.edu",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Ariel Garcia",
    pronouns: "He/Him",
    major: "Computer Science",
    classStanding: "Freshmen",
    linkedin: "",
    img: getImagePath("/Ariel.jpg"),
    email: "ArielGarcia2027@u.northwestern.edu",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Samreen Ibrahim",
    pronouns: "She/Her",
    major: "Computer Science",
    classStanding: "Sophomore",
    linkedin: "",
    img: getImagePath("/Samreen.jpeg"),
    email: "",
    website: "",
  },
  {
    role: "Junior Exec Board Member",
    name: "Arturo Fonseca",
    pronouns: "He/Him",
    major: "Computer Science & Data Science",
    classStanding: "Junior",
    linkedin: "https://www.linkedin.com/in/arturo-f/",
    img: getImagePath("/Arturo.jpeg"),
    email: "",
    website: "",
  },
];

export { execBoard2023, juniorExecBoard2023 };
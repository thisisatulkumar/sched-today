// In JavaScript, a week starts from 'Sunday'
const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MESS_MENU = {
  Monday: {
    Morning: ["Sandwich", "Milk & Tea"],
    Afternoon: ["Rice", "Roti", "Arhar Dal", "Raita", "Sabzi"],
    Evening: ["Rice", "Roti", "Rajma", "Soyabean", "Sweets"],
  },
  Tuesday: {
    Morning: ["Samosa & Chhola", "Milk & Tea"],
    Afternoon: ["Rice", "Roti", "Chana Dal", "Sabzi"],
    Evening: ["Parathe", "Chhole", "Rice", "Dahi", "Sabzi"],
  },
  Wednesday: {
    Morning: ["Daliya", "Chana", "Tea"],
    Afternoon: ["Paneer", "Pulao", "Naan", "Raita", "Sabzi"],
    Evening: ["Rice", "Roti", "Arhar Dal", "Sabzi", "Gujiya"],
  },
  Thursday: {
    Morning: ["Dahi Jalebi", "Poha", "Tea"],
    Afternoon: ["Rice", "Roti", "Curry", "Arhar Dal", "Sabzi"],
    Evening: ["Fried Rice", "Masoor Dal", "Sabzi", "Roti", "Dahi Bada"],
  },
  Friday: {
    Morning: ["Idli Sambhar", "Milk & Tea"],
    Afternoon: ["Rice", "Roti", "Mixed Dal", "Raita", "Sabzi"],
    Evening: ["Chhole", "Poori & Bhature", "Rice", "Kheer", "Sabzi"],
  },
  Saturday: {
    Morning: ["Pav Bhaji", "Milk & Tea"],
    Afternoon: ["Paneer", "Pulao", "Roti", "Raita", "Sabzi"],
    Evening: ["---"],
  },
  Sunday: {
    Morning: ["Aalo Parathe", "Lassi", "Tea"],
    Afternoon: ["Veg Biryani", "Papad", "Raita"],
    Evening: ["Rice", "Roti", "Lauki Kofta", "Sabzi", "Icecream"],
  },
};

// chore: add other branches
const TIME_TABLE = {
  "CSE-R": {
    Monday: [
      "DSA",
      "DSA",
      "Maths",
      "CSS",
      "COA/DSA (L)",
      "COA/DSA (L)",
      "DSTL",
    ],
    Tuesday: [
      "",
      "COA",
      "DSTL",
      "DSTL",
      "Mini Proj/COA (L)",
      "Mini Proj/COA (L)",
      "DSA",
    ],
    Wednesday: ["Counseling", "Counseling", "Maths", "Maths", "UHV", "UHV", "CSS"],
    Thursday: [
      "COA",
      "COA",
      "DSA/IT Tools (L)",
      "DSA/IT Tools (L)",
      "DSA",
      "DSA",
      "UHV",
    ],
    Friday: [
      "IT Tools/Mini Proj (L)",
      "IT Tools/Mini Proj (L)",
      "DSTL",
      "DSTL",
      "Maths",
      "Maths",
      "",
    ],
    Saturday: ["", "CSS", "COA", "COA", "Research", "Research", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
};

// in future, if u release this for the public, add a field for choosing section and store it all in localStorage
// in future, add more metadata like timings of periods, teacher name, sections, etc.
// make it a PWA

const currDayContainer = document.querySelector(".currDay");
const prevDayBtn = document.querySelector(".prevDay");
const nextDayBtn = document.querySelector(".nextDay");
const messMenuContainer = document.querySelector(".messMenu");
const timeTableContainer = document.querySelector(".timeTable");

const today = new Date();
const day = today.getDay();

let currDay = day;
let currBranch = "CSE-R";

const renderDay = (day) => {
  currDayContainer.innerHTML = `<strong>${DAYS[day]}</strong>`;
};

const getPrevDay = (day) => {
  if (day == 0) return 6;
  return day - 1;
};

const getNextDay = (day) => {
  if (day == 6) return 0;
  return day + 1;
};

const renderMessMenu = (day) => {
  const messMenu = MESS_MENU[DAYS[day]];

  let html = "";
  for (const [key, value] of Object.entries(messMenu)) {
    const meal = value.join(", ");

    html += `<strong>${key}: </strong>`;
    html += `${meal}<br>`;
  }

  messMenuContainer.innerHTML = html;
};

const renderTimeTable = (day) => {
  const timeTable = TIME_TABLE[currBranch][DAYS[day]];

  let html = "";
  for (let i = 1; i <= 7; i++) {
    html += `<strong>${i}: </strong> ${timeTable[i - 1]} <br>`;

    if (i == 4) html += "<hr>";
  }

  timeTableContainer.innerHTML = html;
};

const renderData = (day) => {
  renderDay(day);
  renderMessMenu(day);
  renderTimeTable(day);
};

prevDayBtn.addEventListener("click", () => {
  currDay = getPrevDay(currDay);
  renderData(currDay);
});
nextDayBtn.addEventListener("click", () => {
  currDay = getNextDay(currDay);
  renderData(currDay);
});

renderData(currDay);

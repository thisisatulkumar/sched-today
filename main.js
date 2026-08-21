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

// chore: add teacher name and timings of periods in future
const TIME_TABLE = {
  "CSE-R": {
    Monday: [
      "DSA",
      "DSA",
      "Maths",
      "CSS",
      "DLCO/DSA (L)",
      "DLCO/DSA (L)",
      "DSTL",
    ],
    Tuesday: [
      "",
      "DLCO",
      "DSTL",
      "DSTL",
      "Mini Proj/Mini Proj (L)",
      "Mini Proj/Mini Proj (L)",
      "DSA",
    ],
    Wednesday: [
      "Counseling",
      "Counseling",
      "Maths",
      "Maths",
      "UHV",
      "UHV",
      "CSS",
    ],
    Thursday: [
      "DLCO",
      "DLCO",
      "DSA/IT Tools (L)",
      "DSA/IT Tools (L)",
      "DSA",
      "DSA",
      "UHV",
    ],
    Friday: [
      "IT Tools/--- (L)",
      "IT Tools/--- (L)",
      "DSTL",
      "DSTL",
      "Maths",
      "Maths",
      "",
    ],
    Saturday: ["", "CSS", "DLCO", "DLCO", "Research", "Research", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  "CSE-AI": {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  "CSE-SF": {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  ECE: {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  EE: {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  ME: {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  CE: {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
  CHE: {
    Monday: ["", "", "", "", "", "", ""],
    Tuesday: ["", "", "", "", "", "", ""],
    Wednesday: ["", "", "", "", "", "", ""],
    Thursday: ["", "", "", "", "", "", ""],
    Friday: ["", "", "", "", "", "", ""],
    Saturday: ["", "", "", "", "", "", ""],
    Sunday: ["", "", "", "", "", "", ""],
  },
};

// in future, if u release this for the public, add a field for choosing section and store it all in localStorage
// in future, add more metadata like timings of periods, teacher name, sections, etc.

const currDayContainer = document.querySelector(".currDay");
const prevDayBtn = document.querySelector(".prevDay");
const nextDayBtn = document.querySelector(".nextDay");
const branchSelect = document.querySelector(".branchSelect");
const messMenuContainer = document.querySelector(".messMenu");
const timeTableContainer = document.querySelector(".timeTable");

const today = new Date();
const day = today.getDay();

let currDay = day;
let currBranch = localStorage.getItem("branch") || "CSE-R";

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

  if (TIME_TABLE[currBranch][DAYS[1]].every((period) => period === "")) {
    html +=
      "<strong class='openPullReq'><a href='https://github.com/thisisatulkumar/sched-today'>Open a pull request</a> to add your branch's time table</strong>";
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
branchSelect.addEventListener("change", (e) => {
  currBranch = e.target.value;
  renderData(currDay);

  localStorage.setItem("branch", currBranch);
});

renderData(currDay);

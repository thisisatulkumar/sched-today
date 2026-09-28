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
    Morning: ["Sandwich", "Milk", "Tea", "Sauce"],
    Afternoon: ["Rice", "Roti", "Arhar Dal", "Raita", "Sabzi", "Salad"],
    Evening: [
      "Rice",
      "Roti",
      "Aloo Soya Bean Sabzi",
      "Masoor Dal",
      "Custard",
      "Salad",
    ],
  },
  Tuesday: {
    Morning: ["Samosa & Chhole", "Milk", "Tea", "Chutney"],
    Afternoon: ["Rice", "Roti", "Chana Dal", "Aloo Matar Ki Sabzi", "Salad"],
    Evening: ["Rice Fry", "Manchurian", "Roti", "Rabdi", "Jalebi", "Salad"],
  },
  Wednesday: {
    Morning: ["Maggie", "Tea", "Milk"],
    Afternoon: [
      "Pulao",
      "Rice",
      "Paneer",
      "Raita",
      "Tandoori Roti",
      "Salad",
      "Aloo Fries",
    ],
    Evening: ["Rice", "Roti", "Arhar Dal", "Sabzi", "Gujiya", "Salad"],
  },
  Thursday: {
    Morning: ["Dahi Jalebi", "Poha", "Tea"],
    Afternoon: ["Rice", "Roti", "Besan Kadhi", "Arhar Dal", "Sabzi", "Salad"],
    Evening: [
      "Puri + Bhature/Kachori",
      "Chhole",
      "Rice",
      "Kheer",
      "Achar",
      "Sabzi",
      "Salad",
    ],
  },
  Friday: {
    Morning: ["Bread Pakoda", "Garlic-Tomato Ki Chutney", "Milk", "Tea"],
    Afternoon: [
      "Rice",
      "Roti",
      "Arhar Dal",
      "Raita",
      "Mushroom Ki Sabzi",
      "Salad",
    ],
    Evening: [
      "Rice Fry",
      "Kali Masoor Dal",
      "Sabzi",
      "Roti",
      "Moong Dal Ka Halwa",
      "Salad",
    ],
  },
  Saturday: {
    Morning: ["Tikki", "Milk", "Tea"],
    Afternoon: [
      "Pulao",
      "Rice",
      "Roti",
      "Paneer",
      "Raita",
      "Sabzi",
      "Salad",
      "Aloo Fries",
    ],
    Evening: [],
  },
  Sunday: {
    Morning: ["Aalo Parathe", "Lassi", "Tea"],
    Afternoon: ["Veg Biryani", "Papad", "Chutney", "Raita", "Salad"],
    Evening: ["Rice", "Roti", "Mithai", "Salad", "Anda Curry/Rajma"],
  },
};

const CLASS_TIMINGS = [
  "09:10 AM - 10:00 AM",
  "10:00 AM - 10:50 AM",
  "10:50 AM - 11:40 AM",
  "11:40 AM - 12:30 PM",
  "02:00 PM - 02:50 PM",
  "02:50 PM - 03:40 PM",
  "03:40 PM - 04:30 PM",
];

// chore: add teacher name
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
      "Mini Proj/DLCO (L)",
      "Mini Proj/DLCO (L)",
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
      "",
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
    Saturday: ["UHV", "CSS", "DLCO", "DLCO", "Research", "Research", ""],
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
// in future, add more metadata like teacher name, sections, etc.

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
    html += `<strong>[${CLASS_TIMINGS[i - 1]}] ${i}: </strong> ${timeTable[i - 1]} <br>`;

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

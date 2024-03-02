const list = [
  {
    code: "4-120",
    subject: "CS 1233",
    name: "COMPUTER PROGRAMMING 2",
    division: "CS",
    a: "6",
    s: "40",
    r: "0",
    e: "34",
    sched: "* 5:50P-7:20P F605 MW * 5:50P-7:50P F605 F *",
    teacher: "LUMAPAS, RAUL VINENT",
    section: "InTech 1-C, InfoSys 1-A",
    enrollable: "Yes",
    unblocked: "Yes",
  },
  {
    code: "4-110",
    subject: "IT 1232",
    name: "COMPETITIVE PROGRAMMING (PRE-CALCULUS)",
    division: "CS",
    a: "25",
    s: "40",
    r: "0",
    e: "15",
    sched: "* 5:50P-8:20P F609 TTh *",
    teacher: "MATCHON, RODWELL",
    section: "InTech 1-C",
    enrollable: "Yes",
    unblocked: "Yes",
  },
  {
    code: "4-114",
    subject: "IT 2241",
    name: "EVENT-DRIVEN PROGRAMMING",
    division: "CS",
    a: "25",
    s: "40",
    r: "0",
    e: "15",
    sched: "* 2:05P-4:35P F605 TTh *",
    teacher: "DE JESUS, DWIGHT IAN",
    section: "InTech 2-B",
    enrollable: "Yes",
    unblocked: "Yes",
  },
  {
    code: "4-109",
    subject: "IT 2242",
    name: "STATISTICS FOR RESEARCH",
    division: "CS",
    a: "0",
    s: "40",
    r: "0",
    e: "40",
    sched: "* 9:20A-10:50A D404 MW *",
    teacher: "DUHAYLUNGSOD, KENNETH JOHN",
    section: "InTech 2-A, InTech 2-B",
    enrollable: "Yes",
    unblocked: "Yes",
  },
  {
    code: "4-104",
    subject: "IT 2243",
    name: "IT ELECTIVE 1",
    division: "CS",
    a: "19",
    s: "40",
    r: "0",
    e: "21",
    sched: "* 12:25P-1:55P F610 MW * 1:00P-3:00P F610 F *",
    teacher: "GERALDE, JOHN ROY",
    section: "",
    enrollable: "Yes",
    unblocked: "Yes",
  },
  {
    code: "4-104",
    subject: "IT 2243",
    name: "IT ELECTIVE 1 ",
    division: "CS",
    a: "19",
    s: "40",
    r: "0",
    e: "21",
    sched: "* 5:50P-7:20P F610 MW *",
    teacher: "ARROCENA, ANDREI FRANCIS",
    section: "",
    enrollable: "Yes",
    unblocked: "Yes",
  },
]
const gradeData = document
  .getElementById("list")
  .getElementsByTagName("tbody")[0]

for (let subj of list) {

  const newRow = gradeData.insertRow(-1)
  const newCellCode = newRow.insertCell()
  const newCellSubject = newRow.insertCell()
  const newCellName = newRow.insertCell()
  const newCellDivision = newRow.insertCell()
  const newCellA = newRow.insertCell()
  const newCellS = newRow.insertCell()
  const newCellR = newRow.insertCell()
  const newCellE = newRow.insertCell()
  const newCellSched = newRow.insertCell()
  const newCellTeacher = newRow.insertCell()
  const newCellSection = newRow.insertCell()
  const newCellEnrollable = newRow.insertCell()
  const newCellUnblocked = newRow.insertCell()

  newCellCode.innerHTML = subj.code
  newCellSubject.innerHTML = subj.subject
  newCellName.innerHTML = subj.name
  newCellDivision.innerHTML = subj.division
  newCellA.innerHTML = subj.a || ""
  newCellS.innerHTML = subj.s || ""
  newCellR.innerHTML = subj.r || ""
  newCellE.innerHTML = subj.e || ""
  newCellSched.innerHTML = subj.sched
  newCellTeacher.innerHTML = subj.teacher || ""
  newCellSection.innerHTML = subj.section

  if (subj.enrollable === "Yes") {
    newCellEnrollable.innerHTML = `<img src="./images/check.png" alt="Check Image">`
  } else {
    newCellEnrollable.innerHTML = subj.enrollable || ""
  } if (subj.unblocked === "Yes") {
    newCellUnblocked.innerHTML = `<img src="./images/check.png" alt="Check Image">`
  } else {
    newCellUnblocked.innerHTML = subj.unblocked || ""
  }
}
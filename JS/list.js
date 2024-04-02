document.addEventListener("DOMContentLoaded", function () {
  const list = [
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
      unblocked: "Yes"
    }
  ]

  const gradeData = document.getElementById("list")
  gradeData.classList.add("border", "px-4", "py-2")
  const headerRow = document.createElement("tr")
  headerRow.classList.add("bg-gray-200")

  const headerCells = [
    { 
      text: "CODE", 
      width: "w-3/12" 
    },
    { 
      text: "SUBJECT", 
      width: "w-3/12" 
    },
    { 
      text: "DESCRIPTION", 
      width: "w-4/12" 
    },
    { 
      text: "DIVISION", 
      width: "w-3/12" 
    },
    { 
      text: "A", 
      width: "w-3/12" 
    },
    { 
      text: "S", 
      width: "w-3/12" 
    },
    { 
      text: "R", 
      width: "w-3/12" 
    },
    { 
      text: "E", 
      width: "w-3/12" 
    },
    { 
      text: "SCHEDULE", 
      width: "w-3/12" 
    },
    { 
      text: "TEACHER", 
      width: "w-3/12" 
    },
    { 
      text: "SECTION(S)", 
      width: "w-3/12" 
    },
    { 
      text: "ENROLLABLE", 
      width: "w-3/12" 
    },
    { 
      text: "UNBLOCKED", 
      width: "w-3/12" 
    }
  ]

  headerCells.forEach(cell => {
    const headerCell = document.createElement("th")
    headerCell.textContent = cell.text
    headerCell.classList.add("py-2", "border", "px-4", "text-center", cell.width)
    headerRow.appendChild(headerCell)
  })

  gradeData.appendChild(headerRow)

  for (let subj of list) {
    const newRow = document.createElement("tr")
    newRow.classList.add("bg-gray-100")
    
    const cellsData = [
      subj.code, subj.subject, subj.name, subj.division, 
      subj.a || "", subj.s || "", subj.r || "", subj.e || "", 
      subj.sched, subj.teacher || "", subj.section
    ]

    cellsData.forEach(cellText => {
      const newCell = document.createElement("td")
      newCell.textContent = cellText
      newCell.classList.add("text-center", "border", "px-4", "py-2")
      newRow.appendChild(newCell)
    })

    const createCheckboxCell = (value) => {
      const newCell = document.createElement("td")
      newCell.classList.add("text-center", "border", "px-4", "py-2")
      const checkboxImg = document.createElement("img")
      checkboxImg.src = value === "Yes" ? "./images/check.png" : "./images/cross.png"
      checkboxImg.alt = value === "Yes" ? "Checked" : "Unchecked"
      checkboxImg.style.verticalAlign = "middle"
      newCell.appendChild(checkboxImg)
      return newCell
    }
    
    const newCellEnrollable = createCheckboxCell(subj.enrollable)
    const newCellUnblocked = createCheckboxCell(subj.unblocked)
    newRow.appendChild(newCellEnrollable)
    newRow.appendChild(newCellUnblocked)
    gradeData.appendChild(newRow)
  }
})
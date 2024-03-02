document.addEventListener("DOMContentLoaded", function () {
  const gradesTables = document.querySelectorAll(".grades tbody")

  const dummyGradesList = [
      [
          {
              code: "IT 2241",
              name: "EVENT-DRIVEN PROGRAMMING",
              prelim: "",
              midterm: "",
              prefinal: "",
              final: "",
          },
      ],
  ]

  const targetSubject = "EVENT-DRIVEN PROGRAMMING"
  dummyGradesList.forEach((dummyGrades, index) => {
      const gradesTable = gradesTables[index]

      dummyGrades.forEach((grade) => {
          const row = document.createElement("tr")
          row.innerHTML = `
              <td>${grade.code}</td>
              <td>${grade.name}</td>
              <td class="center-text">${grade.prelim}</td>
              <td class="center-text">${grade.midterm}</td>
              <td class="center-text">${grade.prefinal}</td>
              <td class="center-text">${grade.name === targetSubject ? submitGrade() : grade.final}</td>
          `
          gradesTable.appendChild(row)
          row.querySelectorAll(".center-text").forEach(cell => {
              const currentGrade = cell.textContent.trim()
              redText(cell, currentGrade)
          })
      })

      function submitGrade() {
          return localStorage.getItem('submittedGrade') || ''
      }

      function redText(cell, grade) {
          const redGrades = ["F", "FD", "WP"]
          const isRedGrade = redGrades.includes(grade)
          cell.classList.toggle("red-text", isRedGrade)
      }
  })
})
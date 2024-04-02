document.addEventListener("DOMContentLoaded", function () {
  const studentInfoTable = document.getElementById('studentInfoTable')
  studentInfoTable.innerHTML = generateStudentInfoHTML()
  const gradesTableBody = document.getElementById('gradesTableBody')
  const dummyGradesList = [
    {
      code: "IT 2241",
      name: "EVENT-DRIVEN PROGRAMMING",
      prelim: "",
      midterm: "",
      prefinal: "",
      final: "",
    },
  ]

  const gradesTableHeader = document.createElement("tr")
  gradesTableHeader.innerHTML = `
      <th class="py-2">Code</th>
      <th class="py-2">DESCRIPTIVE TITLE</th>
      <th class="py-2">PRELIM</th>
      <th class="py-2">MIDTERM</th>
      <th class="py-2">PRE-FINAL</th>
      <th class="py-2">FINAL</th>
  `
  gradesTableBody.appendChild(gradesTableHeader)

  dummyGradesList.forEach((grade) => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td class="text-center">${grade.code}</td>
      <td class="text-center">${grade.name}</td>
      <td class="text-center font-bold">${grade.prelim}</td>
      <td class="text-center font-bold">${grade.midterm}</td>
      <td class="text-center font-bold">${grade.prefinal}</td>
      <td class="text-center font-bold">${grade.final}</td>
    `
    gradesTableBody.appendChild(row)
  })

    function generateStudentInfoHTML() {
      const html = `
        <tr class="bg-gray-100">
          <th class="w-1/6 py-2"><b>Card No:</b></th>
          <td class="w-1/6 py-2">15505304</td>
          <th class="w-1/6 py-2"><b>Course:</b></th>
          <td class="w-1/6 py-2">BS-IT</td>
          <th class="w-1/6 py-2"><b>Year:</b></th>
          <td class="w-1/6 py-2">2</td>
        </tr>
        <tr class="bg-gray-200">
          <th class="w-1/6 py-2"><b>ID No:</b></th>
          <td class="w-1/6 py-2">128848</td>
          <th class="w-1/6 py-2"><b>Section:</b></th>
          <td class="w-1/6 py-2">InTech 2-B</td>
          <th class="w-1/6 py-2"><b>Credit Units:</b></th>
          <td class="w-1/6 py-2">3.00</td>
        </tr>
        <tr class="bg-gray-100">
          <th class="w-1/6 py-2"><b>Name:</b></th>
          <td class="w-1/6 py-2">FERDINAND, EDWARD LAWRENCE</td>
          <th class="w-1/6 py-2"><b>Division:</b></th>
          <td class="w-1/6 py-2">CS</td>
          <th class="w-1/6 py-2"><b>Status:</b></th>
          <td class="w-1/6 py-2"><b>ENROLLED</b></td>
        </tr>
        <tr class="bg-gray-200">
          <th class="w-1/6 py-2"><b>Semester:</b></th>
          <td class="w-1/6 py-2">2nd Semester, 2023-2024</td>
          <th class="w-1/6 py-2"><b>Curriculum Year:</b></th>
          <td class="w-1/6 py-2">2019</td>
          <th class="w-1/6 py-2"><b>OLD STUDENT/REGULAR</b></th>
        </tr>
        <tr class="bg-gray-100">
          <th class="w-1/6 py-2"></th>
          <td class="w-1/6 py-2"></td>
          <th class="w-1/6 py-2"><b>Max Load:</b></th>
          <td class="w-1/6 py-2">24</td>
          <th class="w-1/6 py-2"><b>Annual QPI:</b></th>
          <td class="w-1/6 py-2">4</td>
        </tr>
      `
      return html
    }

    const submittedGrade = localStorage.getItem('submittedGrade');
    if (submittedGrade) {
      const finalCell = document.querySelector('.text-center.font-bold:last-child');
      if (finalCell) {
        finalCell.textContent = submittedGrade
        finalCell.classList.add(getGradeColorClass(submittedGrade))
      }
    }

    function getGradeColorClass(grade) {
      const redGrades = ["F", "FD", "WP"];
      return redGrades.includes(grade) ? "text-red-500" : "";
    }
})
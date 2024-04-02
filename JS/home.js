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
    <tr class="bg-gray-100">
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
    <tr class="bg-gray-100">
      <th class="w-1/6 py-2"><b>Semester:</b></th>
      <td class="w-1/6 py-2">2nd Semester, 2023-2024</td>
      <th class="w-1/6 py-2"><b>Curriculum Year:</b></th>
      <td class="w-1/6 py-2">2019</td>
      <th class="w-1/6 py-2"><b>OLD STUDENT/REGULAR</b></th>
      <td class="w-1/6 py-2"></td>
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

const studentInfoTable = document.getElementById('studentInfoTable')
studentInfoTable.innerHTML = generateStudentInfoHTML()

const headerRow = `
  <tr class="bg-gray-100">
    <th class="w-1/12 py-2"><b>CODE</b></th>
    <th class="w-1/12 py-2"><b>SUBJ. NO</b></th>
    <th class="w-3/12 py-2"><b>DESCRIPTIVE TITLE</b></th>
    <th class="w-2/12 py-2"><b>SCHEDULE</b></th>
    <th class="w-2/12 py-2"><b>TEACHER</b></th>
    <th class="w-1/12 py-2"><b>UNIT</b></th>
    <th class="w-1/12 py-2"><b>REQUIRED</b></th>
  </tr>
`

const courseTable = document.getElementById('courseTable')
courseTable.innerHTML = headerRow

const tableData = [
  {
    code: '4-114',
    subjNo: 'IT 2241',
    title: 'EVENT-DRIVEN PROGRAMMING',
    schedule: '* 2:05P-4:35P F605 TTh *',
    teacher: 'DE JESUS, IAN DWIGHT',
    unit: '3/5',
    required: '<img src="./images/check.png" alt="Check Image" class="mx-auto">'
  },
]

tableData.forEach(data => {
  const newRow = document.createElement('tr')
  newRow.className = 'bg-gray-200'

  newRow.innerHTML = `
    <th class="w-1/12 py-2">${data.code}</th>
    <td class="w-1/12 py-2 text-center">${data.subjNo}</td>
    <th class="w-1/3 py-2">${data.title}</th>
    <td class="w-1/6 py-2 text-center">${data.schedule}</td>
    <th class="w-1/6 py-2">${data.teacher}</th>
    <td class="w-1/12 py-2 text-center">${data.unit}</td>
    <td class="w-1/12 py-2 text-center">${data.required}</td>
  `
  courseTable.appendChild(newRow)
})
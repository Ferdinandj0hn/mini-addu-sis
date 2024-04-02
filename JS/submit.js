document.addEventListener("DOMContentLoaded", function () {
    const submitList = [
        {
            code: "128848",
            studentName: "FERDINAND, EDWARD LAWRENCE",
            final: "",
            grdType: "NEW",
            yearLvl: "2",
            acadStatus: "REGULAR",
            yearofEntry: "2022",
            entryyearLvl: "1"
        }
    ]
    const submitData = document.getElementById("submitList")
    submitData.classList.add("mx-auto")

    const submitTableHeader = document.createElement("thead")
    submitTableHeader.innerHTML = `
        <tr class="bg-grey-200">
            <th class="border px-4 py-2">CODE</th>
            <th class="border px-4 py-2">STUDENT NAME</th>
            <th class="border px-4 py-2">FINAL</th>
            <th class="border px-4 py-2">GRD. TYPE</th>
            <th class="border px-4 py-2">YEAR LVL</th>
            <th class="border px-4 py-2">ACAD. STATUS</th>
            <th class="border px-4 py-2">YEAR OF ENTRY</th>
            <th class="border px-4 py-2">ENTRY YEAR LEVEL</th>
        </tr>
    `
    submitData.appendChild(submitTableHeader)

    const selectedGrades = {};

    for (let submit of submitList) {
        const newRow = submitData.insertRow()
        newRow.innerHTML = `
            <td class="border px-4 py-2">${submit.code}</td>
            <td class="border px-4 py-2 text-center">${submit.studentName}</td>
            <td class="border px-4 py-2 text-center">
                <div class="relative">
                    <button class="grade-button cursor-pointer">⌄</button>
                    <ul class="grade-list hidden absolute bg-white border border-gray-300 mt-1 py-1 rounded w-20">
                        <li class="grade-item cursor-pointer">A</li>
                        <li class="grade-item cursor-pointer">B+</li>
                        <li class="grade-item cursor-pointer">B</li>
                        <li class="grade-item cursor-pointer">C+</li>
                        <li class="grade-item cursor-pointer">C</li>
                        <li class="grade-item cursor-pointer">D</li>
                        <li class="grade-item cursor-pointer">F</li>
                        <li class="grade-item cursor-pointer">FD</li>
                        <li class="grade-item cursor-pointer">WP</li>
                    </ul>
                </div>
            </td>
            <td class="border px-4 py-2 text-center grdType">${submit.grdType}</td>
            <td class="border px-4 py-2 text-center">${submit.yearLvl}</td>
            <td class="border px-4 py-2 text-center">${submit.acadStatus}</td>
            <td class="border px-4 py-2 text-center">${submit.yearofEntry}</td>
            <td class="border px-4 py-2 text-center">${submit.entryyearLvl}</td>
        `
        selectedGrades[submit.code] = null;
    }

    submitData.addEventListener("mousedown", function (event) {
        const target = event.target
        if (target.classList.contains("grade-button")) {
            const gradeList = target.nextElementSibling
            gradeList.classList.toggle("hidden")
        } else if (target.classList.contains("grade-item")) {
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            })
            target.dispatchEvent(clickEvent)
        }
    })

    submitData.addEventListener("click", function (event) {
        const target = event.target
        if (target.classList.contains("grade-item")) {
            const selectedGrade = target.textContent
            const parentRow = target.closest("tr")
            const code = parentRow.cells[0].textContent;
            const gradeButton = parentRow.querySelector(".grade-button")

            if (selectedGrades[code] !== selectedGrade) {
                parentRow.cells[2].innerHTML = `<strong>${selectedGrade}</strong>`
                selectedGrades[code] = selectedGrade;
                gradeButton.innerHTML = "Change Grade"
                localStorage.setItem('submittedGrade', selectedGrade)
                parentRow.cells[2].classList.toggle("text-red-500", isRedGrade(selectedGrade))
                const gradeList = target.closest(".grade-list")
                gradeList.classList.add("hidden")
            } else {
                const gradeList = target.closest(".grade-list")
                gradeList.classList.add("hidden")
            }
        }
    })

    function isRedGrade(grade) {
        const redGrades = ["F", "FD", "WP"]
        return redGrades.includes(grade)
    }
})
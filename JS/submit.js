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
            entryyearLvl: "1",
        },
    ]
    const submitData = document.getElementById("submitList").getElementsByTagName("tbody")[0]

    for (let submit of submitList) {
        const newRow = submitData.insertRow()
        const code = newRow.insertCell(0)
        code.innerHTML = submit.code
        const studentName = newRow.insertCell(1)
        studentName.innerHTML = submit.studentName
        const finalCell = newRow.insertCell(2)
        const gradeButton = document.createElement("button")
        gradeButton.classList.add("grade-button")
        gradeButton.innerHTML = "⌄"
        gradeButton.onclick = function () {
            gradeList(finalCell, gradeButton)
        }
        finalCell.appendChild(gradeButton)
        const grdType = newRow.insertCell(3)
        grdType.innerHTML = submit.grdType
        const yearLvl = newRow.insertCell(4)
        yearLvl.innerHTML = submit.yearLvl
        const acadStatus = newRow.insertCell(5)
        acadStatus.innerHTML = submit.acadStatus
        const yearofEntry = newRow.insertCell(6)
        yearofEntry.innerHTML = submit.yearofEntry
        const entryyearLvl = newRow.insertCell(7)
        entryyearLvl.innerHTML = submit.entryyearLvl
    }

    function gradeList(finalCell, gradeButton) {
        const gradeList = document.createElement("ul")
        gradeList.classList.add("grade-list")
        const grades = ['A', 'B+', 'B', 'C+', 'C', 'D', 'F', 'FD', 'WP']
        grades.forEach(grade => {
            const listItem = document.createElement("li")
            listItem.textContent = grade
            listItem.onclick = function () {
                finalCell.innerHTML = `<strong>${grade}</strong>`
                gradeButton.innerHTML = "Change Grade";
                gradeList.remove()
                localStorage.setItem('submittedGrade', grade)
                finalCell.classList.toggle("red-text", redText(grade))
            };
            gradeList.appendChild(listItem)
        });
        finalCell.appendChild(gradeList);
        gradeButton.remove()
    }

    function redText(value) {
        const redGrades = ["F", "FD", "WP"]
        return redGrades.includes(value)
    }
})
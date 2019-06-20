// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
        officeName: "Medical Office",
        streetAddress: "123 Main St.",
        patientName: "William Bennet",
        visitDate: "05/23/2018",
        amountBilled: 123.34,
        dueDate: "06/25/2018"
    }

// Lightning Exercise 2: Copy the code below and paste it above your object.

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])
// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
const doctorBillList = Object.values(doctorBill)
console.log(doctorBillList)
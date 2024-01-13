let arr = [
  { id: 1, name: "Madhan", age: "21", profession: "developer" },
  { id: 2, name: "Surya", age: "21", profession: "developer" },
  { id: 3, name: "Bharath", age: "21", profession: "system admin" },
];
function PrintDeveloperbyMap() {
  const developers = arr
    .filter((employee) => employee.profession === "developer")
    .map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "Madhu Bhalan", age: "22", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "system admin");
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "Rahul", age: "22", profession: "Accountant" },
    { id: 6, name: "Gokul", age: "21", profession: "Chartered Accountancy" },
    { id: 7, name: "Srikanth", age: "21", profession: "Software Engineer" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}

import { useState } from "react";
import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';
import Teams from './Teams';

const Employees = () => {

  const [selectedTeam, setTeam] = useState("TeamB");

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

function handleTeamSelectionChange(event)
{
  console.log(event.target.value);
  setTeam(event.target.value);
}

  function handleEmployeeCardClick(event){
    console.log(event.target.value);
    //Call map function on employees array to return a transformed array.
    //Where relevant employee card is click on the ui within the array is changed  
    //Ex. if team A is selected by dropdown, and the selection of the employee card will change, whereby their team name property will be set to the team selected in the dropdown list. If an employee is already a member of the selected team the card representing employee will have a box shadow around it. When a card with boxshadow is clciked the employee card property will be set to empty string, and box shadow removed from the ui. 
    //The ternary operator checks to see if employee on card, matches current evaluated item in employees array. If a match is found, the evaluated employee items team name property is changed accordingly.

    //Basically if a when a card is clicked if the employee the card is already a member of the team, this functionality causes employee to be removed from taht team, if employee is not a member of that team, they are added to that team. Once all employees are tranveresed, the newly transformed array is assigned to transformedEmployees.
    
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                                ?(employee.TeamName ==selectedTeam)?{...employees,                                                             teamName:''}:{...employees, teamName: selectedTeam}
                                                :employee);
  setEmployees(transformedEmployees)
    
  }

  
  return (
     <main className = "container">
      <div className="row justify-content-center mt-3 mb-3"> 
        <div class = "col-6">
          <Teams selectedTeam = {selectedTeam}  handleTeamSelectionChange = {handleTeamSelectionChange}/>
        </div>
      </div>
          <div className="row justify-content-center mt-3 mb-3"> 
        <div class = "col-8">
          <div className="card-collection">
       {
      employees.map((employee) => (
        
      ))
       }
            </div>
          </div>
         </div>
     </main>
   )
 }
export default Employees
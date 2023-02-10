import {useState} from 'react';
//UseState hook returns pair of values, the current state and function that updates it

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) =>{
  //pass in the functiongroupTeamMembers to the useState hook that will return default value of grouped employees array. Each object in group employees array will contain property that contains teamName, employee data for employees and property named collapsed. For collapsed property we wills tore state property in collapsible list that will retunr from group tea members component.
  const [groupedEmployees, setGroupedData]  = useState(groupTeamMembers()); //returns default state stored object in employees array
  function groupTeamMembers()
  {
//the collapsed property of the relevant team will be stored in the current boolean value of collapsed property
//either collapse or expand the Team listing
     var teams = [];
    var teamAMembers = employees.filter((employee) => employee.teamName === "TeamA");
    var teamA = {team:'teamA', members:teamAMembers, collapsed: selectedTeam === 'TeamA'?false:true}
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === "TeamB");
    var teamB = {team:'teamB', members:teamAMembers, collapsed: selectedTeam === 'TeamB'?false:true}
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === "TeamC");
    var teamC = {team:'teamC', members:teamAMembers, collapsed: selectedTeam === 'TeamC'?false:true}
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === "TeamD");
    var teamD = {team:'teamD', members:teamAMembers, collapsed: selectedTeam === 'TeamD'?false:true}
    teams.push(teamD);

    return teams;
    
  }
  return (
      <main className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <vid className="col-8">
            <h1>Grouped Team Members</h1>
          </div>
        </div>
      </main>
    
  )
    
}
export default GroupedTeamMembers;
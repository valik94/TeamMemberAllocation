
const TeamMembers = ({employees handleEmployeeCardClick, selectedTeam}) =>{
  return (
    employees.map((employee) =>(
      <TeamMemberCard handleEmployeeCardClick = {handleEmployeeCardClick} selectedTeam={selectedTeam}/>
      
    ))
  )
}
export default TeamMembers;
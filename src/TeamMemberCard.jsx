
const TeamMemberCard = ({ handleEmployeeCardClick, selectedTeam}) =>{
  return (
         <div id={employee.id} className = "card m-2" style={{cursor: "pointer" }} onClick = {handleEmployeeCardClick}>
        <p>{employee.fullName}</p>
        
          {(employee.gender === 'male')?<img src={maleProfile} className="card-img-top"/>
                                        :<img src={femaleProfile} className="card-img-top"/>}
          <div className="card-body">
          <h5 className="card-title">Full Name: {employee.fullName}</h5>
          <p className="card-text"><b>Desigation:</b> {employee.designation}</p>
        </div>
        </div>
      
    ))
  )
}
export default TeamMembers;
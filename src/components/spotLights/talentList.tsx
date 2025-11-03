import ProfileCard from "./talentCard";
import Button from "../common/Button";
const profiles = [
     {name:"Sam Smith",photo:"/img/spotlight/image 27.svg",gender: "Male" ,location: "Lagos, Nigeria", role:"Business Development Manager",experience:"10 Years" },
     {name:"Grace Favour",photo:"/img/spotlight/image 24.svg",gender: "Female" ,location: "Lagos, Nigeria", role:"Business Operations Manager",experience:"5 Years"},
     { name:"Daniel James",photo:"/img/spotlight/image 26.svg",gender: "Male" ,location: "Lagos, Nigeria", role:"Accountant",experience:"4 Years"},
     {name:"Peace Bright",photo:"/img/spotlight/image 25.svg",gender: "Female" ,location: "Lagos, Nigeria", role:"Operations Manager",experience:" 6 Years"},
     {name:"Sam Smith",photo:"/img/spotlight/image 27.svg",gender: "Male" ,location: "Lagos, Nigeria", role:"Digital Marketing Executive",experience:"4 Years"},
     {name:"Daniel James",photo:"/img/spotlight/image 26.svg",gender: "Male" ,location: "Lagos, Nigeria", role:"Digital Marketing Executive",experience:"4"},

];


function TalentList (){
    return(
        <div>
        {profiles.map((profile,index)=>
            <div key={index}>

            <ProfileCard
            name={profile.name}    
            ImgUrl={profile.photo}
            gender={profile.gender}
            location={profile.location}
            role={profile.role}
            experience={profile.experience}
                />
					
                
            </div>
        )}
        <div className="flex justify-center">
           <Button variant="secondary" className="mx-auto mb-30" arrow>Return to home</Button>
        </div>
    
					
        </div>
    )
}

export default TalentList;





































































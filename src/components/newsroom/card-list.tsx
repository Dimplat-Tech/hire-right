
import Card from "./card"
import React from "react";
import NewsroomButton from "./button";


const ListCards =  [
 {
    title: "Talents",
    subtitle: "Chatbot and Virtual Assistant",
    image: "/img/newsroom/talent.svg",
    location: "Lagos Nigeria",
    date: "27/07/2025",
    Read: "3min",
 },
 {
    title: "Talents",
    subtitle: "Modern Marketing Summit, Lagos",
    image: "/img/newsroom/talent2.svg",
    location: "Lagos Nigeria",
    date: "27/07/2025",
    Read: "3mins",

 },
 {
    title: "Hiring Managers",
    subtitle: "Registration for Opening Workshop",
    image: "/img/newsroom/manager.svg",
    location: "Lagos Nigeria",
    date: "27/07/2025",
    Read: "3mins",
 },
]
const repeatedList = Array(12).fill(ListCards).flat().slice(0, 12);

function CardList(){


return(
  <>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8"  >
      {repeatedList.map((ListCard, id) => (
        <Card  logo={"/img/newsroom/Logo.svg"} 

          key={id}
          title={ListCard.title}
          subtitle={ListCard.subtitle}
          image={ListCard.image}
          location={ListCard.location}
          date={ListCard.date}
          read={ListCard.Read}
        />
      ))}
        
    </div>

    <NewsroomButton/>   
  </>
);

}



  export default CardList;
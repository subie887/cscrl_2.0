import React from "react";
import InfoCard from "../components/InfoCard";
import conferencesImg from "../assets/conferencesImg.jpg";
import researchImg from "../assets/researchImg.jpg";
import calendarImg from "../assets/calendarImg.jpg";
import riskindexImg from "../assets/riskindexImg.jpg"
import { useCookies } from 'react-cookie';
import { UserContext } from "../App";

function Home() {
    const [cookies] = useCookies(['_auth_state'])
    const {user, setUser} = React.useContext(UserContext)

    React.useEffect(() => {
        const updateUser = () => {
            console.log(cookies._auth_state)
            setUser(cookies._auth_state)
        }
        updateUser()
      }, [cookies._auth_state])

    const [infoCards, setInfoCards] = React.useState([
        {
            img: conferencesImg,
            title: "Conferences",
            btnText: "Open",
            link: "/conferences"
        },
        {
            img: researchImg,
            title: "Research",
            btnText: "Open",
            link: "/research"
        },
        {
            img: calendarImg,
            title: "Calendar",
            btnText: "Open",
            link: "/calendar"
        },
        {
            img: conferencesImg,
            title: "Podcasts",
            btnText: "Open",
            link: "/podcasts"
        },
        {
            img: riskindexImg,
            title: "LRMI",
            btnText: "Open",
            link: "/lrmi"
        },
        {
            img: conferencesImg,
            title: "Newsletter",
            btnText: "Open",
            link: "/newsletter"
        },
        
    ])

    const infoCardElements = infoCards.map(card => (
        <InfoCard 
            key={card.title}
            img={card.img}
            title={card.title}
            btnText={card.btnText}
            link={card.link}
        />
    ))

    return (
        <main>
            <h1>Home</h1>
            <section className="card-row">
                {infoCardElements}
            </section>
        </main>
    )
}

export default Home;
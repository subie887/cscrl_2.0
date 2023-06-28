import React from "react";
import InfoCard from "../components/InfoCard";
import conferencesImg from "../assets/conferences-background.jpg";
import researchImg from "../assets/research-background.jpg";
import calendarImg from "../assets/calendar-background.jpg";
import newsletterImg from "../assets/newsletter-background.jpg"
import podcastsImg from "../assets/podcasts-background.jpg"
import riskindexImg from "../assets/riskindex-background.jpg"
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
            img: podcastsImg,
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
            img: newsletterImg,
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
            <h3 className="sub-title">You're in member portal <br /><a href="https://business.lehigh.edu/centers/center-for-supply-chain-research-at-lehigh">Return to CSCRL public website</a></h3>
            <section className="card-row">
                {infoCardElements}
            </section>
        </main>
    )
}

export default Home;
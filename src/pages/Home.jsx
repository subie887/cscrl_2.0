import React from "react";
import InfoCard from "../components/InfoCard";
import placeholder from "../assets/test-image.jpg";
import { useCookies } from 'react-cookie';

function Home() {
    const [cookies, setCookie, deleteCookie] = useCookies(['_auth_state'])
    console.log(cookies)
    const [infoCards, setInfoCards] = React.useState([
        {
            img: placeholder,
            title: "Conferences",
            btnText: "Watch",
            link: "/conferences"
        },
        {
            img: placeholder,
            title: "Research",
            btnText: "Learn more",
            link: "/research"
        },
        {
            img: placeholder,
            title: "LRMI",
            btnText: "Check",
            link: "/lrmi"
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
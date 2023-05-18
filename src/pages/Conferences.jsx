import React from "react";
import VideoCard from "../components/VideoCard";

function Conferences() {
    const [conferences, setConferences] = React.useState([
        {
            source: null,
            title: "Conference 1",
            event: "Spring Symposium 2023",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio illum ullam deserunt, suscipit numquam porro? Quibusdam quam similique modi."
        },
        {
            source: null,
            title: "Conference 2",
            event: "Spring Symposium 2023",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio illum ullam deserunt, suscipit numquam porro? Quibusdam quam similique modi."
        },
        {
            source: null,
            title: "Conference 3",
            event: "Spring Symposium 2023",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio illum ullam deserunt, suscipit numquam porro? Quibusdam quam similique modi."
        }
    ])

    const conferencesCards = conferences.map(conference => (
        <VideoCard 
            key={conference.title}
            title={conference.title}
            event={conference.event}
            description={conference.description}
        />
    ))

    return (
        <main>
            <h1>Conferences page</h1>
            {conferencesCards}

        </main>
    )
}

export default Conferences;
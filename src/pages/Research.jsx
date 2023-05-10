import React from "react";
import PersonCard from "../components/PersonCard";
import avatar from "../assets/avatar-placeholder.jpg"

function Research() {
    const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, maiores? Odit eos at veritatis iure obcaecati veniam minus optio autem. Cumque sapiente qui sunt, reiciendis voluptatibus illo rerum voluptatem autem, eaque, itaque perferendis. Id in nobis deserunt eligendi aut animi vero, libero unde eveniet temporibus exercitationem earum, iure omnis incidunt harum, quo soluta. Fugit mollitia qui aut nam modi nisi ea nemo dicta fugiat totam consectetur similique fuga voluptatibus veritatis, voluptate optio ad harum eos amet numquam error? Laboriosam quia fugit labore. Quo ex reprehenderit quia, ipsam dolore harum quam cupiditate repellendus alias mollitia ab assumenda, veniam cumque nemo rerum."
    return (
        <main>
            <h1>This is a Research page</h1>
            <PersonCard 
                img={avatar} 
                fName="fName" 
                lName="lName" 
                role="Assistant Professor" 
                bio={desc} 
                docs={[
                    {
                        title: "Document 1",
                        link: "/"
                    },
                    {
                        title: "Document 2",
                        link: "/"
                    },
                    {
                        title: "Document 3",
                        link: "/"
                    },
                    {
                        title: "Document 4",
                        link: "/"
                    },
                    {
                        title: "Document 5",
                        link: "/"
                    },
                ]} 
            />
        </main>
    )
}

export default Research;
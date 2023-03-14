const episodes = [
    {
        img: "./assets/img/when_You're_Lost_in_the_Darkness3.svg",
        title: "When You're Lost in the Darkness",
        description:
            " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
    },

    {
        img: "./assets/img/Infected4.svg",
        title: "Infected",
        description:
            " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },
    {
        img: "./assets/img/Long_Long_Time2.svg",
        title: "Long, Long Time",
        description:
            " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
        img: "./assets/img/Please_Hold_to_My_Hand2.svg",
        title: "Please Hold to My Hand",
        description:
            " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
];


const ulEpisodes = document.querySelector(".ulEpisodes")

function addEpisodes(listEpisodes) {
    for (let i = 0; i < listEpisodes.length; i++) {
        renderCard(listEpisodes[i])
    }
}

function renderCard(episode) {
    const li = document.createElement("li")
    li.classList.add("liEpisodes")
    li.innerHTML = `
        <img src=${episode.img} alt="" class="imgEpisode">
        <div class="divLiEpisodes">
            <h4>${episode.title}</h4>
            <p>${episode.description}</p>
        </div>
`

    ulEpisodes.appendChild(li)
}


addEpisodes(episodes)
import ImageGrid from "../components/common/gallery/PhotoGrid";

const artImages = [
    { src: "/img/art/vyke.png", alt: "Vyke", width: 1640, height: 2360 },
    { src: "/img/art/melina.png", alt: "melina", width: 2238, height: 2957},
    { src: "/img/art/devon-bostick.png", alt: "rodrick", width: 1631, height: 2048 },
    { src: "/img/art/fawn.png", alt: "fawn", width: 1310, height: 1969 },
    { src: "/img/art/knight-armor.png", alt: "knight armor", width: 2048, height: 2721 },
    { src: "/img/art/pastel-sky-landscape.png", alt: "pastel sky landscape", width: 2048, height: 2502 },
    { src: "/img/art/pinterest-guy.png", alt: "pinterst guy", width: 2228, height: 2048 },
    { src: "/img/art/seeing-stars.png", alt: "seeing stars", width: 2048, height: 2048 },
    { src: "/img/art/yhorm.png", alt: "yhorm", width: 2048, height: 1423 },
]

function Art() {
    return(
        <section>
            <h1 className="section-title"> art</h1>
            <p>I like to draw in my free time</p>
            <ImageGrid images={artImages} />
        </section>

    )
}

export default Art
import ImageGrid from "../components/common/gallery/PhotoGrid";

const artImages = [
    { src: "/img/art/vyke.png", alt: "Vyke" },

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
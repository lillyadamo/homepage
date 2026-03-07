import ImageGrid from "../components/common/gallery/PhotoGrid";

const photographs = [
    {src: "img/photography/espresso-at-nonnas.jpg", alt: "espresso at nonnas"}, 
]

function Photography() {
    return(
        <section>
            <h1 className="section-title">photography</h1>
            <p>i enjoy taking photos. The cameras I use are a Ricoh GRIIIx, 
                a Nikon coolpix, and an iphone on occasion.</p>
            <ImageGrid images={photographs} />
        </section>
    )
}

export default Photography
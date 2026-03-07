import ImageGrid from "../components/common/gallery/PhotoGrid";

const photographs = [
    {src: "img/photography/espresso-at-nonnas.jpg", alt: "espresso at nonnas", width: 6000, height: 4000}, 
    {src: "img/photography/cake.jpg", alt: "cake", width: 5152, height: 3864}, 
    {src: "img/photography/green.jpg", alt: "green", width: 4712, height: 3072}, 

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
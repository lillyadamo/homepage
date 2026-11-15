import ImageGrid from "../components/common/gallery/PhotoGrid";

const photographs = [
    {src: "img/photography/mountains.jpg", alt: "mountains", width: 5630, height: 3753}, 
    {src: "img/photography/mountains2.jpg", alt: "mountains again", width: 2943, height: 1962}, 
    {src: "img/photography/flowers.jpg", alt: "flowers", width: 2943, height: 1962},
    {src: "img/photography/garden.jpg", alt: "garden", width: 4165, height: 2769}, 
    {src: "img/photography/beach.jpg", alt: "beach", width: 5630, height: 3753},
    {src: "img/photography/on-the-beach.jpg", alt: "on the beach", width: 3588, height: 5382},
    {src: "img/photography/ali.jpg", alt: "ali", width: 4000, height: 6000}, 
    {src: "img/photography/s2000.jpg", alt: "honda s2000", width: 3024, height: 4000},
    {src: "img/photography/lights.jpg", alt: "lights", width: 3612, height: 1451}, 
    {src: "img/photography/roses.jpg", alt: "roses", width: 4000, height: 6000}, 
    {src: "img/photography/poster.jpg", alt: "poster", width: 6000, height: 4000}, 
    {src: "img/photography/cake.jpg", alt: "cake", width: 5152, height: 3864}, 

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
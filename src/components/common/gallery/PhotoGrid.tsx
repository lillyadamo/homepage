import { useState } from "react"

type Image = {
    src: string
    alt: string
}

type PhotoGridProps = {
    images: Image[]
}

function ImageGrid({ images }:PhotoGridProps){
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

   return(
    <div>
        <div className="art-album">
        {images.map((image) => (
            <div className="art-item" onClick={() => setSelectedImage(image.src)}>
            <img src={image.src} alt={image.alt} />
            </div>
        ))}
        </div>
        {selectedImage && (
        <div className="modal">
            <span className="close" onClick={() => setSelectedImage(null)}>×</span>
            <img className="modal-content" src={selectedImage} />
        </div>
        )}
    </div>
)
}

export default ImageGrid


import { useState } from "react"

export type Image = {
  src: string
  alt: string
  width: number
  height: number
}

type PhotoGridProps = {
  images: Image[]
}

function ImageGrid({ images }: PhotoGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div>
      <div className="masonry-grid">
        {images.map((image, index) => (
          <div key={index} className="masonry-item" >
            <img src={image.src} alt={image.alt} 
            onClick={() => setSelectedImage(image.src)}/>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">×</span>
          <img className="modal-content" src={selectedImage} />
        </div>
      )}
    </div>
  )
}

export default ImageGrid
import { useState } from "react"
import PhotoAlbum from "react-photo-album"
import type { Photo } from "react-photo-album"
import "react-photo-album/styles.css"
 
type Image = {
    src: string
    alt: string
    width: number
    height: number
}

type PhotoGridProps = {
    images: Image[]
}

function ImageGrid({ images }:PhotoGridProps){
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
    <div>
        <PhotoAlbum
            layout="masonry"
            photos={images}
            onClick={({ photo }: { photo: Photo }) => setSelectedImage(photo.src)}
      />
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


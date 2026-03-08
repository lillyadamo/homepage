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
    console.log("images:", images)

    return (
      <div style={{ width: "100%", minWidth: "100px" }}>
        <PhotoAlbum
          layout="masonry"
          photos={images}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 1
            if (containerWidth < 768) return 2
            return 3
          }}
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


import { useContext, useState, useEffect } from "react"
import { StorageContext } from "../contexts/StorageContext"
import { ref, getDownloadURL } from "firebase/storage"

export function ProductImage(props) {

  const Storage = useContext(StorageContext)

  const [image, setImage] = useState()

  const getImageUrl = async (imgName) => {
    const path = `book_covers/${imgName}`
    const imgRef = ref(Storage, path)
    return new Promise((resolve, reject) => {
      getDownloadURL(imgRef)
        .then((url) => resolve(url))
        .catch((err) => reject(err))
    })
  }

  useEffect(() => {
    if (!image) {
      getImageUrl(props.src)
        .then((url) => {
          setImage(url)
          console.log( url )
        })
        .catch((err) => console.log(err))
    }
  }, [props.src])

  if( !image ) {
    return (
      <p>{image}</p>
    )
  }
  else {
    return <img src={image} className="img-fluid card-img" style={{ aspectRatio: "4/5", objectFit: "cover", objectPosition: "top"}} />
  }
}
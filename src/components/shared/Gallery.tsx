import img1 from "../../assets/IMG_4566.jpeg";
import img2 from "../../assets/IMG_4689.jpeg";
import img3 from "../../assets/IMG_4704.jpeg";
import img4 from "../../assets/IMG_5654.jpeg";
import img5 from "../../assets/IMG_5771.jpeg";
import img6 from "../../assets/IMG_6125.jpeg";
import img7 from "../../assets/IMG_6462.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = () => {
    return (
        <div className="gallery">
            {images.map((img, index) => (
                <div className="gallery-item" key={index}>
                    <img src={img} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    )
}

export default Gallery;
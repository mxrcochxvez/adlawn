import imageOne from '../assets/gallery/image_one.jpg';
import imageTwo from '../assets/gallery/image_two.jpg';
import imageThree from '../assets/gallery/image_three.jpg';
import imageFour from '../assets/gallery/image_four.jpg';
import imageFive from '../assets/gallery/image_five.jpg';
import imageSix from '../assets/gallery/image_six.jpg';
import imageSeven from '../assets/gallery/image_seven.jpg';

const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven
]

export default function Gallery() {
    return (
        <div className="bg-yellow-600 flex justify-center items-center flex-col">
            <h2 className="text-3xl pt-8 border-b-2 border-black text-white border-b-2 border-black">Gallery</h2>
            <div className="bg-yellow-400 grid grid-cols-4 gap-2 mt-4 p-4">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="gallery" className="" />
                ))}
            </div>
        </div>
    )
}

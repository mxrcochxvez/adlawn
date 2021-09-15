import imageOne from '../assets/gallery/image_one.jpg';
import imageTwo from '../assets/gallery/image_two.jpg';
import imageThree from '../assets/gallery/image_three.jpg';
import imageFour from '../assets/gallery/image_four.jpg';
import imageFive from '../assets/gallery/image_five.jpg';
import imageSix from '../assets/gallery/image_six.jpg';
import imageSeven from '../assets/gallery/image_seven.jpg';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useState } from 'react';
import _ from 'lodash'

const images = [
    imageOne,
    imageSix,
    imageFive,
    imageSeven,
    imageFour,
    imageThree,
    imageTwo
]

function objectify(n) {
    return {
        src: n
    }
}

export default function Gallery() {

    const [galleryImages] = useState(_.flatMap(images, objectify));

    return (
        <div className="bg-yellow-600 flex justify-center items-center flex-col">
            <h2 className="text-3xl pt-8 border-b-2 border-black text-white border-b-2 border-black">Gallery</h2>
            <div className="bg-yellow-400 w-screen flex justify-center mt-4">
                <Carousel images={galleryImages} style={{ height: 450, width: 600 }} />
            </div>
        </div>
    )
}

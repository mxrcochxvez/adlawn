import mow from '../assets/services/mow.jpg';
import treeRemoval from '../assets/services/tree-removal.jpg';
import Card from './Card';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function Services() {
    const { width } = useWindowDimensions();

    let services = [
        {
            title: 'Mow, Edge, Weed Control, Hedge Trimming',
            description: "Have your yard stand out from the others by choosing Dre's Lawncare Services.",
            src: mow
        },
        {
            title: "Tree/Branch Removal",
            description: "Not only will we cut down trees and branches, we will also haul them away.",
            src: treeRemoval
        }
    ]

    const displayServices = () => {
        if (width < 860) {
            return (
                <div className="container flex flex-col px-4">
                    {services.map((service, index) => (
                        <Card title={service.title} description={service.description} src={service.src}/>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="grid grid-cols-2 gap-x-4">
                    {services.map((service, index) => (
                        <Card title={service.title} description={service.description} src={service.src}/>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="pb-8 flex flex-col items-center bg-green-800">
            <h1 className="mt-8 text-3xl border-b-2 border-black text-white">Services We Offer</h1>
            {displayServices()}
        </div>
    )
}

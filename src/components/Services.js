import mow from '../assets/services/mow.jpg';
import treeRemoval from '../assets/services/tree-removal.jpg';
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
                        <div key={index} className="bg-white rounded-xl mt-2 flex flex-col items-center justify-between">
                            <div className="container flex flex-col items-center justify-center p-4">
                                <h2 className="text-xl font-bold">{service.title}</h2>
                                <p className="text-sm">{service.description}</p>
                            </div>
                            {service.src ? <img className="max-w-xs max-h-xl pb-2" src={service.src} alt="service" /> : null}
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="grid grid-cols-2 gap-x-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl mt-2 flex flex-col items-center justify-evenly">
                            <div className="container flex flex-col items-center justify-center p-8">
                                <h2 className="text-xl font-bold">{service.title}</h2>
                                <p className="text-sm">{service.description}</p>
                            </div>
                            {service.src ? <img className="max-w-sm max-h-xl" src={service.src} alt="service" /> : null}
                        </div>
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

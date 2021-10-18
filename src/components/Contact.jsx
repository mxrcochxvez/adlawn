export default function Contact() {
    return (
        <div className="w-screen bg-green-50 flex flex-col items-center">
            <h2 className="text-3xl pt-8 border-b-2 border-black text-black border-b-2 border-black">Contact us</h2>
            <div className="container bg-green-100 my-4 p-12">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-gray-600">Ways to get in touch!</h1>
                    <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-4">
                        <a href="tel:+15599057105">
                            <button aria-label="Call" className="bg-green-400 text-white px-12 py-2 rounded-md">Call us</button>
                        </a>
                        <a href="https://www.facebook.com/adlawncareservice" target="_blank" rel="noreferrer">
                            <button aria-label="Facebook" className="bg-blue-800 text-gray-200 px-10 py-2 rounded-md">FaceBook</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

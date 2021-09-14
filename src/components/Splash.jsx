import logo from "../assets/adlawn.png";

export default function Splash() {
    return (
        <div className="bg-green-50 p-16 w-screen flex flex-col items-center">
            <img src={logo} alt="logo" className="w-80 mx-auto" />
            <h1 className="text-5xl">Professional lawn care service you can trust</h1>
            <p className="text-yellow-700">We offer premium Lawn Care services, read further to find out how to get in touch!</p>
        </div>
    )
}

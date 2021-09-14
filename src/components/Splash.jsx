import logo from "../assets/adlawn.png";
import TextLoop from "react-text-loop";

export default function Splash() {
    return (
        <div className="bg-green-50 p-16 w-screen flex flex-col items-center">
            <img src={logo} alt="logo" className="w-80 mx-auto" />
            <h1 className="text-5xl">Professional lawn care service you can</h1>{" "}
            <h1 className="text-5xl">
                <TextLoop className="text-green-800" children={["trust", "depend on", "rely on"]} />
            </h1>
            <p className="text-yellow-700">We offer premium Lawn Care services, read further to find out how to get in touch!</p>
        </div>
    )
}

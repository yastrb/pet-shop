import logo from "../Assets/Images/Main-Logo.svg"
export function DefaultImg() {
    return (
        <img
            className="h-[100px]  object-cover object-center"
            src={logo}
            alt="logoimage"
        />
    );
}
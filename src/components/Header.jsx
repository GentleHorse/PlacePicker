import logoImage from "../../public/logo.png";

export default function Header() {
  return (
    <header className="text-center">
      <img className="w-20 h-20 mb-8 mx-auto object-contain drop-shadow-bottom-lg" src={logoImage} alt="stylzed globe" />
      <h1 className="m-0 text-5xl uppercase tracking-[1rem]">Place Picker</h1>
      <p className="my-0 mx-auto text-xl max-w-[38ch] text-[#9eb5b4]">
        Create your personal collection of places you would like to visit or you
        have visited.
      </p>
    </header>
  );
}

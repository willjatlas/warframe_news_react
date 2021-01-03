import wfLogo from "../wfLogo.png";

const NavDisplay = ({handleButton}) => {

    return (
        <div id="nav-display">
            <img id="logo-img" src={wfLogo} alt="Warframe Logo" />
            <h1>Warframe News</h1>
            <button id="nav-button" onClick={handleButton} value="pc" > PC </button>
            <button id="nav-button" onClick={handleButton} value="ps4"> PS4 </button>
            <button id="nav-button" onClick={handleButton} value="xb1"> XBox1 </button>
            <button id="nav-button" onClick={handleButton} value="swi"> Switch </button>
            <img id="logo-img" src={wfLogo} alt="Warframe Logo" />
        </div>
    );

}
export default NavDisplay;
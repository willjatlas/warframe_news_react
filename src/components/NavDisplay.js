import wfLogo from "../wfLogo.png";

const NavDisplay = ({handleButton}) => {

    return (
        <div id="nav-display">
            <img id="logo-img" src={wfLogo} alt="Warframe Logo" />
            <h1>WarframeNews</h1>
            <button id="nav-button" onClick={handleButton} value="PC" > PC </button>
            <button id="nav-button" onClick={handleButton} value="PS4"> PS4 </button>
            <button id="nav-button" onClick={handleButton} value="XBox1"> XBox1 </button>
            <button id="nav-button" onClick={handleButton} value="Switch"> Switch </button>
            <img id="logo-img" src={wfLogo} alt="Warframe Logo" />
        </div>
    );

}
export default NavDisplay;
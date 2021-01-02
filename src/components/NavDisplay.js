
const NavDisplay = ({handleButton}) => {

    return (
        <div id="nav-display">
            <h1>Warframe News</h1>
            <button id="nav-button" onClick={handleButton} value="pc" > PC </button>
            <button id="nav-button" onClick={handleButton} value="ps4"> PS4 </button>
            <button id="nav-button" onClick={handleButton} value="xb1"> XBox1 </button>
            <button id="nav-button" onClick={handleButton} value="swi"> Switch </button>
        </div>
    );

}
export default NavDisplay;
import '../App.css'

const Header = ({ headerText }) => (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h3>
        {headerText}
      </h3>
    </header>
)
export default Header
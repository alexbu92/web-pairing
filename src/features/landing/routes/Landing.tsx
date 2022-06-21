import logo from "../../../assets/logo.png"
import "./Landing.css";

export const Landing = () => {
    return (
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p className="font-bold">Welcome to Papaya</p>
          </header>
        </div>
      );
}
import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";

import Button from "./Button.jsx";

export default function Header({ onFilter}) {
  return (
    <header className="pb-4">
      {/* Logo & Theme Toggle */}
      <div className="container mx-auto bg-slate-800 mt-4 w-4/5 p-3 rounded-2xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <img
              src={logo}
              alt="App Logo"
              className="h-8" // Ensures consistent height
            />
          </div>
          <div>
            <button
              className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              aria-label="Toggle theme"
            >
              <img
                src={sunIcon}
                alt="Light mode icon"
                className="w-5 h-5" // Ensures icon size consistency
              />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto mt-4 w-4/5 p-4">
        <div className="flex sm:flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl text-white font-roboto font-bold">
            Extension List
          </h2>

          <div className="flex md:flex-row flex-wrap gap-2 sm:gap-4">
            <Button onClick={() => onFilter('all')}>All</Button>
            <Button onClick={() => onFilter('active')}>Active</Button>
            <Button onClick={() => onFilter('inactive')}>Inactive</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

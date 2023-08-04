import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src="https://brik.id/assets/img/featured-slider/toko-brik-logo.png" alt="brik.id" width={100}/>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to={"/signin"}
                  className="font-medium text-red-600 hover:text-red-700 px-4 py-2 flex items-center transition duration-150 ease-in-out border border-red-600"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link to={"/signup"} className="btn-sm text-white bg-red-600 hover:bg-red-700 ml-3 py-2 px-4">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
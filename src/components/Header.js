const Header = () => (
  <header className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-500">
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
      <div className="text-white font-medium text-center sm:text-left animate-pulse">
        Learn to build this 3-tier pricing table for FREE
      </div>
      <span
        aria-hidden="true"
        className="hidden sm:block mx-6 h-6 w-px bg-white bg-opacity-20"
      />
      <a
        href="https://screencasts.alterclass.io"
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap inline-flex rounded-md bg-white py-2 px-3 text-xs font-semibold uppercase text-blue-500 hover:bg-opacity-90"
      >
        Learn more →
      </a>
    </div>
  </header>
);

export default Header;

import logo from "../assets/logo.svg"

const Hero = () => {
  return (
    <header className="w-full flex-center flex-col">
      <nav className="flex items-center justify-between w-full mb-7 py-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button 
          type="button"
          onClick={() => window.open("https://github.com/codesofc")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">
          AI
        </span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero
import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick, enter } from "../assets/index.js"
import { fetchSummary } from "../../data/index.js"



const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const data: any = await fetchSummary(article.url)

    setArticle((prev) => ({
      ...prev,
      summary: data.summary
    }))
    console.log(data);
    setIsLoading(false)
  }
  

  return (
    <section
      className="w-full max-w-xl mt-16"
    >
      {/* Search section */}
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex-center w-full"
        >
          <img 
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input 
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle((prevState) => ({
              ...prevState,
              url: e.target.value
            }))}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="absolute right-0 mr-3 peer-focus:border-gray-700 peer-focus:border w-5 p-0.5"
          >
            <img 
              src={enter}
              alt="send"
              className="object-contain"
            />
          </button>
        </form>
      </div>

      {/* Display result */}
      <div className="my-10 max-w-full flex-center">
            {isLoading ? (
              <img 
                src={loader}
                alt="loader"
                className="w-20 h-20 object-contain"
              />
            ) : (
              article.summary && (
                <div className="flex flex-col gap-3">
                  <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                    Article <span className="blue-gradient"> Summary </span>
                  </h2>
                  <div className="summary_box">
                    <p className="font-inter font-medium text-sm text-gray-700">
                      {article.summary}
                    </p>
                  </div>
                </div>
              )
            )}
      </div>
    </section>
  )
}

export default Demo
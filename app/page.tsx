const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-2 h-screen">
      <h1 className=" text-5xl font-bold mb-20">ChatGPT</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="InfoText">"Explain Something to me"</p>
            <p className="InfoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="InfoText">"What is the color of the sun?"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

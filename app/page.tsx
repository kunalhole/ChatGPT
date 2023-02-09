import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline"

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white px-2 h-screen">
      <h1 className=" text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex flex-row space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
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
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="InfoText">"Change the CHatGPT Model to use"</p>
            <p className="InfoText">
              "Messages are stored in Firebase's Firestore"
            </p>
            <p className="InfoText">
              "Hot Toast notifications when ChatGPT is thinking!"
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="InfoText">
              "May occasionally generate incorrect information"
            </p>
            <p className="InfoText">
              "May occasionally produce harmful instructions or biased content"
            </p>
            <p className="InfoText">
              "Limited knowledge of world and events after 2021"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

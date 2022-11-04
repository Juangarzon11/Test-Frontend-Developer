import ProfileHeader from "./components/ProfileHeader"
import Description from "./components/Description"
import InteractionButtons from "./components/InteractionButtons"

function App() {
  return (
    <>
      <section className="w-full h-screen font-Outfit">

        <div className="w-full h-1/2">
          <ProfileHeader />
        </div>


        <div className="-mt-8 relative rounded-t-3xl bg-white">
          <InteractionButtons />

          <Description/>
        </div>

      </section>
    </>
  )
}

export default App

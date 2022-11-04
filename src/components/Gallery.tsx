import Gallery1 from '/img/photo.png'
import Gallery2 from '/img/photo-1.png'
import Gallery3 from '/img/photo-2.png'
import Gallery4 from '/img/photo-3.png'
import Gallery5 from '/img/photo-4.png'

function Gallery() {
    return(
        <>
            <div className="mt-2 grid grid-cols-2 gap-4">
                <img className="h-48" src={Gallery1} alt="First photo" />

                <img className="h-48" src={Gallery2} alt="First photo" />
            </div>

            <div className="mt-2 grid grid-cols-3 gap-6">
                <img className="h-28" src={Gallery3} alt="First photo" />

                <img className="h-28" src={Gallery4} alt="First photo" />

                <img className="h-28" src={Gallery5} alt="First photo" />

            </div>
        </>
    )
}

export default Gallery
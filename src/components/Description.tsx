import { useState } from 'react'
import MessageButton from "./MessageButton"
import Distance from "./Distance"
import Interest from "./Interest"
import Gallery from "./Gallery"

function Description() {


    const interests = ['Movies', 'Traveling', 'Modeling', 'Music', 'Books']

    const [read, setRead] = useState<String>('Read More')

    const handleClick  = () : void => {
        let readButton = document.getElementById("read")  || null

        const about = document.getElementById("about") || null

        if(readButton != null) {

            if(about != null) {
                if(readButton.innerText === 'Read More') {
                    about.classList.remove('line-clamp-3')
                } else if(readButton.innerText === 'Read Less') {
                    about.classList.add('line-clamp-3')
                }
            }

            setRead(readButton.innerText === 'Read More' ? 'Read Less' : 'Read More')
        }

    }

    return(
        <div>

            <div className="px-14 pt-28 pb-5 w-full flex justify-between">
                <div>
                    <h1 className="font-bold text-black text-2xl">Jessica Parker, 23</h1>
                    <p className="text-black opacity-70">Proffesional model</p>
                </div>

                <div className="flex items-center">
                    <MessageButton />
                </div>
            </div>

            <div className="px-14 py-5 w-full flex justify-between">
                <div>
                    <h1 className="font-bold text-black text-xl">Location</h1>
                    <p id="location" className="text-black opacity-70">Medellin, Colombia</p>
                </div>

                <div className="flex items-center">
                    <Distance distance={3} />
                </div>
            </div>

            <div className="py-5 px-14 w-full">
                <div>
                    <h1 className="font-bold text-black text-xl">About</h1>
                    <p id="about" className="text-black opacity-70 line-clamp-3 mb-3">My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading.</p>

                    <button id="read" onClick={handleClick} className="text-primary">{read}</button>
                </div>
            </div>

            <div className="px-14 py-5 w-full">
                <div>
                    <h1 className="font-bold text-black text-xl">Interests</h1>

                    <div className="mt-2 grid grid-cols-3 gap-4">

                        {interests.map((interest, index) => (
                            <Interest key={index} interest={interest} /> 
                        ))}

                    </div>
                </div>
            </div>

            <div className="px-14 py-5 w-full">
                <div>
                    <h1 className="font-bold text-black text-xl">Gallery</h1>

                    <Gallery />
                </div>
            </div>
        </div>
    )
}

export default Description
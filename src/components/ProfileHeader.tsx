import BackButton from "./BackButton"
import Profile from '/img/photo-main.png'

function ProfileHeader() {
    return(
        <>
            <BackButton />
            <div className="h-full bg-gradient-to-r from-orange via-red to-purple">
                <img className="object-contain w-full h-full" src={Profile} alt="Profile Photo" />
            </div>
        </>
    )
}

export default ProfileHeader
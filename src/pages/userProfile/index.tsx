import { useAccount } from "@/hooks/Account/AccountContext"
import { ActionButton } from "@/components/ActionButton";
import { useState } from "react";
import UserProfileForm from "@/components/UserProfileForm";
import { User } from "@/types/User";


const calculateAge = (birthDate: Date) => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

export default function UserProfile() {
    const { currentUser, setCurrentUser } = useAccount();
    const [isEditing, setIsEditing] = useState(false);

    // keep the usage of the Date constructor out of the rendering logic to avoid hydration errors
    // https://nextjs.org/docs/messages/react-hydration-error
    let lastUpdateDisplay = ''
    let age = 0
    if (currentUser) {
        lastUpdateDisplay = new Date(currentUser.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        age = calculateAge(new Date(currentUser.birthDate))
    }

    const handleSubmit = (data: User) => {
        setCurrentUser(data);
        setIsEditing(false);
    }

    return (
        <div className="flex flex-col items-center justify-center h-full bg-[#F1F2F3] mx-24 p-20">
            {isEditing &&
                <UserProfileForm onSubmit={handleSubmit} onCancel={() => setIsEditing(false)} />
            }
            {!isEditing && !currentUser &&
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-black text-4xl">No User Profile Found. Create One!</h1>
                    <ActionButton className="w-40 h-12" onClick={() => setIsEditing(true)}>Create Profile</ActionButton>
                </div>}

            {!isEditing && currentUser &&
                <div className="flex flex-col gap-5 self-start">
                    <h1 className="text-[#222222] text-[40px]">{currentUser.firstName} {currentUser.lastName}</h1>
                    <p className="text-[#222222] text-[12px] mb-5">{`Last Updated ${lastUpdateDisplay}`}</p>
                    <p className="text-[#222222] text-lg font-bold">Age: {age}</p>
                    {currentUser.city && currentUser.state &&
                        <p className="text-[#222222] text-lg font-bold">Location: {currentUser.city}, {currentUser.state}</p>
                    }
                    {currentUser.favoriteDisneyCharater &&
                        <p className="text-[#222222] text-lg font-bold">Favorite Disney Character: {currentUser.favoriteDisneyCharater}</p>
                    }
                    {currentUser.favoriteDisneyRide &&
                        <p className="text-[#222222] text-lg font-bold">Favorite Disney Ride: {currentUser.favoriteDisneyRide}</p>
                    }
                    {currentUser.favoriteDisneyMovie &&
                        <p className="text-[#222222] text-lg font-bold">Favorite Disney Movie: {currentUser.favoriteDisneyMovie}</p>
                    }
                    {currentUser.favoriteDisneyLand &&
                        <p className="text-[#222222] text-lg font-bold">Favorite Disneyland: {currentUser.favoriteDisneyLand}</p>
                    }
                    <ActionButton className="w-[126px] h-12 mt-4" onClick={() => setIsEditing(true)}>Edit Profile</ActionButton>
                </div>}
        </div >
    )
}
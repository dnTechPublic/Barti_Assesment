import { FormInput } from '../FormInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAccount } from '@/hooks/Account/AccountContext';
import { FormSelect } from '../FormSelect';
import { stateAbbreviations } from '@/types/stateAbbreviations';
import { disneyLocations } from '@/types/disneyLocations';
import { disneylandRides } from '@/types/disneyLandRides';
import { ActionButton } from '../ActionButton';
import { SecondaryButton } from '../SecondaryButton';
import { User } from '@/types/user';

export type UserProfileFormProps = {
    onSubmit: (data: User) => void;
    onCancel: () => void;
}

export default function UserProfileForm({ onSubmit, onCancel }: UserProfileFormProps) {

    const { currentUser } = useAccount();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>()

    const onSubmitInter: SubmitHandler<User> = (data) => {
        data.lastUpdated = new Date().toISOString();
        onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit((onSubmitInter))} className='flex flex-col gap-4'>
            <div className="flex gap-4">
                <FormInput label="First Name" required className='w-80'
                    defaultValue={currentUser?.firstName ?? ''}
                    {...register('firstName', { required: 'First Name is required' })}
                    error={errors.firstName?.message} />
                <FormInput label="Last Name" required className='w-80'
                    defaultValue={currentUser?.lastName ?? ''}
                    {...register('lastName', { required: 'Last Name is required' })}
                    error={errors.lastName?.message} />
            </div>
            <FormInput label="Birth Date" type="date" required className='w-80'
                defaultValue={currentUser?.birthDate}
                {...register('birthDate', { required: 'Birth Date is required' })}
                error={errors.birthDate?.message} />
            <div className="flex items-center gap-4">
                <FormInput label="City" type="text" className='w-80'
                    defaultValue={currentUser?.city ?? ''}
                    {...register('city')}
                    error={errors.city?.message} />
                <FormSelect {...register('state')} label="State" defaultValue={currentUser?.state ?? ''}
                    options={stateAbbreviations.map((state) => ({ value: state, label: state }))} />
            </div>
            <FormInput label="Favorite Disney Character" type="text"
                defaultValue={currentUser?.favoriteDisneyCharater ?? ''}
                {...register('favoriteDisneyCharater')}
                error={errors.favoriteDisneyCharater?.message} />
            <FormInput label="Favorite Disney Movie" type="text"
                defaultValue={currentUser?.favoriteDisneyMovie ?? ''}
                {...register('favoriteDisneyMovie')}
                error={errors.favoriteDisneyMovie?.message} />

            <FormSelect {...register('favoriteDisneyRide')} label="Favorite DisneyLand Ride" className='w-80'
                defaultValue={currentUser?.favoriteDisneyRide ?? ''}
                options={disneylandRides.map((ride) => ({ value: ride, label: ride }))} />

            <FormSelect {...register('favoriteDisneyLand')} label="Favorite Disney Land" className='w-80'
                defaultValue={currentUser?.favoriteDisneyLand ?? ''}
                options={disneyLocations.map((location) => ({ value: location, label: location }))} />

            <div className='flex gap-4 mt-5'>
                <ActionButton type='submit' className='w-[150px] h-12'>Update Profile</ActionButton>
                <SecondaryButton type='button' onClick={onCancel} className='w-24 h-12'>Cancel</SecondaryButton>
            </div>
        </form>

    )
}   
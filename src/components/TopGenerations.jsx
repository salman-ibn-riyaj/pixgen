import { getPhotosData } from "@/lib/data";
import PhotoCard from "./PhotoCard";


const TopGenerations = async() => {
    const photos = await getPhotosData();
    console.log(photos);

    
    return (
        <div className="grid grid-cols-4 gap-4 my-10">
            {
                photos.slice(0,8).map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
            }
        </div>
    );
};

export default TopGenerations;
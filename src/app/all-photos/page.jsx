import PhotoCard from "@/components/PhotoCard";
import { getPhotosData } from "@/lib/data";

const AllPhotos = async () => {
  const photos = await getPhotosData();
  console.log(photos);
  return (
    <div>
        <h2 className="text-2xl font-bold my-4">All Photos</h2>
      <div className="grid grid-cols-4 gap-3 my-10 container mx-auto">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;

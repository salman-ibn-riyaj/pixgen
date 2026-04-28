import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import { getPhotosData } from "@/lib/data";

const AllPhotos = async ({searchParams}) => {
  const {category} = await searchParams;
  console.log(category);
  const photos = await getPhotosData();
  console.log(photos);

  const filteredPhotos = category? photos.filter(p => p.category == category) : photos
  console.log(filteredPhotos);


  return (
    <div>
        
        <Category></Category>

        <h2 className="text-2xl font-bold my-4">All Photos</h2>
      <div className="grid grid-cols-4 gap-3 my-10 container mx-auto">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;

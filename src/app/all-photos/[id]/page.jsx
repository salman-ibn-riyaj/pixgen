import { FolderArrowDown, HeartFill } from "@gravity-ui/icons";
import { Card } from "@heroui/react";
import Image from "next/image";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const photos = await fetch(`https://pixgen-two.vercel.app/data.json`).then(res => res.json());

  console.log(photos);

  const photo = photos.find(p =>p.id == id);
  console.log(photo);

  return <Card className="rounded-md my-12">
            <div className="relative w-full aspect-square">
                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover rounded-md" fill src={photo.imageUrl} alt={photo.title}></Image>
            </div>
            <h2 className="font-bold">{photo.title}</h2>

            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                    <HeartFill></HeartFill>
                    {photo.likes}
                </div>
                <div className="flex items-center gap-1.5">
                   <FolderArrowDown></FolderArrowDown>
                    {photo.downloads}
                </div>
            </div>

            <p>Prompt: {photo.prompt}</p>
            <p>Category: {photo.category}</p>

            
        </Card>;
};

export default PhotoDetails;

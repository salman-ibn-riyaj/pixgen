import { Button, Card } from "@heroui/react";
import Image from "next/image";
import {HeartFill} from '@gravity-ui/icons';
import {FolderArrowDown} from '@gravity-ui/icons';


const PhotoCard = ({photo}) => {

    return (
        <Card className="rounded-md">
            <div>
                <Image src={photo.imageUrl} alt={photo.title} height={300} width={300}></Image>
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

            <Button variant="outline" className={"w-full"}>View Details</Button>
        </Card>
    );
};

export default PhotoCard;
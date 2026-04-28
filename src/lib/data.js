

export const getPhotosData = async() => {

    const res = await fetch('https://pixgen-two.vercel.app/data.json');
    const photos = await res.json();

    return photos;


    
};




export const getPhotosData = async() => {

    const res = await fetch('https://pixgen-lvoc.vercel.app/data.json');
    const photos = await res.json();

    return photos;


    
};

export const getCategories = async()=>{
    const res = await fetch('https://pixgen-lvoc.vercel.app/category.json');
    const categories = await res.json();

    return categories;
}


import { getCategories } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async() => {
    const categories = await getCategories();
    console.log(categories);
    return (
        <div className="space-x-1.5 my-5">
            <h2 className="font-bold text-2xl">All The Categories</h2>
            {
                categories.map(category => <Link href={`/all-photos/?category=${category.name}`} key={category.id}><Button className={'mb-2'} category={category} >{category.name}</Button></Link>)
            }
        </div>
    );
};

export default Category;
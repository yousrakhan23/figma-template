"use client";
import Image from "next/image";
import wishlist_Icon from "@/public/wishlist_icon.png";
import eye_icon from "@/public/Quick View.png"

interface ItemCardProps {
    image: string,
    discount?: number,
    discountedPrice: number,
    originalPrice?: number,
    title: string,
    reviews: number,
    display: string
}



export default function ItemCard({ display, reviews, image, discount, title, discountedPrice, originalPrice }: ItemCardProps) {
    return (
        <div className="w-[270px] h-[350px]">
            <div className=" bg-[#fafafa] relative flex  justify-center items-center w-full h-[250px] group">
                {/* meta info and image */}
                <div className="px-2 absolute top-0 w-full flex justify-between items-center ">
                    <div className={`text-white  text-[12px] w-[45px] h-[26px] bg-[#DB4444]  rounded-sm flex justify-center items-center`}>
                        -{discount}%
                    </div>

                    <div className=" flex flex-col justify-center items-center gap-1">
                        <Image src={wishlist_Icon} alt="heart" height={20} width={20} className="mt-5" />

                        <Image src={eye_icon} alt="Eye" height={20} width={20} />
                    </div>
                </div>

                {/*image  */}
                <Image src={`/src/public/${image}`} alt="product" height={150} width={150} />

                <div className="w-full h-[50px] bg-black opacity-0 group-hover:opacity-100 flex justify-center items-center text-white absolute bottom-0  ">
                    Add to Cart
                </div>
            </div>

            <div className="mt-2 w-full flex flex-col justify-center items-start">
                {/* other details */}
                <h2 className="w-[201px] font-medium ">{title}</h2>
                <div className="flex justify-center items-center gap-3">
                    <p className="text-[#DB4444]">${discountedPrice}</p>
                    <p className="text-gray-400 line-through">${originalPrice}</p>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                    </div>
                    <p className="text-sm text-gray-400">({reviews})</p>
                </div>
            </div>
        </div>

    )
}
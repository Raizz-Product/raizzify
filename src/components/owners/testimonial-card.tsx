import Image, { StaticImageData } from "next/image"

interface TestimonialProps {
    imageUrl: StaticImageData,
    name: string;
    designation: string;
    review: string;
}
const TestimonialCard = ({ imageUrl, name, designation, review }: TestimonialProps) => {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
                <div className="w-24 h-24 rounded-full relative">
                    <Image src={imageUrl} layout="fill" objectFit="contain" className="rounded-full" alt="" />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-primaryTextColor">{name}</h2>
                    <p className="text-primaryTextColor font-light text-sm">{designation}</p>
                </div>
            </div>

            <p className="text-muted-foreground md:line-clamp-none line-clamp-4 font-light">{review}</p>
        </div>
    )
}
export default TestimonialCard
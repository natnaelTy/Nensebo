interface ImageDataType {
    id: number,
    imageUrl: string,
    origin: string,
    title: string,
    highlight: string,
    description: string,
    alt: string
}


const data: ImageDataType[] = [
    {
        id: 1,
        imageUrl: "/images/site3.jpg",
        origin: "Oromia, West Arsi · Ethiopia",
        title: "Exceptional Coffee,",
        highlight: "Tade Origin",
        description:
            "Single-origin specialty coffee from the highland farms of West Arsi — traceable from farm to cup, exported with pride.",
        alt: "Tade Coffee estate in the West Arsi highlands"
    },
    {
        id: 2,
        imageUrl: "/images/site7.jpg",
        origin: "West Arsi · Ethiopia",
        title: "Grown at Altitude,",
        highlight: "1,800–2,200m",
        description:
            "High-altitude microclimates and volcanic soil give our beans their density, complex acidity and signature floral notes.",
        alt: "Tade Coffee farm terraces in West Arsi"
    },
    {
        id: 4,
        imageUrl: "/images/second-pic.jpg",
        origin: "Nensebo Woreda · Ethiopia",
        title: "From Our Farms,",
        highlight: "To Your Cup",
        description:
            "Fully washed, natural and anaerobic lots — hand-picked, carefully processed and exported with pride from Nensebo.",
        alt: "Freshly harvested Tade Coffee cherries"
    }
]

export default data;

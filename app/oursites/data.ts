
interface DataTypes {
    id: string,
    imageUrl: string,
    siteName: string,
    shortDescription: string,
    fullDescription: string,
    btn: string
}

const OurSite = <DataTypes[]>[
    {
        id: "0",
        imageUrl: "/images/tade-7.jpg",
        siteName: "Mendoyu",
        shortDescription: "This site located about {`2400`} altitude at one of the tropical regions in oromia region.",
        fullDescription: "dscs",
        btn: "Read More"
    },
    {
        id: "1",
        imageUrl: "/images/site2.jpg",
        siteName: "Yemasera",
        shortDescription: "This site one of our largest site with the size of over {`100`}; workers.",
        fullDescription: "dscs",
        btn: "Read More"
    },
    {
        id: "2",
        imageUrl: "/images/site4.jpg",
        siteName: "Uchuro",
        shortDescription: "This site planted at the remote area of oromia region with abundant coffee resources.",
        fullDescription: "dscs",
        btn: "Read More"
    },
    {
        id: "3",
        imageUrl: "/images/site5.jpg",
        siteName: "Mewa Amrieha",
        shortDescription: "This site dedicated to improve the quality of our coffee.",
        fullDescription: "dscs",
        btn: "Read More"
    }
];

export default OurSite;
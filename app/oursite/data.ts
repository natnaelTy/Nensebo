
interface DataTypes {
    id: string,
    imageUrl: string,
    siteName: string,
    shortDescription: string,
    fullDescription: string,
    btn: string,
    location: string
    origin: string,
    Region: string,
    Process: string,
    Packaging: string,
    Harvest_period: string,
    Type_of_harvest: string
}

const OurSite = <DataTypes[]>[
    {
        id: "0",
        imageUrl: "/images/tade-7.jpg",
        siteName: "Mendoyu",
        shortDescription: "This site located about 2400 altitude at one of the tropical regions in oromia region.",
        fullDescription: "dscs",
        btn: "Read More",
        location: "Ethiopia / Nensebo",
        origin: "Ethiopia",
        Region: "Oromia",
        Process: "Sun dried station",
        Packaging: "60kg - jute bags",
        Harvest_period: "June - September",
        Type_of_harvest: "Manual"
    },
    {
        id: "1",
        imageUrl: "/images/site2.jpg",
        siteName: "Yemasera",
        shortDescription: "This site one of our largest site with the size of over 100 workers.",
        fullDescription: "dscs",
        btn: "Read More",
        location: "Ethiopia / Nensebo",
        origin: "Ethiopia",
        Region: "Oromia",
        Process: "Washed station",
        Packaging: "60kg - jute bags",
        Harvest_period: "June - September",
        Type_of_harvest: "Manual"
    },
    {
        id: "2",
        imageUrl: "/images/site4.jpg",
        siteName: "Bulga",
        shortDescription: "This site planted at the remote area of oromia region with abundant coffee resources.",
        fullDescription: "dscs",
        btn: "Read More",
        location: "Ethiopia / Nensebo",
        origin: "Ethiopia",
        Region: "Oromia",
        Process: "Anarobic station",
        Packaging: "60kg - jute bags",
        Harvest_period: "June - September",
        Type_of_harvest: "Manual"
    },
    {
        id: "3",
        imageUrl: "/images/site5.jpg",
        siteName: "Mewa Amrieha",
        shortDescription: "This site dedicated to improve the quality of our coffee.",
        fullDescription: "dscs scdscsc  acasasac cawxsc sdcacas acwcsd awcacewfr evbtrbtyng fverv erverv vcdcsdcxc dcscx",
        btn: "Read More",
        location: "Ethiopia / Nensebo",
        origin: "Ethiopia",
        Region: "Oromia",
        Process: "Washed",
        Packaging: "60kg - jute bags",
        Harvest_period: "June - September",
        Type_of_harvest: "Manual"
    }
];

export default OurSite;
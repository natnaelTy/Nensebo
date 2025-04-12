
interface DataTypes {
    id: number,
    question: string,
    answer: string
}

const data = <DataTypes[]> [
    {
        id: 0,
        question: 'How can i buy green coffee?',
        answer: 'First we recommend trying out a free 200g sample of each coffee you may be interested in. Once you are sure of your selection, you can contact us at sidamanensebo@gmail.com.'
    },
    {
        id: 1,
        question: 'How do you ensure quality in your coffee?',
        answer: 'Quality is ensured through careful cultivation, hand-picking ripe cherries, and meticulous processing. We also grade and sort the beans to meet international standards before export.'
    },
    {
        id: 2,
        question: 'Do you use sustainable farming practices?',
        answer: 'Yes, we are committed to sustainable farming. Our methods include shade-growing, organic fertilization, and water conservation to protect the environment and support local biodiversity.'
    },
    {
        id: 3,
        question: 'How do you ensure the coffee stays fresh during transport ?',
        answer: 'Our beans are carefully packed in jute or vacuum-sealed bags with protective linings to preserve freshness and flavor during transit.'
    },
    {
        id: 4,
        question: 'Do you offer custom roasting or private-label services?',
        answer: 'Yes, we provide custom roasting and private-label options for businesses looking to create their own coffee brand.'
    },
    {
        id: 5,
        question: 'What certifications do Sidama nensebo coffee beans have?',
        answer: 'Our coffee is certified Rainforest Alliance ensuring ethical and sustainable practices in farming and export..'
    },
    {
        id: 6,
        question: 'How can i buy green coffee?',
        answer: 'Our coffee is stored at nensebo warehouse in Oromia, west arsi. They are a HACCP certified food storage facility that offers both dry ambient and cold storage'
    },
    {
        id: 7,
        question: 'Payement Terms',
        answer: 'For first-time customers, our terms are ‘payment in advance’ of delivery. We are glad to extend terms on credit after an order history & relationship have been established.'
    },
    {
        id: 8,
        question: 'What’s the minimum order quantity (MOQ) for exports?',
        answer: 'Our MOQ is [quantity, { e.g., 10 bags/1 ton }], but we can discuss smaller shipments for new partnerships.'
    },
]

export default data;
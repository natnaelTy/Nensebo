
interface DataType {
    id: number,
    title: string,
    description: string,
    imageUrl: string
}
const data = <DataType[]>[
  {
    id: 0, 
    title: "Anaerobic",
    description: "Anaerobic (oxygen-free) fermentation is a new method where the coffee is processed in a fully sealed and oxygen deprived fermentation tank. … This experimental process yields unexpected and complex flavours, while also giving the producer great control over the sugars, temperature, pressure, pH and length of the ferment.",
    imageUrl: "./images/anaerobic.jpg"
  },
  {
    id: 1, 
    title: "Unwashed",
    description: " Coffee is naturally dried; coffee cherries are picked and spread out on to African drying beds after harvest with the coffee fruit and mucilage (that sticky layer just under the skin) still on the bean. The coffee processed naturally is known for their deeply sweet and fruity, full-bodied characteristics, reminiscent of a deep flavor. Once dried, the fruit and mucilage are then removed from around the coffee seed all at once. Common flavor profiles include blueberry, strawberry, and/or tropical sweetness and acidity.",
    imageUrl: "./images/unwashed.jpg"
  },
  {
    id: 2, 
    title: "Washed",
    description: "During, processing the skin of the fresh cherry is physically removed using a pulp machine and water. The coffee is then fermented under water for 24-36 hours, depending on the weather conditions. During the process sugar coating or mucilage around the parchment is removed during the fermentation process. Once fermentation is completed the parchment is thoroughly washed. It’s then graded in washing channels in to two grades based on density, and then soaked under clean spring water in tanks for 12-24 hours to remove all traces of fermented mucilage. Washed coffees tend to have a pronounced acidity and a delicate, complex flavor profile.",
    imageUrl: "./images/washed1.jpg"
  },
];

export default data;
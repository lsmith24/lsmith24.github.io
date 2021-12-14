
const data = [
  {day: "Wednesday", shots: 5},
  {day: "Thursday", shots: 0},
  {day: "Friday", shots: 1},
  {day: "Saturday", shots: 3},
];

// set up styling that will hold the chart
const width = 1400;
const height = 600;
const margin = {top: 0, bottom: 0, left: 150, right: 150};

// create svg that will hold chart, you can then target the svg with css to see it
const svg = d3.select(".d3-container")
.append("svg")
.attr("height", height - margin.top - margin.bottom)
.attr("width", width - margin.left - margin.right)
.attr("viewBox", [0,0, width, height]);

// set up the Y scale to match how many elements we have in our object
const y = d3.scaleBand()
.domain(d3.range(data.length))
.range([height - margin.bottom, margin.top])
/*.range([margin.left, width - margin.right])*/
.padding(0.1);

// set up X scale to match the amounts
const x = d3.scaleLinear()
.domain([0,6])
.range([margin.left, width - margin.right]);

// start creating the bars for the chart
svg
  .append("g")
  .attr("fill", "#e3d9bf")
  .selectAll("rect")
  .data(data)
  .join("rect")
  // places data on correct positions
  .attr("x", (d) => x(0))
  .attr("y", (d, i) => y(i))
  .attr("height", y.bandwidth())
  .attr("width", d => x(d.shots) - x(0))
  //add a class
  .attr("class", "rectangle")

// set up labels for x axis
function xAxis(g) {
  g.attr("transform", `translate(0, ${height - margin.bottom})`)
  g.call(d3.axisBottom(x).ticks(null, data.format))
}

// set up labels for y axis
function yAxis(g){
  g.attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y).tickFormat(i => data[i].day))
}

// draw the labels onto the page for y
svg.append("g").call(yAxis);

// draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
svg.append("g").call(xAxis);

// draws bars onto page. try adding another flower to the data to see how it changes.
  svg.node();
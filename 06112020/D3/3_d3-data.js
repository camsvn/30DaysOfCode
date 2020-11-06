const data = [
    {width: 200, height: 100, fill: 'orange'},
    {width: 100, height: 60, fill: 'coral'},
    {width: 50, height: 30, fill: 'pink'}
]

const svg = d3.select('svg');

//Data Joining Example
const rects = svg.selectAll('rect')
    .data(data) //Join Data

//add attrs to rects already in DOM    
    .attr('width', (d, i , n) => {
        // console.log(i) //logs current index
        // console.log(n) //logs array of selected element
        // console.log("Scope of this in Arrow function: ",this) //this  refers to 'window'
        // console.log(n[i]) //logs current element
        return d.width
    })
    .attr('height', function(d) {
        // console.log("Scope of this in regular function: ",this)    // this refers to the current element    
        return d.height
    })
    .attr('fill', d => d.fill);

//append the enter selection to DOM
rects.enter()
    .append('rect')
    .attr("width", d => d.width)
    .attr("height", d => d.height)
    .attr("fill", d => d.fill)
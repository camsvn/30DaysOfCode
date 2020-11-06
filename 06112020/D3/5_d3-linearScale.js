//Linear Scale and Band Scale
//Min, Max & Extend
//Groups & Margins

const svg = d3.select('.canvas')
    .append('svg')
        .attr('width',600)
        .attr('height',600);

const margin = {top: 20, right: 20, bottom:100 , left:50};
const graphWidth = 600 -margin.left - margin.right;
const graphHeight = 600 -margin.top - margin.bottom;

//crate a group
const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const xAxisGroup = graph.append('g')
    .attr('transform',`translate(0,${graphHeight})`)
const yAxisGroup = graph.append('g');

d3.json('./5_d3-linearScale_menu.json')
    .then(data => {
        //Min, Max & Extend
        const min = d3.min(data, d => d.orders);
        const max = d3.max(data, d => d.orders);
        const extent = d3.extent(data, d => d.orders); // returns an array min and max
        
        const y = d3.scaleLinear()
            // .domain([0,1000]) //hardcoded
            // .range([0,500]);
            .domain([0,max])
            .range([0,graphHeight]);

        const x = d3.scaleBand()
            .domain(data.map( item => item.name))
            .range([0,300])
            .paddingInner(0.3)
            .paddingOuter(0.1);

        // console.log(x.bandwidth());

        /* ------------------------------------------------- */
        
        const rects = graph.selectAll('rect')
            .data(data);

        rects.attr('width', x.bandwidth)
            .attr('height', d => y(d.orders))
            .attr('fill', 'orange')
            .attr('x', d => x(d.name));

        rects.enter()
            .append('rect')
                .attr('width', x.bandwidth)
                .attr('height', d => y(d.orders))
                .attr('fill', 'orange')
                .attr('x', d => x(d.name)); //dynamic bandwidth
                // .attr('width', 70)
                // .attr('x', (d,i) => i * 70); //hardcoded bandwidth
        
        // console.log(rects)

        /* ------------------------------------------------- */
        //Create and call Axis
        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
    })
const canvas = d3.select(".canvas");

const svg = canvas.append("svg");
svg.attr("width",600);
svg.attr("height",600);

const group = svg.append('g')
    .attr("transform","translate(0,20)")

group.append("rect")
    .attr("width",200)
    .attr("height",100)
    .attr("fill",'coral')
    .attr("x",20)
    .attr("y",20);

group.append("circle")
    .attr('r',50)
    .attr('cx',300)
    .attr('cy',70)
    .attr('fill','orange');

group.append("line")
    .attr("stroke",'red')
    .attr("x1",370)
    .attr("x2",400)
    .attr("y1",20)
    .attr("y2",120);

svg.append('text')
    .attr('x',20)
    .attr('y',175)
    .attr('fill','gray')
    .text('Hello... darkness my old friend!')
    .style('font-size', 25)
    .style('letter-spacing', 2);
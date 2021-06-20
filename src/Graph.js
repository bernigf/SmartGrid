import React from 'react'
import * as d3 from 'd3'

class BarChart extends React.Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef()
        
        //this.dataset = [100, 200, 300, 400, 500]
        this.dataset = this.props.data
        
        this.width = this.props.width
        //this.height = this.props.height
     }

    componentDidMount() {
        
        let gDataSet = this.dataset.map(item => { return item * 2 })
        let datasetLen = Object.keys(this.dataset).length
        let width = this.width
        
        let maxVal = parseInt(Math.max.apply(Math, gDataSet))
        maxVal = maxVal + maxVal / 10

        let svg = d3.select(this.myRef.current)
                .append('svg')
                .attr('width', width)
                .attr('height', maxVal)

        let Xoffset = 1.20
        let rect_width = width / datasetLen / Xoffset
        svg.selectAll('rect')
        .data(gDataSet)
        .enter()
        .append('rect')
        .attr('x', (d, i) => (15 / ((datasetLen / 25))) + i*(rect_width + 1))
        .attr('y', d => (maxVal - d))
        .attr('width', rect_width)
        .attr('height', d => d)
        .attr('fill', 'teal');
    }
    
    
    render(){
        return(
        <center>
            <br></br>
            <table border="1">
            <div ref={this.myRef}></div>
            </table>
        </center>
        )
    }
    
}
    
export default BarChart;
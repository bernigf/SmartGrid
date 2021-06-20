import BarChart from "./Graph.js"

const GenGrid = () => {

    const gridSizeTxt = document.getElementById("gridSizeTxt")
    const gridSize = parseInt(gridSizeTxt.textContent)

    const gridSMDATxt = document.getElementById("gridSMDATxt")
    const gridSMDA = parseFloat(gridSMDATxt.textContent)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    var i
    let newGrid = []
    let newGraphData = []
    let gridTotal = 0
    for(i = 0; i < gridSize; i++){
        
        const randomFloat = getRandomFloat(0.1,2)
        const randomSMDA = (gridSMDA * randomFloat).toFixed(2)
        //alert(gridSMDA.toString() + " * " +  randomFloat.toString() + " = " + randomSMDA.toString())

        newGrid.push({id : i+1, SMDA : randomSMDA})
        newGraphData.push(randomSMDA)
        gridTotal = gridTotal + parseFloat(randomSMDA)
    }

    let gridAvg = (gridTotal / gridSize).toFixed(2)

    const str0 = "\n Creating new grid.. \n"
    const str1 = "\n Size: " + gridSize.toString()
    const str2 = "\n Average node: " + gridSMDA.toString()
    //alert(str0 + str1 + str2)

    const gData = {
        data: newGraphData,
        width: 350,
        //height: 350,
    }

    return (
        <div><center><table border='1'>
            <td>Meter ID</td>
            <td>Last read (kWh)</td>
            <td>Read / Avg %</td>
            {newGrid.map((item, index) => (
                <tr>
                    <td><font face="courier" size="2">{item.id}</font></td>
                    <td><font face="courier" size="2"><center>{item.SMDA}</center></font></td>
                    <td align='right'><font face="courier" size="2">{(item.SMDA / gridSMDA * 100).toFixed(2)} <b>%</b>&nbsp;</font></td>
                </tr>
            ))}
        </table>
        <font face="Courier" size="2">Grid average: {gridAvg.toString()} kWh</font>
        </center>
        <br></br>
        <center>
            <form method="submit" href="/">
                <button>New Grid</button>
            </form>
        </center>

        <div className="Chart">
            <BarChart data={newGraphData} width={gData.width} />
        </div>

        </div>

        );
  }
  
export default GenGrid;
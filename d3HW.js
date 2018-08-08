const canvasWidth = 960;
const canvasHeight = 500;

const margin = {top: 20, right: 40, bottom: 60, left: 50};

const chartWidth = canvasWidth - margin.left - margin.right;
const chartHeight = canvasHeight - margin.top - margin.bottom;

let qSelect = d3
    .select('body')
    .append('select')
    .attr('name','question_select')
    .attr('id','qSelect')
    .on('change',function(){updateContent(this.value)});

function populateSelect(){
    d3.text('/data_cleaned/question_map.csv',function(question_map){
        console.log(d3.csvParseRows(question_map))
        qSelect
            .selectAll('option')
            .data(d3.csvParseRows(question_map))
            .enter()
            .append('option')
            .attr('value',function(data){return data[0]})
            .text(function(data){return data[1]})
    })
}

var svg = d3
  .select('body')
  .append('svg')
  .attr('width', canvasWidth)
  .attr('height', canvasHeight)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

populateSelect()


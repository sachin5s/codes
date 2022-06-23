import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import * as Chart from "chart.js";
import { ChartOptions, ChartType ,ChartDataset} from "chart.js";


@Component({
    selector:"app-chartbar",
    templateUrl :"./chartbar.component.html",
    styleUrls:["./chartbar.component.css"]

})

export class chartComponent implements OnInit{

//dummy
details = ["sometimes called Intellect or Imagination this measures your level of creativity , and your desire for knowledge and new experiences.",
'youll likely be organized and thorough, and know how to make plans and follow them through. If you score low, you ll likely be lax and disorganized',
'this dimension measures your level of sociability. Are you outgoing or quiet , for instance? Do you draw energy from a crowd, or do you find it difficult to work and communicate with other people?',
'this dimension measures how well you get on with other people. Are you considerate, helpful and willing to compromise? Or do you tend to put your needs before others',
'sometimes called "Emotional Stability" or "Neuroticism," this measures emotional reactions. Do you react negatively or calmly to bad news? Do you worry obsessively about small details, or are you relaxed in stressful situations'
]


    public barchartOptions : ChartOptions={
        responsive :true,
        indexAxis:'y',
        plugins:{
            legend:{
                labels:{
                boxWidth :5
                }
            }
        },
        scales:{
            x:{
                max : 50,
                min:0,
                ticks:{
                    stepSize:5
                }
            }
        }

    }

    public barChartLabels =['Openness', 'Conscientiousness','Extroversion', 'Agreeableness', 'Neuroticism']
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
 
    public barChartData = [
      {
        data:[],
        label:"ocean Scores out of `5` ",
        backgroundColor: [],
        borderColor:[],
        hoverBackgroundColor:[],
        hoverBorderColor:[],
        borderWidth:1,
        barThickness:30,
    }
    ];
  
    ngOnInit(){
        
    }

    onSubmit(){

    const newone:any = [15,46,30,25,8]  //[o,c,e,a,n]  //max ocean result [40 , 45, 45, 40, 50]
    const backData:any =  []
    const borderData:any = []
    const hoverBack:any = []
    const howerBorderData :any = []

        
       newone.map(((e: number)=> e<=9? backData.push("rgba(255, 0, 0,0.4)"): e<=18 ? backData.push("rgba(254, 134, 0, 0.4)") : e<=27 ? backData.push("rgba(253, 255, 0, 0.4)"): e<=36 ? backData.push("rgba(19, 255, 0, 0.4)"): backData.push("rgba(17, 112, 10, 0.4)")))
       newone.map(((e: number)=> e<=9? borderData.push("rgb(255, 0, 0)"): e<=18 ? borderData.push("rgb(254, 134, 0)") : e<=27 ? borderData.push("rgb(253, 255, 0)"): e<36? borderData.push("rgb(19, 255, 0)"): borderData.push("rgb(17, 112, 10)")))
       newone.map(((e: number)=> e<=9? hoverBack.push("rgba(255, 0, 0,0.8)"): e<=18 ? hoverBack.push("rgba(254, 134, 0, 0.8)") : e<=27 ? hoverBack.push("rgba(253, 255, 0, 0.8)"): e<36? hoverBack.push("rgba(19, 255, 0, 0.8)"): hoverBack.push("rgba(17, 112, 10, 0.8)")))
       newone.map(((e: number)=> e<=9? howerBorderData.push("rgb(255, 0, 0)"): e<=18 ? howerBorderData.push("rgb(254, 134, 0)") : e<=27 ? howerBorderData.push("rgb(253, 255, 0)"): e<36? howerBorderData.push("rgb(19, 255, 0)"): howerBorderData.push("rgb(17, 112, 10)")))
      
      this.barChartData[0].data = newone    
      this.barChartData[0].backgroundColor = backData
      this.barChartData[0].borderColor = borderData
      this.barChartData[0].hoverBackgroundColor = hoverBack
      this.barChartData[0].hoverBorderColor = howerBorderData

    }
}
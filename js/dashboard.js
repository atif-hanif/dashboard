// var date = moment();
// var currentDate = date.format('DD-MMM-YYYY');
// document.getElementById("date").innerHTML = currentDate;

// const hour = new Date().getHours();
// const minutes = new Date().getMinutes();
// let hoursMin = hour + ':' + minutes;
// document.getElementById("time").innerHTML = hoursMin;

$(document).ready(function(){
    $('.menu-tab').click(function(){
        $('.menu-hide').toggleClass('show');
        $('.menu-tab').toggleClass('active');
    });
    $('a').click(function(){
        $('.menu-hide').removeClass('show');
        $('.menu-tab').removeClass('active');
    });
});

const colorPicker = document.querySelectorAll("input.form-control-color");

    const colorUpdate = (cssVars) => {
        const root = document.querySelector(":root");
        const keys = Object.keys(cssVars);
        keys.forEach((key) => {
            root.style.setProperty(key, cssVars[key]);
        });
    };

    colorPicker.forEach((item) => {
        item.addEventListener("input", (e) => {
            const cssPropName = `--primary-${e.target.getAttribute("data-id")}`;
            console.log(cssPropName);
            colorUpdate({
            [cssPropName]: e.target.value
        });
    });
});

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var color7 = document.querySelector(".color7");
var color8 = document.querySelector(".color8");
var color9 = document.querySelector(".color9");
var color10 = document.querySelector(".color10");
var color11 = document.querySelector(".color11");
var color12 = document.querySelector(".color12");
var color13 = document.querySelector(".color13");
var color14 = document.querySelector(".color14");
var color15 = document.querySelector(".color15");
var color16 = document.querySelector(".color16");
var headingdiv = document.getElementsByClassName("heading-div");
var bggardient1 = document.getElementsByClassName("bg-gradient-1");
var bggardient2 = document.getElementsByClassName("bg-gradient-2");
var bggardient3 = document.getElementsByClassName("bg-gradient-3");
var cardheader = document.getElementsByClassName("card-header");
var filter = document.getElementsByClassName("filter");
var filtername = document.getElementsByClassName("filtername");
var setalert = document.getElementsByClassName("set-alert")
var linearDirection1 = document.getElementsByName("toDirection1")[0];
var linearDirection2 = document.getElementsByName("toDirection2")[0];
var linearDirection3 = document.getElementsByName("toDirection3")[0];
var linearDirection4 = document.getElementsByName("toDirection4")[0];
var linearDirection5 = document.getElementsByName("toDirection5")[0];
var linearDirection6 = document.getElementsByName("toDirection6")[0];
var linearDirection7 = document.getElementsByName("toDirection7")[0];
var linearDirection8 = document.getElementsByName("toDirection8")[0];

function returnColor(){

    headingdiv[0].style.background =
    "linear-gradient("
    + linearDirection1.value
    + ", "
    + color1.value
    + ","
    + color2.value
    + ")";

    headingdiv[1].style.background =
    "linear-gradient("
    + linearDirection1.value
    + ", "
    + color1.value
    + ","
    + color2.value
    + ")";

    bggardient1[0].style.background =
    "linear-gradient("
    + linearDirection2.value
    + ", "
    + color3.value
    + ","
    + color4.value
    + ")";

    bggardient1[1].style.background =
    "linear-gradient("
    + linearDirection2.value
    + ", "
    + color3.value
    + ","
    + color4.value
    + ")";

    bggardient1[2].style.background =
    "linear-gradient("
    + linearDirection2.value
    + ", "
    + color3.value
    + ","
    + color4.value
    + ")";

    bggardient2[0].style.background =
    "linear-gradient("
    + linearDirection3.value
    + ", "
    + color5.value
    + ","
    + color6.value
    + ")";

    bggardient2[1].style.background =
    "linear-gradient("
    + linearDirection3.value
    + ", "
    + color5.value
    + ","
    + color6.value
    + ")";

    bggardient2[2].style.background =
    "linear-gradient("
    + linearDirection3.value
    + ", "
    + color5.value
    + ","
    + color6.value
    + ")";

    bggardient3[0].style.background =
    "linear-gradient("
    + linearDirection4.value
    + ", "
    + color7.value
    + ","
    + color8.value
    + ")";

    bggardient3[1].style.background =
    "linear-gradient("
    + linearDirection4.value
    + ", "
    + color7.value
    + ","
    + color8.value
    + ")";

    bggardient3[2].style.background =
    "linear-gradient("
    + linearDirection4.value
    + ", "
    + color7.value
    + ","
    + color8.value
    + ")";

    cardheader[0].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[1].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[2].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[3].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[4].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[5].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[6].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[7].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    cardheader[8].style.background =
    "linear-gradient("
    + linearDirection5.value
    + ", "
    + color9.value
    + ","
    + color10.value
    + ")";

    filter[0].style.background =
    "linear-gradient("
    + linearDirection6.value
    + ", "
    + color11.value
    + ","
    + color12.value
    + ")";

    filtername[0].style.background =
    "linear-gradient("
    + linearDirection7.value
    + ", "
    + color13.value
    + ","
    + color14.value
    + ")";

    filtername[1].style.background =
    "linear-gradient("
    + linearDirection7.value
    + ", "
    + color13.value
    + ","
    + color14.value
    + ")";

    setalert[0].style.background =
    "linear-gradient("
    + linearDirection8.value
    + ", "
    + color15.value
    + ","
    + color16.value
    + ")";

    setalert[1].style.background =
    "linear-gradient("
    + linearDirection8.value
    + ", "
    + color15.value
    + ","
    + color16.value
    + ")";
}


document.querySelector('select[name="toDirection1"]').onchange=returnColor;
document.querySelector('select[name="toDirection2"]').onchange=returnColor;
document.querySelector('select[name="toDirection3"]').onchange=returnColor;
document.querySelector('select[name="toDirection4"]').onchange=returnColor;
document.querySelector('select[name="toDirection5"]').onchange=returnColor;
document.querySelector('select[name="toDirection6"]').onchange=returnColor;
document.querySelector('select[name="toDirection7"]').onchange=returnColor;
document.querySelector('select[name="toDirection8"]').onchange=returnColor;
color1.addEventListener("input", returnColor)
color2.addEventListener("input", returnColor)
color3.addEventListener("input", returnColor)
color4.addEventListener("input", returnColor)
color5.addEventListener("input", returnColor)
color6.addEventListener("input", returnColor)
color7.addEventListener("input", returnColor)
color8.addEventListener("input", returnColor)
color9.addEventListener("input", returnColor)
color10.addEventListener("input", returnColor)
color11.addEventListener("input", returnColor)
color12.addEventListener("input", returnColor)
color13.addEventListener("input", returnColor)
color14.addEventListener("input", returnColor)
color15.addEventListener("input", returnColor)
color16.addEventListener("input", returnColor)

//Segments Sale

Highcharts.chart('chart1', {
    chart: {
        type: 'bar',
        height: 165,
    },

    title: {
        align: 'left',
        text: ''
    },

    subtitle: {
        align: 'left',
        text: ''
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: ''
        },
        visible: false,
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
    },

    series: [
        {
            name: '',
            colorByPoint: true,
            data: [
                {
                    name: 'Doctors',
                    y: 6.00,
                    color: '#5caafc'
                },
                {
                    name: 'Institution',
                    y: 33.30,
                    color: '#7864df'
                },
                {
                    name: 'Retail',
                    y: 25.00,
                    color: '#8eaf58'
                },
                {
                    name: 'Wholesale',
                    y: 35.70,
                    color: '#8d6b9e'
                }
            ]
        }
    ],
});


// Product Sale

Highcharts.chart('chart2', {
    chart: {
        type: 'bar',
        height: 250,
    },

    title: {
        align: 'left',
        text: ''
    },

    subtitle: {
        align: 'left',
        text: ''
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: ''
        },
        visible: false,
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
    },

    series: [
        {
            name: '',
            colorByPoint: true,
            data: [
                {
                    name: 'Vitaxon',
                    y: 6.00,
                    color: '#dbd99c'
                },
                {
                    name: 'Crestat',
                    y: 33.30,
                    color: '#7b9cbb'
                },
                {
                    name: 'Dilcozyme',
                    y: 25.00,
                    color: '#a87574'
                },
                {
                    name: 'CEF OD MAX',
                    y: 35.70,
                    color: '#9871b2'
                },
                {
                    name: 'Normozide MX',
                    y: 25.70,
                    color: '#f2ac92'
                },
                {
                    name: 'Gablin LK',
                    y: 18.70,
                    color: '#b0dce7'
                }
            ]
        }
    ],
});

//Segments Sale

Highcharts.chart('chart3', {
    chart: {
        type: 'bar',
        height: 250,
    },

    title: {
        align: 'left',
        text: ''
    },

    subtitle: {
        align: 'left',
        text: ''
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: ''
        },
        visible: false,
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
    },

    series: [
        {
            name: '',
            colorByPoint: true,
            data: [
                {
                    name: 'Doctors',
                    y: 6.00,
                    color: '#5caafc'
                },
                {
                    name: 'Institution',
                    y: 33.30,
                    color: '#7864df'
                },
                {
                    name: 'Retail',
                    y: 25.00,
                    color: '#8eaf58'
                },
                {
                    name: 'Wholesale',
                    y: 35.70,
                    color: '#8d6b9e'
                }
            ]
        }
    ],
});


// Product Sale

Highcharts.chart('chart4', {
    chart: {
        type: 'bar',
        height: 350,
    },

    title: {
        align: 'left',
        text: ''
    },

    subtitle: {
        align: 'left',
        text: ''
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: ''
        },
        visible: false,
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
    },

    series: [
        {
            name: '',
            colorByPoint: true,
            data: [
                {
                    name: 'Vitaxon',
                    y: 6.00,
                    color: '#dbd99c'
                },
                {
                    name: 'Crestat',
                    y: 33.30,
                    color: '#7b9cbb'
                },
                {
                    name: 'Dilcozyme',
                    y: 25.00,
                    color: '#a87574'
                },
                {
                    name: 'CEF OD MAX',
                    y: 35.70,
                    color: '#9871b2'
                },
                {
                    name: 'Normozide MX',
                    y: 25.70,
                    color: '#f2ac92'
                },
                {
                    name: 'Gablin LK',
                    y: 18.70,
                    color: '#b0dce7'
                }
            ]
        }
    ],
});

// Doctor Coverage

var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart

Highcharts.chart('chart5', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 250,
    },

    title: {
        text: '',
        align: 'left'
    },

    tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },

    series: [{
        name: 'Doctor Coverage',
        data: [
            { name: 'A+', y: 25 },
            { name: 'B', y: 35 },
            { name: 'C', y: 50 },
            { name: 'D', y: 15 },
        ]
    }]
});

// Target vs Actual Calls (MTD)

Highcharts.chart('chart6', {
    chart: {
        type: 'bar',
        height: 250
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: [
            'A',
            'A+',
            'B',
            'C'
        ],
        crosshair: true,
    },

    yAxis: {
        visible: false,
        min: 0,
        title: {
            text: ''
        }
    },

    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    series: [{
        name: 'Target',
        data: [25,15,20,13],
        color: '#0e87e2'
    }, {
        name: 'Call',
        data: [5,3,6,3],
        color: '#04047c'
    }]
});

// Day Wise Trend By Value

$(function () {
    $('#chart7').highcharts({
        chart: {
            zoomType: 'xy',
            height: 350,
        },

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        xAxis: [{
            categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon1', 'Tue1', 'Wed1', 'Thur1', 'Fri1', 'Sat1', 'Sun1'],
            crosshair: true,
            min: 0,
            max: 4,
            scrollbar: {
                enabled: true
            },
        }],

        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Millions',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],

        tooltip: {
            shared: true
        },

        credits: {
            enabled: false
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            x: 0,
            verticalAlign: 'bottom',
            y: 0,
            padding: 10,
            //floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },

        series: [{
            name: 'Sales Value',
            type: 'column',
            stack: 1,
            yAxis: 1,
            data: [4, 6, 4, 4, 2, 6, 2, 4, 6, 4, 4, 2, 6, 2],
            tooltip: {
                valueSuffix: ' millions'
            },
            color: '#306fb2'

        }, {
            name: 'Last month Sale Value',
            type: 'column',
            stack: 1,
            yAxis: 1,
            data: [3, 4, 3, 4, 3, 7, 2, 3, 4, 3, 4, 3, 7, 2],
            tooltip: {
                valueSuffix: ' millions'
            },
            color: '#b23c3c'

        }, {
            name: 'Last Year Sale Value',
            type: 'column',
            stack: 1,
            yAxis: 1,
            data: [3, 5, 4, 3, 4, 2, 5, 3, 5, 4, 3, 4, 2, 5],
            tooltip: {
                valueSuffix: ' millions'
            },
            color: '#94ae43'

        },{
            name: 'Day to MTD',
            type: 'spline',
            data: [4, 8, 3, 9, 11, 18, 19, 4, 8, 3, 9, 11, 18, 19],
            tooltip: {
                valueSuffix: ''
            },
            color: '#665192'
        }]
    });
});

// Region (Distibutor) Trend by Value

Highcharts.chart('chart8', {
    chart: {
        zoomType: 'xy',
        height: 350
    },
    
    title: {
        text: '',
        align: 'left'
    },

    subtitle: {
        text: ''
    },

    credits: {
        enabled: false
    },

    xAxis: [{
        categories: ['North-I', 'Center-I', 'South-I', 'North-I', 'Center-II', 'South-II'],
        crosshair: true
    }],

    yAxis: [{ // Primary yAxis
        labels: {
            format: '',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }

    }, { // Secondary yAxis
        visible: false,
        title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },

        labels: {
            format: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],

    tooltip: {
        shared: true
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        padding: 10,
        //floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },

    series: [{
        name: 'Target Value',
        type: 'column',
        yAxis: 1,
        data: [0, 8253, 0, 0, 0, 0],
        color: '#306fb2'
    }, {
        name: 'Actual Value',
        type: 'column',
        yAxis: 1,
        data: [2299, 2654, 1136, 460, 1337, 715],
        color: '#b23c3c'
    }, {
        name: 'Last Year Value',
        type: 'column',
        yAxis: 1,
        data: [1970, 2350, 993, 392, 1178, 666],
        color: '#94ae43'
    }, {
        name: 'Ach',
        type: 'column',
        yAxis: 1,
        data: [0, 32, 0, 0, 0, 0],
        color: '#665192'

    }, {
        name: 'Growth',
        type: 'spline',
        data: [0, 0, 0, 0, 0, 0],
        color: '#369ebb'
    }]
});

// Team Trend by Value

Highcharts.chart('chart9', {
    chart: {
        zoomType: 'xy',
        height: 350
    },
    
    title: {
        text: '',
        align: 'left'
    },

    subtitle: {
        text: ''
    },

    credits: {
        enabled: false
    },

    xAxis: [{
        categories: ['02-Matrix-A', '03-Star', '04-Advance', '05-Acer', '06-Max', '07-Matrix-B', '08-Dynamic', '09-Alpha', '13-Excempar', '14-Discountined Team', '15-Galaxy', '17-Elite', '19-Pacer', '21-Critic Care', '22-Primax', '23-Marvel', '24-Jupiter'],
        crosshair: true
    }],

    yAxis: [{ // Primary yAxis
        labels: {
            format: '',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }

    }, { // Secondary yAxis
        visible: false,
        title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },

        labels: {
            format: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],

    tooltip: {
        shared: true
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        padding: 10,
        //floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },

    series: [{
        name: 'Acutal Value',
        type: 'column',
        yAxis: 1,
        data: [515, 583, 566, 1519, 852, 498, 184, 51, 331, 41, 667, 1014, 432, 124, 282, 199, 742],
        color: '#1f78b4'
    }, {
        name: 'Target Value',
        type: 'column',
        yAxis: 1,
        data: [415, 600, 609, 1276, 756, 353, 197, 179, 377, 32, 646, 914, 505, 100, 262, 203, 793],
        color: '#fe7f0e'
    }, {
        name: 'Last Year Value',
        type: 'column',
        yAxis: 1,
        data: [427, 567, 502, 1374, 846, 314, 187, 76, 259, 90, 598, 902, 303, 62, 226, 148, 667],
        color: '#2ba02d'
    }, {
        name: 'Ach',
        type: 'spline',
        data: [124, 97, 93, 119, 113, 141, 93, 29, 88, 129, 103, 111, 86, 96, 108, 98, 94],
        color: '#d52728'

    }, {
        name: 'Growth',
        type: 'spline',
        data: [21, 3, 13, 11, 1, 59, -1, -33, 28, -55, 11, 12, 43, 100, 25, 34, 11],
        color: '#9467bc'
    }]
});
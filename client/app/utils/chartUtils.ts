import Highcharts from 'highcharts';

export function prepareBarChartConfig(chartTitle, xAxisTitle, yAxisTitle):Highcharts.Options {
    return {
        chart: {
            type: 'column'
        },
        title: {
            text: chartTitle,
            align: 'left'
        },
        xAxis: {
            categories: [],
            title: {
                text: xAxisTitle,
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: yAxisTitle,
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        legend: {
            align: 'right' as Highcharts.AlignValue,
            verticalAlign: 'middle',
            layout: 'vertical',
            symbolRadius: 0
        },
        series: [{
            name: '',
            type: 'column',
            data: []
        }]
    }
}

export function preparePieChartConfig(chartTitle, name, data): Highcharts.Options {
    return {
        chart: {
            type: 'pie'
        },
        title: {
            text: chartTitle,
            align: 'left'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                shadow: false,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -30
                }
            }
        },
        legend: {
            align: 'right' as Highcharts.AlignValue,
            verticalAlign: 'middle',
            layout: 'vertical',
            symbolRadius: 0
        },
        series: [
            {
                name: name,
                data: data,
                size: '100%',
                showInLegend: true,
                dataLabels: {
                    enabled: true
                }
            }
        ] as Highcharts.SeriesVariablepieOptions[]
    }
}
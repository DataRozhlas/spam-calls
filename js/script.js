var blocked_hrs = {
    "7": 0.0114664536,
    "8": 0.1228674601,
    "9": 5.0179846914,
    "10": 10.7701752251,
    "11": 12.3503407301,
    "12": 12.5109151818,
    "13": 11.0443116688,
    "14": 11.420720058,
    "15": 11.5887918062,
    "16": 9.5286229142,
    "17": 6.8547782476,
    "18": 4.0984192171,
    "19": 2.3757168739,
    "20": 1.4606056757,
    "21": 0.6406219404,
    "22": 0.1251166491,
    "23": 0.0216098548,
  };

  var block_req = {
    '2014': 8968,
    '2015': 34112,
    '2016': 47923,
    '2017': 92214,
    '2018': 132320,
    '2019': null
  };

  Highcharts.chart('blocked_hrs', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Podíl zablokovaných hovorů aplikací Nevolejte.cz (po hodinách)'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: Object.keys(blocked_hrs),
        crosshair: true,
        title: {
            text: 'hodina'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'zablokované hovory (%)'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
        series: {
            enableMouseTracking: false
        }
    },
    series: [{
        name: '',
        data: Object.values(blocked_hrs)
    }]
});

Highcharts.chart('blocked_req', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Počet žádostí o blokaci čísla v aplikaci Nevolejte.cz'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: Object.keys(block_req),
        crosshair: true,
        title: {
            text: 'rok'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'počet žádostí'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            stacking: 'normal',
        },
        series: {
            enableMouseTracking: false
        }
    },
    series: [
        {
            name: '',
            data: Object.values(block_req)
        },
        {
            name: '',
            data: [null, null, null, null, null, 27614],
            color: 'lightgray'
        }
]
});
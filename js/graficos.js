const oceanos = ['Pacífico', 'Atlântico', 'Índico', 'Antártico', 'Ártico'];
const quantidadeLixo = [80000, 34000, 27000, 10000, 9000];
const plasticos = [60000, 20000, 15000, 5000, 4500];
const metais = [10000, 5000, 5000, 2000, 1500];
const vidros = [5000, 3000, 3000, 1000, 1000];
const papeis = [3000, 2000, 2000, 500, 500];
const outros = [2000, 4000, 2000, 1500, 1500];
const colors = {
    plasticos: 'rgba(255, 99, 132, 0.8)',
    metais: 'rgba(54, 162, 235, 0.8)',
    vidros: 'rgba(255, 206, 86, 0.8)',
    papeis: 'rgba(75, 192, 192, 0.8)',
    outros: 'rgba(153, 102, 255, 0.8)'
};
const anos = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const pacifico = [70000, 72000, 75000, 78000, 80000, 82000, 84000, 86000, 88000];
const atlantico = [25000, 26000, 27000, 28500, 30000, 31000, 32000, 33000, 34000];
const indico = [20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000];
const antartico = [8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000];
const artico = [7000, 7200, 7500, 8000, 8500, 9000, 9500, 10000, 10500];



const ctxBar = document.getElementById('mainChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: oceanos,
        datasets: [{
    label: 'Quantidade de Lixo (toneladas)',
    data: quantidadeLixo,
    backgroundColor: ['rgba(255, 99, 132, 0.8)'],
        }]
        },
        options: {
    responsive: true,
    scales:{
        x:{
    ticks: {
        color: 'white'
    }
        },
        y: {
    ticks: {
        color: 'white'
    }
        }
    },
    plugins: {
        title: {
    display: true,
    text: 'Distribuição de Lixo Marinho por Oceano',
    font: {
        size: 18
    },color:'white'

        },
        subtitle: {
    display: true,
    text: 'Dados aproximados baseados em estimativas de 2023',
    font: {
        size: 14
    },
    padding: {
        bottom: 10
    },color:'white'

        },
        legend: {
    display: false,
        },
        tooltip: {
    callbacks: {
        label: function(tooltipItem) {
    return tooltipItem.label + ': ' + tooltipItem.raw + ' toneladas';
        }
    }
        }
    }
        }
    });



const ctxStackedBar = document.getElementById('stackedBarChart').getContext('2d');
const stackedBarChart = new Chart(ctxStackedBar, {
        type: 'bar',
        data: {
    labels: oceanos,
    datasets: [
        {
    label: 'Plástico',
    data: plasticos,
    backgroundColor: colors.plasticos
        },
        {
    label: 'Metal',
    data: metais,
    backgroundColor: colors.metais
        },
        {
    label: 'Vidro',
    data: vidros,
    backgroundColor: colors.vidros
        },
        {
    label: 'Papel',
    data: papeis,
    backgroundColor: colors.papeis
        },
        {
    label: 'Outros',
    data: outros,
    backgroundColor: colors.outros
        }
    ]
        },
        options: {
    responsive: true,
    scales:{
        x:{
    ticks: {
        color: 'white'
    }
        },
        y: {
    ticks: {
        color: 'white'
    }
        }
    },
    plugins: {
        title: {
    display: true,
    text: 'Composição de Lixo Marinho por Oceano',
    font: {
        size: 18
    },color:'white'
        },
        subtitle: {
    display: true,
    text: 'Dados fictícios',
    font: {
        size: 14
    },
    color:'white'
        },
        legend: {
    labels: {
        color: 'white'
    }
        },
        tooltip: {
    callbacks: {
        label: function(tooltipItem) {
    return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' toneladas';
        }
    }
        }
    }
        }
    });



const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
    labels: anos,
    datasets: [
        {
    label: 'Pacífico',
    data: pacifico,
    borderColor: 'rgba(255, 99, 132, 1)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    fill: true,
        },
        {
    label: 'Atlântico',
    data: atlantico,
    borderColor: 'rgba(54, 162, 235, 1)',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    fill: true
        },
        {
    label: 'Índico',
    data: indico,
    borderColor: 'rgba(75, 192, 192, 1)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    fill: true
        },
        {
    label: 'Antártico',
    data: antartico,
    borderColor: 'rgba(153, 102, 255, 1)',
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    fill: true
        },
        {
    label: 'Ártico',
    data: artico,
    borderColor: 'rgba(255, 159, 64, 1)',
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    fill: true
        }
    ]
        },
        options: {
    responsive: true,
    scales:{
        x:{
    ticks: {
        color: 'white'
    }
        },
        y: {
    ticks: {
        color: 'white'
    }
        }
    },
    plugins: {
        title: {
    display: true,
    text: 'Tendência Temporal do Lixo Marinho por Oceano',
    color: 'white',
    font: {
        size: 18
    }
        },
        subtitle: {
    display: true,
    text: 'Dados fictícios',
    font: {
        size: 14
    },
    color:'white'
        },
        legend: {
    labels: {
        color: 'white'
    }
        },
        tooltip: {
    callbacks: {
        label: function(tooltipItem) {
    return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' toneladas';
        }
    }
        }
    }
        }
    });



const data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
    {
        label: 'Plástico',
        data: [30, 40, 50, 60, 70, 85, 90, 95, 100],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1
    },
    {
        label: 'Metais',
        data: [10, 20, 25, 30, 35, 40, 45, 50, 55],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.1
    },
    {
        label: 'Vidro',
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1
    },
    {
        label: 'Outros',
        data: [15, 18, 22, 26, 30, 34, 38, 42, 46],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.1
    }
        ]
    };


const config = {
        type: 'line',
        data: data,
        options: {
    responsive: true,
    plugins: {
        title: {
    display: true,
    text: 'Impacto do Lixo Marinho na Vida Marinha',
    font: {
        size: 18
    },
    color:'white'
        },
        subtitle: {
    display: true,
    text: 'Dados fictícios',
    font: {
        size: 14
    },
    color:'white'
        },
        legend: {
    display: true,
    position: 'top',
    labels: {
        color: 'white'
    }
        },
        tooltip: {
    mode: 'index',
    intersect: false
        }
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {

        y: {
    display: true,
    title: {
        display: true,
        text: 'Impacto (Índice de Severidade)',
        color:'white'
    },
    beginAtZero: true,
    ticks: {
        color: 'white'
    }
        },
        x:{
    ticks: {
        color: 'white'
    }
        }
    }
        }
    };

const ctx = document.getElementById('impactChart').getContext('2d');
const impactChart = new Chart(ctx, config);



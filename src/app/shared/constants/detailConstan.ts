export const LINE_CHART_DATA = [
  {
    data: [],
    label: 'Temperature',
    borderColor: '#78CdEB',
    pointBackgroundColor: '#87CEEB',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#396EEB',
  },
];

export const LINE_CHART_OPTIONS = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          font: {
            size: 16,
            weight: 'bold',
          },
          color: '#fff',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          font: {
            size: 12,
          },
          color: '#fff',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°F)',
          font: {
            size: 16,
            weight: 'bold',
          },
          color: '#fff',
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#666',
        },
        beginAtZero: true
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: { raw: any; }) {
            return `Temperature: ${tooltipItem.raw}°F`;
          },
        },
      },
    },
    backgroundColor: '#7CEEB',
    color: '#fff',
}

export const CHART_TYPE = 'line';
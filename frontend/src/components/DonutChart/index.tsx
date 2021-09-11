import axios from "axios";
import Chart from "react-apexcharts";
import { SalesSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    let chartData: ChartData = { labels: [], series: [] };

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SalesSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySereies = data.map(x => x.sum);
            chartData = {labels: myLabels, series:mySereies};

            console.log(chartData)
        });

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    };

    const options = {
        legend: {
            show: true
        }
    };

    return (
        <div>
            <Chart
                options={{ ...options, labels: mockData.labels, }}
                series={mockData.series}
                type="donut"
                height="240"
            />
        </div>
    );
}

export default DonutChart;

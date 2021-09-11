import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SalesSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SalesSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySereies = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySereies });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    };

    return (
        <div>
            <Chart
                options={{ ...options, labels: chartData.labels, }}
                series={chartData.series}
                type="donut"
                height="240"
            />
        </div>
    );
}

export default DonutChart;

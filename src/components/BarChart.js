import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const BarChart = (props) => {
  const continentsNames = props[Object.keys(props)[0]];
  const countryCount = props[Object.keys(props)[1]];
  const countriesData = [];
  const getCountryCount = (arr) =>
    arr.forEach((item) => {
      countriesData.push(item.length);
    });

  getCountryCount(countryCount);
  console.log(countriesData);
  return (
    <div>
      <HorizontalBar
        data={{
          labels: continentsNames,

          datasets: [
            {
              label: "Países por Continente",
              data: countriesData,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={500}
        width={400}
        options={{
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 17,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;

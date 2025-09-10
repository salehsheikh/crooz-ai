"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const FunnelChart = () => {
  const series = [
    {
      data: [600, 500, 400, 300, 200, 100],
    },
  ];

  const categories = [
    "Subscriptions A",
    "Subscriptions B",
    "Subscriptions C",
    "Subscriptions D",
    "Subscriptions E",
    "Subscriptions F",
  ];

  const options = {
    chart: {
      type: "bar",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
        borderRadius: 20,
        distributed: true,
        isFunnel: true,
      },
    },
    colors: ["#FDC278", "#BEDB84", "#A2E298", "#91DFD4", "#FFA696", "#CACED6"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
    },
  yaxis: {
  labels: {
    show: false,
  },
},
    legend: {
      show: true,
      position: "right",
      verticalAlign: "top",
      horizontalAlign: "left",
      itemMargin: {
        vertical: 6,
      },
      markers: {
        shape: "circle", // <-- make markers round
        size:4
      },
      formatter: function (seriesName, opts) {
        const value = series[0].data[opts.seriesIndex];
        return `${seriesName} - $${value}`;
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="rounded-xl border border-[#E9EAEB] w-full">
      <p className="text-[#181D27] pt-3 pb-2 text-sm px-5 font-semibold leading-5">
        Opportunity Forecast
      </p>
      <div className="p-5 rounded-xl border-t border-[#E9EAEB]">
        <div className="flex justify-end">
          <Icon
            icon="pepicons-pencil:dots-y"
            width="20"
            height="20"
            className="cursor-pointer text-[#A4A7AE]"
          />
        </div>
      </div>
      <div className="p-5">
        <ApexCharts options={options} series={series} type="bar" height={218} />
      </div>
    </div>
  );
};

export default FunnelChart;

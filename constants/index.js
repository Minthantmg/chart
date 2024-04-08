export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Steps",
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: "rgb(75,192,192)",
    },
    {
      label: "Mom's Steps",
      data: [1000, 8000, 2500, 6000, 3000, 9000, 2000],
      borderColor: "rgb(255,9,24)",
    },
  ],
};

export const barChartData = {
  labels: ["Rent", "Geoceries", "Utilities", "Entertaiment", "Transportation"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(54,162,235,1)",
      borderWidth: 1,
    },
    {
      label: "InCome",
      data: [200, 800, 950, 280, 300],
      backgroundColor: "rgba(86,101,115,1)",
      borderColor: "rgba(86,101,115,1)",
      borderWidth: 1,
    },
  ],
};

export const pieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "Youtube", "LinkedIn"],
  datasets: [
    {
      label: "Time Spent",
      data: [120, 60, 30, 90, 45],
      backgroundColor: [
        "rgba(255,99,132,0.9)",
        "rgba(54,162,235,0.9)",
        "rgba(255,206,86,0.9)",
        "rgba(75,192,192,0.9)",
        "rgba(153,102,255,0.9)",
      ],
      hoverOffset: 4,
    },
  ],
};

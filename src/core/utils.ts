export const formatCurrentDate = (currentDate: Date): string => {
  const day: number = currentDate.getDate();
  const month: string = currentDate.toLocaleString("default", {
    month: "long",
  });
  const year: number = currentDate.getFullYear();
  return `${day} ${month} ${year}`;
};

export const getDayOfWeek = (currentDate: Date): string => {
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDayIndex: number = currentDate.getDay();
  return daysOfWeek[getDayIndex];
};

export const formatTempByUnits = (temp: number, unit: string): string => {
  const temperatureUnitValue = unit === "imperial" ? "F" : "C";
  return `${Math.round(temp)}&deg; ${temperatureUnitValue}`;
};
export const formatSpeedByUnits = (
  speed: number,
  speedUnit: string
): string => {
  const speedUnitValue = speedUnit === "imperial" ? "miles/hour" : "meter/sec";
  return `${speed} ${speedUnitValue}`;
};

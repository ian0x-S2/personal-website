import Feature from "@/components/feature";

export default async function Home() {
  const city = "Sao Paulo";
  const key = process.env.API_KEY;
  
  let weatherData = null;
  try {
    if (key) {
      const weatherRes = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": `${key}`,
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
          next: { revalidate: 86400 }, // Cache of 24 hours
        }
      );
      if (weatherRes.ok) {
        weatherData = await weatherRes.json();
      }
    }
  } catch (error) {
    console.warn("Weather API could not be reached:", error);
  }

  const condition = weatherData?.current?.condition?.text || "Clear";
  const loc = weatherData?.location?.name || city;
  const temp = weatherData?.current?.temp_c || 22;

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Feature props={{ loc, condition, temp }} />
    </div>
  );
}

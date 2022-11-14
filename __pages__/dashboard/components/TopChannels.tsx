import LeaderBoard from "./LeaderBoard/LeaderBoard";

export default function TopChannels() {
  const data = [
    {
      image: "/static/Clothing.png",
      name: "Lens Protocol",
      value: 100,
    },
    { image: "/static/Clothing.png", name: "CoinShots", value: 200 },
    { image: "/static/Clothing.png", name: "Aave", value: 300 },
    {
      image: "/static/Clothing.png",
      name: "Meet with Wallet",
      value: 200,
    },
    { image: "/static/Clothing.png", name: "Uniswap", value: 300 },
  ];

  return <LeaderBoard title="Top channels by subscriber count" data={data} />;
}

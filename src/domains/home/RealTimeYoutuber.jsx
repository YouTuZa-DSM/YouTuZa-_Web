import YoutuberChart from "../../components/youtuber/YoutuberChart";
import { YoutuberChartWrapper } from "./RealTimeYoutuber.style";

const RealTimeYoutuber = ({ data }) => {
  return (
    <YoutuberChartWrapper>
      {data?.map((e) => (
        <YoutuberChart
          priceChange={e.price_change_rate}
          img={e.profile_image_url}
          price={e.price}
          name={e.youtuber_name}
        />
      ))}
    </YoutuberChartWrapper>
  );
};

export default RealTimeYoutuber;

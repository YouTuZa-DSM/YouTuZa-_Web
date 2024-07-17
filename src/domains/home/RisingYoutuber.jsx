import YoutuberChartCard from "../../components/youtuber/YoutuberChartCard";
import { useGetIncreaseYoutuber } from "../../utils/api/Youtuber";
import { YoutuberRisingWrapper } from "./RisingYoutuber.style";

const RisingYoutuber = () => {
  const { data } = useGetIncreaseYoutuber();
  return (
    <YoutuberRisingWrapper>
      {data?.data?.map((e) => (
        <YoutuberChartCard
          img={e.profile_image_url}
          name={e.youtuber_name}
          priceChangeRate={e.price_change_rate}
        />
      ))}
    </YoutuberRisingWrapper>
  );
};

export default RisingYoutuber;

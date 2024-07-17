import { useNavigate } from "react-router-dom";
import {
  RisingCardWrapper,
  RisingCard,
  RisingInformationWrapper,
  RisingScoreChangePercent,
  RisingTitle,
} from "./YoutuberChartCard.style";

const YoutuberChartCard = (props) => {
  const navigate = useNavigate();
  const { name, img, priceChangeRate } = props;
  return (
    <RisingCardWrapper onClick={() => navigate(`/youtuber/${name}`)}>
      <RisingCard
        alt={name}
        src={img}
        width={120}
        height={120}
        layout="fixed"
        objectFit="cover"
      />
      <RisingInformationWrapper>
        <RisingTitle>{name}</RisingTitle>
        <RisingScoreChangePercent
          scoreChangedStatus={priceChangeRate >= 0 ? "up" : "down"}
        >
          {priceChangeRate} %
        </RisingScoreChangePercent>
      </RisingInformationWrapper>
    </RisingCardWrapper>
  );
};

export default YoutuberChartCard;

import { useNavigate } from "react-router-dom";
import ProfileImage from "../image/ProfileImage";
import defaultImage from "../image/default";
import {
  RisingScoreChangePercent,
  YoutuberChartBox,
  YoutuberCoin,
  YoutuberInfo,
  YoutuberName,
} from "./YoutuberChart.style";

const YoutuberChart = (props) => {
  const navigate = useNavigate();
  const { img, name, price, priceChange } = props;
  return (
    <YoutuberChartBox onClick={() => navigate(`/youtuber/${name}`)}>
      <YoutuberInfo>
        <ProfileImage src={img ? img : defaultImage} width={36} height={36} />
        <div>
          <YoutuberName>{name}</YoutuberName>
          {priceChange != undefined && (
            <RisingScoreChangePercent
              scoreChangedStatus={priceChange >= 0 ? "up" : "down"}
            >
              {priceChange} %
            </RisingScoreChangePercent>
          )}
        </div>
      </YoutuberInfo>
      <div>
        <YoutuberCoin
          style={{ fontSize: "1.3rem", fontWeight: 500, paddingRight: 5 }}
        >
          {price}
        </YoutuberCoin>
        <YoutuberCoin>YOU</YoutuberCoin>
      </div>
    </YoutuberChartBox>
  );
};

export default YoutuberChart;

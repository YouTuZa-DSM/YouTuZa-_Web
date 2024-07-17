import { ChartContainer, ChartRealWrapper } from "./Chart.style";
import RealTimeYoutuber from "../home/RealTimeYoutuber";
import { useGetYoutuber } from "../../utils/api/Youtuber";

function Chart() {
  const { data } = useGetYoutuber();
  return (
    <ChartContainer>
      <ChartRealWrapper>
        <RealTimeYoutuber data={data?.data} />
      </ChartRealWrapper>
    </ChartContainer>
  );
}

export default Chart;

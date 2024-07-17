import Title from "../../components/Title";
import { useTabs } from "../../hooks/useTabs";
import Bar from "../../components/bar/Bar";
import OrderBook from "./AskingPrice";
import {
  Price,
  RisingScoreChangePercent,
  YoutuberWrapper,
  TabMenu,
} from "./Detail.style";
import {
  useGetYoutuberAskPrice,
  useGetYoutuberDetail,
} from "../../utils/api/Youtuber";
import { useLocation } from "react-router-dom";
import Graph from "../../components/graph";
import { useGetYoutuberComment } from "../../utils/api/Comment";
import Comment from "../../components/comment/Comment";
import WriteComment from "../../components/comment/WriteComment";

const Detail = () => {
  const location = useLocation("");
  const YOUTUBER = location.pathname.split("/")[2];
  const { data: detail } = useGetYoutuberDetail(YOUTUBER);
  const { data: asking } = useGetYoutuberAskPrice(YOUTUBER);
  const { data: comments } = useGetYoutuberComment(YOUTUBER);

  const [currentIndex, currentTab, setCurrenIndex] = useTabs(0, [
    <OrderBook
      name={location.pathname.split("/")[2]}
      priceList={asking?.data?.price_list}
      currentPrice={asking?.data?.current_price}
    />,
    <Graph data={detail?.data?.price_history} />,
    <>
      <WriteComment youtuber={YOUTUBER} />
      {Array.isArray(comments?.data) && comments?.data.length > 0 ? (
        comments.data.map((comment, index) => {
          const { title, name, content } = comment;
          return (
            <Comment key={index} title={title} name={name} content={content} />
          );
        })
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </>,
  ]);

  return (
    <>
      <YoutuberWrapper>
        <Title type="big">{detail?.data?.youtube_name}</Title>
        <div>
          <Price scoreChangedStatus={14 >= 0 ? "up" : "down"}>
            {detail?.data?.price_info.current_price} YOU
          </Price>
          <RisingScoreChangePercent
            type="normal"
            scoreChangedStatus={14 >= 0 ? "up" : "down"}
          >
            {detail?.data?.price_info.price_diff}점 (
            {detail?.data?.price_info.price_diff_percent}%)
          </RisingScoreChangePercent>
        </div>
      </YoutuberWrapper>
      <Bar />
      <TabMenu>
        <button
          onClick={() => setCurrenIndex(0)}
          style={{
            borderBottom: currentIndex === 0 ? "1px solid black" : "none",
            padding: "10px 15px",
          }}
        >
          호가
        </button>
        <button
          onClick={() => setCurrenIndex(1)}
          style={{
            borderBottom: currentIndex === 1 ? "1px solid black" : "none",
            padding: "10px 15px",
          }}
        >
          차트
        </button>
        <button
          onClick={() => setCurrenIndex(2)}
          style={{
            borderBottom: currentIndex === 2 ? "1px solid black" : "none",
            padding: "10px 15px",
          }}
        >
          토론
        </button>
      </TabMenu>
      {currentTab}
    </>
  );
};

export default Detail;

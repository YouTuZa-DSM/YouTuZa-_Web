import Header from "../components/layout/Header/Header";
import _Detail from "../domains/detail/Detail";

const DetailPage = () => {
  return (
    <>
      <Header left="뒤로가기" right="없음" />
      <_Detail />
    </>
  );
};

export default DetailPage;

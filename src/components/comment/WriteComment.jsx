import styled from "@emotion/styled/macro";
import { useForm } from "../../hooks/useForm";
import { useWriteYoutuberComment } from "../../utils/api/Comment";
import toast from "react-hot-toast";

const WriteComment = ({ youtuber }) => {
  const { form, setForm, handleChange } = useForm({ content: "", title: "" });
  const { content, title } = form;
  const { mutate } = useWriteYoutuberComment(youtuber, form, setForm);
  const handleSubmitClick = () => {
    if (content === "") {
      toast.error("제목이 작성되지 않았습니다.");
    } else if (title === "") {
      toast.error("내용이 작성되지 않았습니다.");
    } else {
      mutate();
    }
  };

  return (
    <Wrapper>
      <div>
        <TitleInput
          name="title"
          onChange={handleChange}
          placeholder="제목을 입력해주세요."
          value={title}
        />
        <ContentTextArea
          name="content"
          onChange={handleChange}
          placeholder="나누고픈 의견을 작성해주세요."
          value={content}
        />
      </div>
      <SubmitButton onClick={handleSubmitClick}>의견 올리기</SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.gray_200};

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const TitleInput = styled.input`
  width: 250px;
  padding: 8px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.grayscale.gray_200};
  border-radius: 12px;
`;

const ContentTextArea = styled.textarea`
  height: 90px;
  border-radius: 12px;
  padding: 8px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.grayscale.gray_200};
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 28px;
  color: white;
  font-size: 12px;
  background: #ec5c30;
  border-radius: 12px;
`;

export default WriteComment;

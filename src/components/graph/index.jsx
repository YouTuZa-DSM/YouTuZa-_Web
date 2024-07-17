import styled from "@emotion/styled/macro";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Graph = ({ data }) => {
  const validData = data || {};

  const chartData = Object.keys(validData).map((key) => ({
    time: key,
    value: validData[key],
  }));

  return (
    <Container>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#EC5C30"
            dot={false}
            strokeWidth={2}
          />
          <XAxis dataKey="time" />
          <YAxis />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 161px;
  margin-top: 47px;
  display: flex;
  flex-direction: column;
`;

export default Graph;

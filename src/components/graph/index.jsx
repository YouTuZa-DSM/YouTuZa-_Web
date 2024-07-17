import styled from "@emotion/styled/macro";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { parseTimeFromISO } from "../../utils/functions/ParseTimeFromISO";

const Graph = ({ data }) => {
  const validData = data || {};

  const chartData = Object.keys(validData).map((key) => {
    return {
      time: parseTimeFromISO(key),
      value: validData[key],
    };
  });

  const values = chartData.map((d) => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

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
          <YAxis domain={[minValue - 50, maxValue + 50]} />
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

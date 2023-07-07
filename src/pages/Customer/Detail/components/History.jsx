// material
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Card, CardContent,CardHeader, Typography } from "@mui/material";
import PropTypes from "prop-types";

// utils
import { fDateTime } from "src/utils/formatTime";
import mockData from "src/utils/mock-data";

// ----------------------------------------------------------------------

const TITLES = [
  "1983, orders, $4220",
  "12 Invoices have been paid",
  "Order #37745 from September",
  "New order placed #XF-2356",
  "New order placed #XF-2346",
];

const MOCK_TIMELINES = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: TITLES[index],
  type: `order${index + 1}`,
  time: mockData.time(index),
}));

// ----------------------------------------------------------------------

const Item = ({ item, isLast }) => {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === "order1" && "primary") ||
            (type === "order2" && "success") ||
            (type === "order3" && "info") ||
            (type === "order4" && "warning") ||
            "error"
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool,
};

const History = () => {
  return (
    <Card
      sx={{
        "& .MuiTimelineItem-missingOppositeContent:before": {
          display: "none",
        },
      }}
    >
      <CardHeader title="Lịch sử" />
      <CardContent>
        <Timeline>
          {MOCK_TIMELINES.map((item, index) => (
            <Item key={item.title} item={item} isLast={index === MOCK_TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default History;

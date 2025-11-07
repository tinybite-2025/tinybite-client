import { EventItem } from "@/types/calendar";
import { StyleSheet, Text, View } from "react-native";

interface EventTagProps {
  eventItem: EventItem;
  eventIndex: number;
}

const EventTag = ({ eventItem, eventIndex }: EventTagProps) => {
  return (
    <View
      key={eventIndex}
      style={[styles.eventTag, { backgroundColor: eventItem.color }]}
    >
      <Text style={styles.eventText} numberOfLines={1}>
        {eventItem.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventTag: {
    flexDirection: "row",
    minWidth: "100%",
    // paddingVertical: 1,
    paddingHorizontal: 2,
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 3,
    height: 11,
  },
  eventText: {
    flexShrink: 0,
    overflow: "hidden",
    color: "#FFFFFF",
    fontSize: 8,
    lineHeight: 10.4,
  },
});

export default EventTag;

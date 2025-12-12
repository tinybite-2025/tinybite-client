import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LocationSearchResult = () => {
  const mockResultData = ["경기도 용인시 처인구 역삼동", "서울 강남구 역삼동"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`'역삼동' 검색 결과`}</Text>

      <View style={styles.resultContainer}>
        {mockResultData.map((value, index) => (
          <ResultItem key={index} text={value} />
        ))}
      </View>
    </View>
  );
};

interface ResultItemProps {
  text: string;
}

const ResultItem = ({ text }: ResultItemProps) => {
  return (
    <TouchableOpacity>
      <Text style={styles.resultText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 12 },
  title: {
    alignSelf: "stretch",
    color: "#888",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 20.25,
    marginBottom: 24,
  },

  resultContainer: { gap: 12, alignSelf: "stretch" },
  resultText: {
    alignSelf: "stretch",
    color: "#222",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 21.6,
  },
});

export default LocationSearchResult;

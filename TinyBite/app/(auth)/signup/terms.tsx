import PaginationIndecatorHeader from "@/components/PaginationIndecatorHeader";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import { SignupTerms } from "@/constants/terms";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const CHECKBOX_ON_IMAGE = require("../../../assets/images/checkbox/checkbox-on.png");
const CHECKBOX_OFF_IMAGE = require("../../../assets/images/checkbox/checkbox-off.png");

const initialChecks = {
  age: false,
  service: false,
  finance: false,
  collectingPrivacy: false,
  providingPrivacy: false,
  offer: false,
};
type CheckKeys = keyof typeof initialChecks;

export default function TermsScreen() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (rawNumber: string) => {
    setPhoneNumber(rawNumber);
    console.log("최종 추출된 번호 (하이픈 제외):", rawNumber);
  };

  const [checks, setChecks] = useState(initialChecks);
  const allChecked = useMemo(() => {
    return Object.values(checks).every((value) => value === true);
  }, [checks]);

  const toggleAll = () => {
    const nextState = !allChecked;
    const newChecks = Object.fromEntries(
      Object.keys(checks).map((key) => [key, nextState])
    ) as typeof initialChecks;
    setChecks(newChecks);
  };
  const toggle = (key: CheckKeys) =>
    setChecks({ ...checks, [key]: !checks[key] });

  const allRequiredChecked =
    checks.age &&
    checks.service &&
    checks.finance &&
    checks.collectingPrivacy &&
    checks.providingPrivacy;

  const isNextButtonEnabled = allRequiredChecked && phoneNumber.length === 11;

  // 전체 동의 항목을 렌더링하는 컴포넌트
  const AllCheckItem: React.FC = () => {
    return (
      <View>
        <TouchableOpacity style={styles.checkRow} onPress={toggleAll}>
          {/* 이미지 체크박스 */}
          <Image
            source={allChecked ? CHECKBOX_ON_IMAGE : CHECKBOX_OFF_IMAGE}
            style={styles.allCheckBoxImage}
          />
          <Text style={styles.allCheckText}>약관 전체 동의</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // 체크 항목을 렌더링하는 컴포넌트
  const CheckItem: React.FC<{
    checkKey: CheckKeys;
    required: boolean;
    content: string;
  }> = ({ checkKey, required, content }) => {
    const isChecked = checks[checkKey];
    return (
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => toggle(checkKey)}
        >
          <View style={styles.checkRow}>
            <Image
              source={isChecked ? CHECKBOX_ON_IMAGE : CHECKBOX_OFF_IMAGE}
              style={styles.checkBoxImage}
            />
            <Text style={styles.checkText}>
              <Text>{required ? "(필수)" : "(선택)"}</Text> {content}
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/chevron/chevron-right-24.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.inner}>
        {/* 헤더 */}
        <PaginationIndecatorHeader page={0} />

        {/* 전화번호 입력 */}
        <Text style={styles.title}>{`전화번호를 \n입력해 주세요.`}</Text>
        <View style={{ paddingBottom: 60 }}>
          <PhoneNumberInput onChangeText={handlePhoneNumberChange} />
        </View>

        {/* 약관 전체 동의 */}
        <View style={{ marginBottom: 20 }}>
          <AllCheckItem />
        </View>

        {/* 개별 약관 동의 */}
        <View style={{ gap: 12 }}>
          {SignupTerms.map((term) => (
            <CheckItem
              key={term.checkKey}
              checkKey={term.checkKey as CheckKeys}
              required={term.required}
              content={term.content}
            />
          ))}
        </View>
      </ScrollView>

      {/* 다음 버튼 */}
      <TouchableOpacity
        style={[styles.nextBtn, !isNextButtonEnabled && styles.disabled]}
        disabled={!isNextButtonEnabled}
        onPress={() => router.push("/signup/verify")}
      >
        <Text style={styles.nextText}>다음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FCFBFF" },
  inner: { paddingHorizontal: 20 },

  title: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32.4,
    marginBottom: 28,
    color: "#FE870F",
  },

  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  allCheckBoxImage: {
    width: 28,
    height: 28,
  },
  checkBoxImage: {
    width: 20,
    height: 20,
  },

  allCheckText: {
    fontSize: 20,
    fontWeight: 600,
    color: "#222",
    lineHeight: 27,
  },
  checkText: {
    fontSize: 16,
    fontWeight: 500,
    color: "#888",
    lineHeight: 21.6,
  },

  nextBtn: {
    marginHorizontal: 20,
    backgroundColor: "#FF7A00",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
  },
  nextText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24.3,
  },
  disabled: { opacity: 0.3 },
});

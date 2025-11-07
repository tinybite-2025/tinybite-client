import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    console.log('Selected:', option);
  };

  const handlePreviousPress = () => {
    // 온보딩1 화면으로 돌아가기
    router.back();
  };

  const handleNextPress = () => {
    if (selectedOption) {
      // 온보딩2 화면으로 이동
      router.push('/onboarding/onboarding3');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/onboarding/onboarding2.png')} 
      style={styles.image} resizeMode="contain"/>
      <Text style={styles.title}>관심 분야를 선택해 주세요</Text>
      <Text style={styles.description}>관심 분야에 맞게 목표 달성을 도와드려요</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '경영·경제' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('경영·경제')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '경영·경제' && styles.optionText
          ]}>경영 · 경제</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === 'IT' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('IT')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === 'IT' && styles.optionText
          ]}>IT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '인문·교육·심리' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('인문·교육·심리')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '인문·교육·심리' && styles.optionText
          ]}>인문 · 교육 · 심리</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '디자인·미술·미디어' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('디자인·미술·미디어')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '디자인·미술·미디어' && styles.optionText
          ]}>디자인 · 미술 · 미디어</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '자연과학·환경' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('자연과학·환경')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '자연과학·환경' && styles.optionText
          ]}>자연과학 · 환경</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '아직 관심 분야가 없어요' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('아직 관심 분야가 없어요')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '아직 관심 분야가 없어요' && styles.optionText
          ]}>아직 관심 분야가 없어요</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.previousButton} onPress={handlePreviousPress}>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.nextButton,
            selectedOption && styles.nextButtonActive
          ]} 
          onPress={handleNextPress}
          disabled={!selectedOption}
        >
          <Text style={[
            styles.buttonText,
            selectedOption && styles.nextButtonTextActive
          ]}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10121F',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Pretendard',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Pretendard',
    fontWeight: '400',
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 25.5,
  },
  image: {

    width: 80.28711,
    height: 10.0957,
    marginBottom: 17.89,
  },
  optionsContainer: {
    alignItems: 'center',
    width: '90%',
    maxWidth: 350,
    gap: 25,
  },
  optionButton: {
    width: 320,
    height: 56,
    backgroundColor: '#2A2C45',
    borderRadius: 15,
    padding:15,
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: '#FF008B',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80.38,
   
    gap: 10,
  },
  previousButton: {
    width: 110,
    height: 56,
    backgroundColor: '#3F4360',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    width: 230,
    height: 56,
    backgroundColor: '#3A3A3C',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  nextButtonActive: {
    backgroundColor: '#FF008B',
  },
  nextButtonTextActive: {
    color: 'white',
  },
});
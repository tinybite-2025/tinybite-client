import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    console.log('Selected:', option);
  };

  const handleNextPress = () => {
    if (selectedOption) {
      // 온보딩2 화면으로 이동
      router.push('/onboarding/onboarding2');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/onboarding/onboarding1.png')} 
      style={styles.image} resizeMode="contain"/>
      <Text style={styles.title}>현재 무슨 일을 하고 계신가요?</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '중고등학생' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('중고등학생')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '중고등학생' && styles.optionText
          ]}>중고등학생</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '대학생' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('대학생')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '대학생' && styles.optionText
          ]}>대학생</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '직장인' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('직장인')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '직장인' && styles.optionText
          ]}>직장인</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.optionButton, 
            selectedOption === '기타' && styles.selectedOption
          ]} 
          onPress={() => handleOptionSelect('기타')}
        >
          <Text style={[
            styles.optionText,
            selectedOption === '기타' && styles.optionText
          ]}>기타</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.previousButton}>
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
    marginBottom: 52,
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
    marginTop: 240.87,
   
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
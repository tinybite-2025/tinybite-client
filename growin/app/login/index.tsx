import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const handleKakaoLogin = () => {
    // 카카오 로그인 버튼을 누르면 온보딩 화면으로 이동
    router.replace('/onboarding');
  };

  const handleAppleLogin = () => {
    // 애플 로그인 버튼을 누르면 온보딩 화면으로 이동
    router.replace('/onboarding');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/images/login/growin_login_logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleKakaoLogin}>
          <Image 
            source={require('../../assets/images/login/kakao_login_button.png')} 
            style={styles.kakaoLoginIcon} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleAppleLogin}>
          <Image 
            source={require('../../assets/images/login/apple_login_button.png')} 
            style={styles.appleLoginIcon} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10121F',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 171.81,
    height: 286.1,
  },
  kakaoLoginIcon: {
    width: 350,
    height: 56,
    marginBottom: 10,
  },
  appleLoginIcon: {
    width: 350,
    height: 56,
    marginBottom: 30,
  },
});

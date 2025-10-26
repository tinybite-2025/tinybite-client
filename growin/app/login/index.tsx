import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
          <TouchableOpacity onPress={handleKakaoLogin} style={styles.kakaoLoginContainer}>
            <View style={styles.kakaoLoginContent}>
              <Image 
                source={require('../../assets/images/login/logo_kakao.png')}
                style={styles.kakaoLoginLogo}
                resizeMode="contain"
              />
              <Text style={styles.kakaoLoginText}>카카오로 시작하기</Text>
            </View>
          </TouchableOpacity>
        <TouchableOpacity onPress={handleAppleLogin} style={styles.appleLoginContainer}>
          <View style={styles.appleLoginContent}>
            <Image 
              source={require('../../assets/images/login/logo_apple.png')}
              style={styles.appleLoginLogo}
              resizeMode="contain"
            />
            <Text style={styles.appleLoginText}>Apple로 시작하기</Text>
          </View>
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
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 171.81,
    height: 286.1,
  },
  kakaoLoginContainer: {
    width: 350,
    height: 56,
    backgroundColor: '#FEE500',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  kakaoLoginContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kakaoLoginLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  kakaoLoginText: {
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    color: 'black',
  },
  appleLoginContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleLoginLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  appleLoginContainer: {
    width: 350,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleLoginText: {
    fontSize: 18,
    lineHeight: 23.4,
    fontFamily: 'Pretendard',
    fontWeight: '600',
    color: 'black',
  },
});

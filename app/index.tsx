import 'react-native-reanimated';
import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { useGlobalContext } from '@/context/GlobalProvider';



export default function App() {

  const continuWithEmail = () => {
    router.push('/signin')
  }

  const { isLoading, isLogged } = useGlobalContext();
  if (!isLoading && isLogged) return <Redirect href={"/home"} />

  return (
    <>


      <SafeAreaView className='bg-primary h-full '>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className='w-full  items-center h-full '>
            <Image
              source={require('../assets/images/logo.png')}
              className='w-[130px] h-[84px]'
              resizeMode='contain'
            />

            <Image
              source={require('../assets/images/cards.png')}
              className='max-w-[380px] w-full h-[300px]'
              resizeMode='contain'
            />


            <View className='relative mt-5'>
              <Text className='text-3xl text-white font-bold text-center'>
                Discover Limitless Posibilities with {" "}

                <Text className='text-secondary-200'>
                  Aura
                </Text>
              </Text>

              <Image
                source={require('../assets/images/path.png')}
                className="w-[100px] h-14 absolute  -bottom-7 -right-5 "
                resizeMode="contain"
              />
            </View>
            <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
              Where creativity meets innvations
            </Text>


            <CustomButton
              title="Continue with Email"
              handlePress={continuWithEmail}
              containerStyles="w-full mt-7 "

            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
      </SafeAreaView>

    </>
  );
}

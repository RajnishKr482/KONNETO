import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import Tabbar from './src/screen/BottomTabbarScreen/Tabbar';
import {FAB, Portal, Provider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'flex-end',
        backgroundColor: '#ff8704',
      }}>
      <View style={{position: 'absolute', bottom: 0}}>
        <Tabbar />
      </View>

      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            color="#ff9e02"
            theme={{colors: {accent: 'blue'}}}
            style={{
              marginBottom: 65,
            }}
            actions={[
              {
                icon: 'note',
                color: '#ff9e02',
                label: 'Add Lead',
                onPress: () => console.log('Pressed add'),
              },
              {
                icon: 'upload',
                color: '#ff9e02',
                backgroundColor: '#ff9e02',
                label: 'Upload Leads',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'calendar',
                label: 'Attendence',
                color: '#ff9e02',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                color: '#ff9e02',
                onPress: () => console.log('Pressed notifications'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
      <View
        style={{
          height: 50,
          width: 50,
          position: 'absolute',
          bottom: 85,
          left: 15,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff9e02',
          borderRadius: 100,
        }}>
        <FontAwesome5 name="plus" color="white" size={25} />
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {},
});

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import * as shape from 'd3-shape';
import StaticTabbar from './StaticTabbar';
const {width} = Dimensions.get('window');
const height = 64;
// const Path = Svg;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const tabs = [
  {
    name: 'home',
    image: require('../../assets/png/home-solid.jpg'),
  },
  {
    name: 'phone',
    image: require('../../assets/png/users-solid.jpg'),
  },
  {
    name: 'camera',
    image: require('../../assets/png/users-solid.jpg'),
  },
  {
    name: 'file',
    image: require('../../assets/png/file-alt-solid.jpg'),
  },
  {
    name: 'settings',
    image: require('../../assets/png/cog-solid.jpg'),
  },
];

const tabWidth = width / tabs.length;

const getPath = () => {
  const left = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
  const tab = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 5, y: 0},
    {x: width + 10, y: 10},
    {x: width + 18, y: height - 25},
    {x: width + tabWidth - 18, y: height - 25},
    {x: width + tabWidth - 10, y: 0},
    {x: width + tabWidth, y: 0},
    {x: width + tabWidth, y: 0},
  ]);
  const right = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
  ]);
  return `${left} ${tab} ${right}`;
};
const d = getPath();
const backgroundColor = 'white';

const Tabbar = () => {
  const value = new Animated.Value(0);
  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  return (
    <View {...{height, width}}>
      <AnimatedSvg
        width={width * 2}
        {...{height}}
        style={{transform: [{translateX}]}}>
        <Path fill={backgroundColor} {...{d}} />
      </AnimatedSvg>
      <View style={StyleSheet.absoluteFill}>
        <StaticTabbar {...{tabs, value}} />
      </View>
    </View>
  );
};

export default Tabbar;
const styles = StyleSheet.create({
  container: {
    backgroundColor,
  },
});

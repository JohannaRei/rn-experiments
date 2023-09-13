import React, {useRef} from 'react';
import {TextBody, ButtonDefault, Container} from '../components';
import {useWindowDimensions, View} from 'react-native';
import useStore from '../state/store';
import {
  Canvas,
  Circle,
  Group,
  ImageSVG,
  useSVG,
  Mask,
  fitbox,
  rect,
  Path,
  Skia,
  vec,
  Points,
  useComputedValue,
  AnimatedProp,
  PathDef,
  useValue,
  useClockValue,
} from '@shopify/react-native-skia';
import Animated, {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

const triangle = () => {
  const triangle = Skia.Path.Make();
  triangle.moveTo(32.5, 10);
  triangle.lineTo(50, 50);
  triangle.quadTo(52.5, 55, 50, 55);
  triangle.quadTo(30, 47.5, 10, 55);
  triangle.quadTo(7.5, 55, 10, 50);
  triangle.lineTo(27.5, 10);
  triangle.quadTo(30, 5, 32.5, 10);
  return triangle;
};

const SunRay = ({
  path,
  degrees = 0,
}: {
  path: AnimatedProp<PathDef, any>;
  degrees: number;
}) => {
  return (
    <Group
      transform={[{rotate: degreesToRadians(degrees)}, {translateX: 90}]}
      origin={{x: 120, y: 120}}>
      <Path path={path} color="yellow" />
    </Group>
  );
};

const interval = 3000;

function HomeView() {
  const {toggleDarkMode} = useStore();

  const {width, height} = useWindowDimensions();

  const [open, setOpen] = React.useState(false);
  const [animStart, setAnimStart] = React.useState(0);

  const canvasRef = useRef(null);

  const sunSize = 240;
  const pos = useSharedValue(120);

  const radius = useSharedValue(55);

  const clock = useClockValue();

  const handlePress = () => {
    console.log('HALOO');
    pos.value = withTiming(open ? 120 : 240);
    radius.value = withTiming(open ? 55 : 110);
    setAnimStart(clock.current);
    setOpen(prev => !prev);
  };

  const sunRay = useComputedValue(() => {
    console.log('clock', clock.current);
    const p = triangle();
    const rs = open ? 1 + (clock.current - animStart) * 0.001 : 1;

    const m = Skia.Matrix().scale(rs, rs);
    p.transform(m);

    return p;
  }, [clock, open]);

  return (
    <Container>
      <TextBody>Lorem ipsum</TextBody>
      <ButtonDefault onPress={handlePress}>
        Press to toggle dark mode
      </ButtonDefault>
      <View style={{height: 20}} />
      <Canvas style={{flex: 1, backgroundColor: 'red'}} ref={canvasRef}>
        <Group>
          {/*<Circle cx={pos} cy={pos} r={radius} color="yellow" />*/}
          <SunRay path={sunRay} degrees={0} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(degrees => (
            <SunRay key={`sunRay_${degrees}`} path={sunRay} degrees={degrees} />
          ))}
        </Group>
      </Canvas>
    </Container>
  );
}

export default HomeView;

import {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';

type IconsProps = PropsWithChildren<{
  name: string;
  size: number;
}>;
const Icons = ({name, size}: IconsProps) => {
  switch (name) {
    case 'camera':
      return <Icon name={'camera'} size={size} />;

    case 'home':
      return <Icon name={'home'} size={size} />;

    case 'homeA':
      return <Icon name={'home'} size={size} style={{color: '#0c4ae5'}} />;

    case 'post':
      return <Icon name={'plus-square'} size={size} />;

    case 'postA':
      return (
        <Icon name={'plus-square'} size={size} style={{color: '#0c4ae5'}} />
      );

    case 'profile':
      return <Icon name={'user-alt'} size={size} />;

    case 'profileA':
      return <Icon name={'user-alt'} size={size} style={{color: '#0c4ae5'}} />;

    case 'share':
      return <Icon name={'share'} size={size} style={{color: '#737885'}} />;

    case 'comment':
      return (
        <Icon name={'comment-dots'} size={size} style={{color: '#737885'}} />
      );

    case 'like':
      return <IconAnt name={'like2'} size={size} style={{color: '#737885'}} />;

    case 'message':
      return (
        <IconAnt name={'message1'} size={size} style={{color: '#737885'}} />
      );

    case 'close':
      return <IconAnt name={'close'} size={size} style={{color: '#737885'}} />;

    case 'back':
      return <Icon name={'chevron-left'} size={size} />;

    case 'bell':
      return <Icon name={'bell'} size={size} solid />;

    case 'calendar':
      return <Icon name={'calendar-times'} size={size} solid />;

    case 'search':
      return (
        <Icon name={'search'} size={size} solid style={{color: '#737885'}} />
      );

    case 'next':
      return (
        <Icon name={'chevron-right'} size={size} style={{color: '#737885'}} />
      );

    case 'microphone':
      return (
        <Icon
          name={'microphone'}
          size={size}
          solid
          style={{color: '#FFFFFF'}}
        />
      );

    case 'phone':
      return (
        <Icon name={'phone-alt'} size={size} solid style={{color: '#FFFFFF'}} />
      );

    case 'video':
      return (
        <Icon name={'video'} size={size} solid style={{color: '#FFFFFF'}} />
      );

    default:
      break;
  }
};
export default Icons;

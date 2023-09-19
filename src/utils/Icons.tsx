import {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

type IconsProps = PropsWithChildren<{
  name: string;
  size: number;
}>;
const Icons = ({name, size}: IconsProps) => {
  switch (name) {
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

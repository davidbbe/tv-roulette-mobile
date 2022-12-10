import { StyleSheet } from 'react-native';
import { Header as HeaderRNE } from '@rneui/themed';

const Header = () => {
  return (
    <HeaderRNE
      centerComponent={{ text: 'Netflix Roulette', style: styles.heading }}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  }
});

export default Header;

import React from 'react';
import { string, func, bool } from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
}) => (
  <TouchableHighlight underlayColor={styles.$underlayColor} onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: string,
  onPress: func,
  selected: bool,
  checkmark: bool,
  visible: bool,
};

export default ListItem;

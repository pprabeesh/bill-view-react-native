import React from 'react';
import {ListItem, Avatar, Tooltip, Text, Badge} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {STATUS_KEYS, STATUS} from './const';

export default function Bill({item, onKeyPress}) {
  const itemStatus = STATUS[STATUS_KEYS[item.id % 4]];
  return (
    <ListItem
      bottomDivider={true}
      containerStyle={styles.item}
      onPress={() => onKeyPress(item)}
      underlayColor="#e6e7e9"
      pad={20}>
      <Avatar
        source={{
          uri: item.thumbnailUrl,
        }}
        size="large"
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text h4>${(item.title.length * 2.25).toFixed(2)}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Tooltip
            withOverlay={false}
            width={150}
            height={150}
            containerStyle={styles.popoverContainer}
            pointerColor={'#ffe4c4'}
            popover={<Text>{itemStatus.helpText}</Text>}>
            <Badge
              containerStyle={styles.badge}
              status={itemStatus?.status}
              textStyle={styles.badgeText}
              value={itemStatus?.label}
            />
          </Tooltip>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Title>
        <Text>
          {new Intl.DateTimeFormat('en-AU', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).format(new Date())}
        </Text>
      </ListItem.Title>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  item: {
    minHeight: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  popoverContainer: {
    backgroundColor: '#ffe4c4',
  },
  badge: {
    marginTop: 15,
  },
  badgeText: {
    padding: 2,
    fontSize: 10,
  },
});

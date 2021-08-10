import React, {useState, useEffect} from 'react';
import {API_URL, LIMIT} from './const';
import {FlatList, StyleSheet, Dimensions, View} from 'react-native';
import {Overlay, Image} from 'react-native-elements';
import Bill from './Bill';

const {height, width} = Dimensions.get('window');

export default function BillList() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedId, setId] = useState('');

  const toggleOverlay = ({id}) => {
    setId(id);
    setVisible(!visible);
  };

  const fetchData = async endData => {
    const resp = await fetch(
      `${API_URL}?_start=${
        !endData?.distanceFromEnd ? 0 : data.length
      }&_limit=${LIMIT}`,
    );
    const responseData = await resp.json();
    setData([...data, ...responseData]);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data && (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Bill item={item} onKeyPress={toggleOverlay} />
            )}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchData}
            onEndReachedThreshold={0}
            refreshing={true}
          />
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Image
              source={{uri: data?.find(({id}) => id === selectedId)?.url}}
              style={styles.image}
            />
          </Overlay>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#e6e7e9',
  },
  image: {
    width: 400,
    height: 500,
  },
});

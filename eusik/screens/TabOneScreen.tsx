import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [multiple, setMultiple] = useState(1);
  const [total, setTotal] = useState(1);
  const [rice, setRice] = useState(1);
  const [water, setWater] = useState(1);

  const cal = (_multiple: number, _total:number) => {
    console.log(_total);
    if (_total > 1) {
      let _rice = Math.round(_total / (_multiple + 1));
      setRice(_rice);
      setWater(_total - _rice);
    }
  }

  const renderGrid = () => {
    var eusikGrid = [];

    for(let i = 1; i <= 10; i++){
      eusikGrid.push(
        <View key = {i}>
          <View>
            <Text>쌀 : {i*rice}</Text>
            <Text>물 : {i*water}</Text>
          </View>
        </View>
      )
    }
    return eusikGrid;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이유식 계산</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.multipleLabel}>배죽 선택</Text>
        <TextInput style={styles.multipleInput} value={multiple.toString()} keyboardType='numeric' onChangeText={(val) => {
          setMultiple(Number(val)),
          cal(Number(val), total)
        }}/>

        <View style={{marginRight: 20}}/>
        <Text style={styles.multipleLabel}>한끼 총 용량(g)</Text>
        <TextInput style={styles.multipleInput} value={total.toString()} keyboardType='numeric' onChangeText={(val) => {
          setTotal(Number(val)),
          cal(multiple, Number(val))
        }}/>
      </View>

      {total > 1 &&
        <>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'black'}}>
              <Text style={{width:30, fontSize: 20, color: 'white', marginLeft: '5%', marginRight: '30%'}}>1</Text>
              <Text style={{fontSize: 20, color: 'white'}}>쌀 : {1*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'white'}}>물 : {1*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'white'}}>
              <Text style={{width:30, fontSize: 20, color: 'black', marginLeft: '5%', marginRight: '30%'}}>2</Text>
              <Text style={{fontSize: 20, color: 'black'}}>쌀 : {2*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'black'}}>물 : {2*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'black'}}>
              <Text style={{width:30, fontSize: 20, color: 'white', marginLeft: '5%', marginRight: '30%'}}>3</Text>
              <Text style={{fontSize: 20, color: 'white'}}>쌀 : {3*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'white'}}>물 : {3*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'white'}}>
              <Text style={{width:30, fontSize: 20, color: 'black', marginLeft: '5%', marginRight: '30%'}}>4</Text>
              <Text style={{fontSize: 20, color: 'black'}}>쌀 : {4*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'black'}}>물 : {4*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'black'}}>
              <Text style={{width:30, fontSize: 20, color: 'white', marginLeft: '5%', marginRight: '30%'}}>5</Text>
              <Text style={{fontSize: 20, color: 'white'}}>쌀 : {5*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'white'}}>물 : {5*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'white'}}>
              <Text style={{width:30, fontSize: 20, color: 'black', marginLeft: '5%', marginRight: '30%'}}>6</Text>
              <Text style={{fontSize: 20, color: 'black'}}>쌀 : {6*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'black'}}>물 : {6*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'black'}}>
              <Text style={{width:30, fontSize: 20, color: 'white', marginLeft: '5%', marginRight: '30%'}}>7</Text>
              <Text style={{fontSize: 20, color: 'white'}}>쌀 : {7*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'white'}}>물 : {7*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'white'}}>
              <Text style={{width:30, fontSize: 20, color: 'black', marginLeft: '5%', marginRight: '30%'}}>8</Text>
              <Text style={{fontSize: 20, color: 'black'}}>쌀 : {8*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'black'}}>물 : {8*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'black'}}>
              <Text style={{width:30, fontSize: 20, color: 'white', marginLeft: '5%', marginRight: '30%'}}>9</Text>
              <Text style={{fontSize: 20, color: 'white'}}>쌀 : {9*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'white'}}>물 : {9*water}g</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0}}>
            <View style={{width: '80%', flexDirection: 'row', backgroundColor: 'white'}}>
              <Text style={{width:30, fontSize: 20, color: 'black', marginLeft: '5%', marginRight: '30%'}}>10</Text>
              <Text style={{fontSize: 20, color: 'black'}}>쌀 : {10*rice}g  /  </Text>
              <Text style={{fontSize: 20, color: 'black'}}>물 : {10*water}g</Text>
            </View>
          </View>
        </>
        
      }      
    </View>
  );
}

const styles = StyleSheet.create({
  multipleLabel: {
    textAlignVertical: 'center',
    marginRight: 10
  },
  multipleInput: {
    width: 50,
    height: 30,
    backgroundColor: '#fbd7fc',
    textAlign: 'center',
    borderRadius: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

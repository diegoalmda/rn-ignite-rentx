import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

export function Home() {
    const carDataOne = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'Ao DIA',
            price: 120
        },
        thumbnail: 'https://www.downloadclipart.net/large/audi-rs5-red-png.png'
    }

    // const carDataTwo = {
    //     brand: 'Porsche',
    //     name: 'Panamera',
    //     rent: {
    //         period: 'Ao DIA',
    //         price: 340
    //     },
    //     thumbnail: 'https://www.pngplay.com/wp-content/uploads/13/Porsche-Panamera-Transparent-File.png'
    // }
  return (
    <Container>
        <StatusBar 
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
        />
        <Header>
            <HeaderContent>
                <Logo 
                    width={RFValue(108)}
                    height={RFValue(12)}
                />   
                <TotalCars>
                    Total de 12 carros    
                </TotalCars>      
            </HeaderContent>
        </Header>

        <CarList
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => <Car data={carDataOne} />}
        />                

    </Container>
  );
}
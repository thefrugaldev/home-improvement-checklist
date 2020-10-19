import React from 'react';
import { Text } from 'react-native';
import Layout from '../components/layout';

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <Text>
        Welcome to your one stop shop for maintaining and improving your new or
        existing home!
      </Text>
    </Layout>
  );
};

export default HomeScreen;

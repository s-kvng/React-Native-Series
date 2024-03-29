import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import BlogCard from './components/BlogCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
     <ScrollView>
        <FlatCard />
        <ElevatedCards/>
        <FancyCard/>
        <ContactList/>
        <BlogCard/>
     </ScrollView>
    </SafeAreaView>
  )
}

export default App
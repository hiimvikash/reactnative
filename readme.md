# Components in React Native

- `<Text>....</Text>`
- `<View>....</View>`
    - like a `div`, added functionality specific to mobile apps.
    - often used to create layout structure for other components.
    - accepts number of props that can be used to create it's apearance.
    - uses `flexbox` layout by default and has all the property of flexbox.
- Interactive elements in your app.
    - `Buttons`, `Links`
- Other Interactive elements in your app.
    - <TouchableOpacity> like button.
    - <TouchableHighlight> like button, onPress it changes color.
    - <TouchableWithoutFeedback> like a plan button used for links and images.
    - <ActionIndicator/> like a spinner.
    - `<Button onPress = {} title= "clickme" />`
    - `<Flatlist/>` like a map function.
        ```javascript
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        ```
    - When to use `<Flatlist/>` and when `map` function ?
        - large list + smooth scrolling then `<Flatlist/>`.
        - smaller list then `map` function.
    - `<ScrollView>` is like a magic box that can hold multiple components and view, providing a scrolling container for them.
    - `<SafeView/>` for safe viewport for every device.
    - `react-native-safe-area-context`
    - `<Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />`
    - `<ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>`
    - [`<Modal/>`](https://reactnative.dev/docs/modal)
    - `Alert.alert("Alert Title", "My alert message", [{text : '', onPress : ()=>{}}, {text : '', onPress : ()=>{}}])`
    - `<Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />` it's like a toggle button.
    - `<StatusBar>` - Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.
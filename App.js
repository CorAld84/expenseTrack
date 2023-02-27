import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { GlobalStyles } from './constans/styles';

import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import IconButton from './component/UI/IconButton';
import ExpensesContextProvider from './store/expensesCtx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const colors = GlobalStyles.colors

function ExpensesOverview() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.primary500,
          shadowColor: colors.primary500,
          borderTopWidth: 0,
        },
        headerTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.primary500,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          position: 'absolute',
          borderTopWidth: 0.5,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderTopColor: 'black',
          borderColor: 'black',
        },
        tabBarActiveTintColor: colors.accent500,
        headerRight: ({ size, tintColor }) => (<IconButton
          name='add-circle-outline'
          size={25}
          color={tintColor}
          onPress={() => navigation.navigate('ManageExpenses')}
        />
        )
      })
      }
    >
      <Tab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name='ios-hourglass-outline' size={size} color={color} />
        }}
      />
      <Tab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <Ionicons name='ios-wallet-outline' size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='ExpenseOverview'
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: colors.primary500 },
              headerTintColor: colors.white
            }}
          >
            <Stack.Screen
              name='ExpenseOverview'
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ManageExpenses'
              component={ManageExpenses}
              options={{
                title: 'Manage Expense',
                presentation: 'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}


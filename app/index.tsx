import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Link } from 'expo-router';

import * as Yup from "yup";
import { Formik } from "formik";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be min of 4 characters")
    .max(16, "Should be max of 16 characters")
    .required("Length is required"),
});

export default function App() {
  
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword("");
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (

    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={PasswordSchema}
            onSubmit={(values) => {
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder="Ex. 8"
                    keyboardType="default"                                 
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"      
                  />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                  </View>
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid} // Make sure isValid is initialized
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()} // Ensure handleSubmit is called as a function
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.linkContainer}>
                    <Link href="/About">
                    <Text style={styles.linkText}>About</Text>
                    </Link>
                  </TouchableOpacity>
                  
                </View>
              </>
            )}
          </Formik>
          
        </View>
        {isPassGenerated && (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        )}

      
        
      </SafeAreaView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {

  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
    backgroundColor:"blueviolet",
    color:"white",
    padding:40,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2,
  },
  description: {
    color: "#758283",
    marginBottom: 8,
  },
  heading: {
    fontSize: 17,
    padding:10,
    marginRight:20
  },
  inputWrapper: {
    marginBottom: 15,
    marginRight:10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputColumn: {
    flexDirection: "column",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e",
  },
  errorText: {
    fontSize: 12,
    fontWeight:"400",
    padding:10,
    color: "#ff0d10",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#26ae60",
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#586776",

  },
  secondaryBtnTxt: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color:"white",
    marginTop:5,
    fontWeight: "700",
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical:10
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
  linkContainer:{
    width: 100,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: "#74B9FF",
   },
   linkText:{
    flex:1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    textAlign: "center",
    marginLeft:20,
    color:"white",
    fontSize:18,
    fontWeight: "700",
   }
});

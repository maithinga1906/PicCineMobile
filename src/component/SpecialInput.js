/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';


import {
  validateEmail,
  validatePhone,
  validateName,
  validateEmpty,
} from '../utils/functions';
import Color from '../themes/colors';

export default class SpecialInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || '',
      isSecure: props.secureTextEntry || false,
      borderColor: Color.darkGray,
      isValidate: true,
    };
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  isFocused() {
    return this.input.isFocused();
  }

  getText() {
    return this.state.isValidate ? this.input._lastNativeText : null;
  }

  onFocus() {
    const { onFocus } = this.props;
    this.setState({
      borderColor: Color.primary,
    });
    onFocus && onFocus();
  }

  onBlur = () => {
    const { onBlur, validateType } = this.props;
    onBlur && onBlur();

    const isValidate = validateField(validateType, this.input._lastNativeText);
    this.setState({ isValidate, borderColor: Color.darkGray });
  };

  onChangeSecureState = () => {
    this.setState((previousState) => ({
      isSecure: !previousState.isSecure,
    }));
  };

  renderTextInput() {
    const { isSecure } = this.state;
    return (
      <View style={styles.containerInputStyle}>
        {this.renderInput()}
        {this.props.secureTextEntry && (
          <TouchableWithoutFeedback onPress={this.onChangeSecureState}>
            <View style={styles.iconSecure}>
              {/* <Icons
                name={isSecure ? 'ic-hide-password' : 'ic-show-password'}
                color={Color.black}
                size={25}
              /> */}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }

  renderInput() {
    const {
      textInputStyle,
      onChangeText,
      secureTextEntry,
      validateType,
      multiline,
    } = this.props;

    const { isSecure, borderColor } = this.state;
    return (
      <TextInput
        {...this.props}
        ref={(ref) => {
          this.input = ref;
        }}
        style={[
          styles.textInput,
          {
            borderColor: borderColor,
            paddingRight: secureTextEntry ? 40 : 12,
          },
          multiline && styles.multilineStyle,
          textInputStyle,
        ]}
        onChangeText={(text) => {
          const isValidate = validateField(validateType, text);
          this.setState({ isValidate });
        }}
        value={this.state.value}
        spellCheck={false}
        autoCapitalize="none"
        autoCorrect={true}
        underlineColorAndroid="transparent"
        keyboardAppearance="dark"
        selectTextOnFocus
        onChange={(event) => {
          this.setState({ value: event.nativeEvent.text });
          onChangeText && onChangeText(event.nativeEvent.text);
        }}
        secureTextEntry={isSecure}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
      />
    );
  }

  render() {
    const { isValidate } = this.state;
    const { containerStyle, errorMessage, isRequired } = this.props;

    const error =
      this.input && this.input._lastNativeText && isRequired
        ? errorMessage
        : 'Không thể để trống';

    return (
      <View style={containerStyle}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 16,
            fontFamily: 'SVN-ProximaNova',
          }}
        >
          {this.props.title}
        </Text>
        {this.renderTextInput()}
        {!isValidate && <Text style={{ color: 'red' }}>{error}</Text>}
      </View>
    );
  }
}

SpecialInput.propTypes = {
  containerStyle: PropTypes.any,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  textInputStyle: PropTypes.any,
  validateType: PropTypes.string,
};

SpecialInput.defaultProps = {
  containerStyle: { marginVertical: 8 },
  isRequired: true,
  textInputStyle: {},
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    height: 48,
    paddingVertical: 8,
    paddingLeft: 16,
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
  },
  iconSecure: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  multilineStyle: {
    height: 120,
    borderRadius: 0,
    paddingLeft: 10,
  },
  txtError: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  containerInputStyle: {
    flexDirection: 'row',
  },
});

const validateField = (validateType, input) => {
  switch (validateType) {
    case 'email':
      return validateEmail(input);
    case 'password':
      return input && input.length >= 6;
    case 'phone':
      return validatePhone(input);
    case 'username':
      return validateName(input);
    case 'empty':
      return validateEmpty(input);
    default:
      return true;
  }
};

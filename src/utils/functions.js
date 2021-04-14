import _ from 'lodash';
import React from 'react';
import Icons from '../themes/icons';
import { Image } from 'react-native';
export const convertDataToSection = (data, NAME) => {
  const arr = [];
  _.map(data, (value, key) => {
    if (NAME[key] && value.length > 0) {
      value = value.filter((item) => {
        return item.IsDeleted === false;
      });
      arr.push({ title: NAME[key], key: key, data: [{ data: value }] });
    }
  });

  return arr;
};

export const countStars = (starsRating, styleChecked, styleUnChecked) => {
  let star = [];
  for (var i = 0; i < 5; i++) {
    if (i < starsRating) {
      star[i] = <Image source={Icons.star1} />;
    } else {
      star[i] = <Image source={Icons.star2} />;
    }
  }
  return star;
};

export const validateEmpty = (field) => {
  return field !== '';
};
export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
export const validatePhone = (phone) => {
  const regex = /((09|03|07|08|05)+([0-9]{8})\b)$/;
  return regex.test(phone);
};
export const validateName = (name) => {
  const regex = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
  return regex.test(name);
};

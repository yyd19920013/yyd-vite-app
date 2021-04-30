import Decimal from 'yyd-decimal';
import {
  dateFormat0,
  dateFormat1,
  secondFormat0,
  getWeekName,
  getAge,
  toFixed0,
} from 'js/utils.js';

const date = (value: string, format?: string): string => {
  if (!value && value !== '0') return '';
  return dateFormat0(value, format);
};

const date1 = (value: string) => {
  if (!value && value !== '0') return;
  return dateFormat1(value);
};

const date2 = (value: string) => {
  if (!value && value !== '0') return;
  const reg = /\-+/g;

  value = value.replace(reg, '/');

  const iDay = (+new Date() - +new Date(value)) / (1000 * 60 * 60 * 24);
  return Math.round(iDay) || 1;
};

const date3 = (value: string) => {
  if (!value && value !== '0') return;
  const reg = /\-+/g;

  value = value.replace(reg, '/');

  const iDay = (+new Date(value) - +new Date()) / (1000 * 60 * 60 * 24);
  return iDay > 0 ? Math.ceil(iDay) : 0;
};

const week = (value: string) => {
  if (!value && value !== '0') return;

  return getWeekName(value);
};

const fSecond = (value: string, fmt: string, adjustFmt: boolean) => {
  if (!value && value !== '0') return;

  return secondFormat0(value, fmt, adjustFmt);
};

const age = (value: string) => {
  if (!value && value !== '0') return;

  return getAge(value);
};

const toFixed = (value: string, length = 2) => {
  if (!value && value !== '0') return;
  return new Decimal(value).toFixed(length, 1);
};

export {
  date, // 时间过滤器
  date1, // 时间过滤器1
  date2, // 时间过滤器2
  date3, // 时间过滤器3
  week, // 星期过滤器
  fSecond, // 秒过滤器
  age, // 根据出生日期算年龄
  toFixed, // 小数点保留位数过滤器
};

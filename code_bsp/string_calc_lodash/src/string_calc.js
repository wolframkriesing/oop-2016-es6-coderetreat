"use strict";

var _ = require('lodash');

export const stringCalc = (str) => _(str.split(',')).map(Number).filter(_.curry(_.gt)(1000)).sum();

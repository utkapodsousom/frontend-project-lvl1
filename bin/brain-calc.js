#!/usr/bin/env node
import greetUser from '../src/cli.js';
import calculate from '../src/calc.js';

const userName = greetUser();
calculate(userName);

#!/usr/bin/env node
import greetUser from '../src/cli.js';
import greatestCommonDivisor from '../src/gcd.js';

const userName = greetUser();
greatestCommonDivisor(userName);

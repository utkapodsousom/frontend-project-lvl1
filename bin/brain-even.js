#!/usr/bin/env node
import checkIfEven from '../src/even.js';
import greetUser from '../src/cli.js';

const userName = greetUser();
checkIfEven(userName);

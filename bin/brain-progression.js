#!/usr/bin/env node
import greetUser from '../src/cli.js';
import arprog from '../src/arprog.js';

const userName = greetUser();
arprog(userName);

#!/usr/bin/env node
import greetUser from '../src/cli.js';
import prime from '../src/prime.js';

const userName = greetUser();
prime(userName);

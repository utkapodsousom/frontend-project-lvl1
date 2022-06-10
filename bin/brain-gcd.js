#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import gcd from '../src/gcd.js';

const userName = greetUser();
gcd(userName);

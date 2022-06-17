#!/usr/bin/env node
import greetUser from '../src/cli.js';
import progression from '../src/progression.js';

const userName = greetUser();
progression(userName);

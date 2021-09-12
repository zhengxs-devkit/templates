#!/usr/bin/env node

// @ts-check
const path = require('path')
const { run } = require('@zhengxs-devkit/build')

run({ cwd: path.dirname(__dirname) }).catch(console.error)

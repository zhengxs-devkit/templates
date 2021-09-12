#!/usr/bin/env node

const path = require('path')
const { run } = require('@zhengxs-devkit/build')

run({ cwd: path.dirname(__dirname) }).catch(console.error)

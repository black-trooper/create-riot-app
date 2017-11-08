#!/usr/bin/env node

const yargs = require('yargs')
const chalk = require('chalk')
const package_json = require('./package.json')

yargs
   .usage('\n  Usage: \n'
      + `    create-riot-app ${chalk.green('<project name>')}`)
   .options({
      'v': {
         alias: 'version',
         describe: '    ........ output the version number'
      },
      'h': {
         alias: 'help',
         describe: '    ........ show help'
      },
      's': {
         alias: 'simple',
         describe: '    ........ create simple riotjs environment'
      },
      't': {
         alias: 'with-test',
         describe: '    ........ create riotjs environment with test'
      }
   })
   .locale('en')

const argv = yargs.argv

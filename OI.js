#!/usr/bin/env node

const os = require('os');

// OS type
console.log(`Os type: ${os.type()}`)

// CPU Arch
console.log(`CPU Arch: ${os.arch()}`)


 //CPU Core Infos
console.log(`CPU Core Infos:`)
console.log(os.cpus())

 //Free Memory
console.log(`Free Memory: ${os.freemem()}`)

 //All Memory
console.log(`All Memory: ${os.totalmem()}`)

 //Time of PowerOn System
 console.log(`Time of PowerOn System: ${os.uptime()}`)

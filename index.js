const CoinHive = require('coin-hive');
 
(async () => {
 
  // Create miner
  const miner = await CoinHive('8qrqm5njfnGgJadpDbRQojeQa1KHiaih'); // CoinHive's Site Key
 
  // Start miner
  await miner.start();
 
  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
 
  // Stop miner
  //setTimeout(async () => await miner.stop(), 60000);
})();
# Company Share tokenisation

A private company or a small team can convert its shares into token supply and distribute tokens amongst its stakeholders.

## Development set up requirements
```
npm ci
npm run tests
```

## Deploy the token in development blockchain network
```
npx hardhat run scripts/deploy.js --network hardhat
```

## Deploy the token in Polygon Mainnet blockchain network
First set the private key in the {url} parameter in the [config](./hardhat.config.js).

Then run:
```
npx hardhat run scripts/deploy.js --network polygon
```

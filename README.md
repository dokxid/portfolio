# portfolio website

this repository contains the source code for my artist portfolio, which is based on: 
- [Vue.js](https://vuejs.org/) 
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [cables.gl](https://cables.gl/)
- [TroisJS](https://github.com/troisjs/trois) (wrapper for [three.js](https://threejs.org/))

the portfolio is currently hosted on the [firebase](https://dokxid-pf.web.app/) hosting services. 

## set it up
### to test locally
run following commands to set it up:
```bash
git clone https://github.com/0x22B59C/portfolio.git
git switch staging
yarn install
npm run
```
to test / emulate the firebase services (please refer to the [firebase local emulator suite documentation](https://firebase.google.com/docs/emulator-suite)):
```bash
# make sure u have firebase cli before doing that
firebase emulators:start 
```
# run from parent directory, e.g. if project will be ~/src/ble-demo-app, run this from ~/src
set -v

brew install ant
brew install node

npm install -g npm
npm install -g grunt-cli
npm install -g bower
npm install -g yo
npm install -g ionic
npm install -g generator-ionic
npm install -g cordova

ionic start bleblaster blank
cd ble-demo-app
git init
git remote add origin git@github.com:Jewelbots/ble-demo-app.git
git fetch --all
git reset --hard origin/master
sudo chmod +X ./bootstrap.sh

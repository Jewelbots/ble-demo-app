# run from parent directory, e.g. if project will be ~/src/bleblaster, run this from ~/src
set -v
if node -v 2>/dev/null; then
  echo "node is present";
else
  echo "node is not present. Node 4.0 required. can be installed using Homebrew with `brew install node4-lts`"
  exit
fi
if brew -v 2>/dev/null; then
        echo "homebrew is present, continuing"
    else
        echo "homebrew must be present in order to continue".
        exit
fi

if ant -v 2>/dev/null; then
       echo "ant is present."
    else
       echo "ant is not present. Installing..."
        brew install ant
fi

if npm -v 2>/dev/null; then
       echo "npm  is present."
    else
       echo "npm is not present. Installing..."
       npm install -g npm
fi

if bower -v 2>/dev/null; then
       echo "bower  is present."
    else
       echo "bower is not present. Installing..."
       npm install -g bower
fi
if ionic -v 2>/dev/null; then
       echo "ionic is present."
    else
       echo "ionic is not present. Installing..."
       npm install -g ionic
fi
if [ ! -d "bleblaster" ]; then
  ionic start bleblaster blank
  cd bleblaster
  git init
  git remote add origin git@github.com:Jewelbots/ble-demo-app.git
  git fetch --all
  git reset --hard origin/master
  echo "Making bootstrap.sh file executable:"
  sudo chmod +X ./bootstrap.sh

  else
    echo "bleblaster already exists as a directory."
fi


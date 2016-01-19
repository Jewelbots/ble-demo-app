#! /bin/sh
if ruby -v 2>/dev/null; then
    echo "Ruby is present."
  else
    echo "Ruby is required to continue. Please install."
    exit
fi

if gem -v 2>/dev/null; then
       echo "gem is present."
    else
       echo "gem is not present. Please install."
       exit
fi

if sass -v 2>/dev/null; then
      echo "sass is present."
   else
      echo "sass is not present. Installing..."
      gem install sass

fi
if compass -v 2>/dev/null; then
      echo "compass is present."
   else
      echo "compass is not present. Installing..."
      gem install compass
fi

npm install grunt
npm install
bower install

ionic platform add ios
ionic platform add android
ionic plugin add cordova-plugin-bluetoothle@2.7.0

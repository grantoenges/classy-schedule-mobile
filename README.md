# classy-schedule-mobile

Repository for Classy Schedule Android Application Development Team.

Install Instructions:  

For the install Documentation, it is assumed that the user is starting on a PC running windows 10 or newer on a 64-Bit device. It is also assumed that the mobile device being used to run the expo client application is running IOS 15.0.0 or newer for Apple devices and Android 12.0 or newer on Android devices.  

1. Install Node.js version 12.0.0 or higher: To install Node.js navigate to https://nodejs.org/en/download/ and under the LTS tab install the “windows installer (.msi) 64-Bit". Then follow the installation wizard instructions to install Node.js. When prompted with the checkbox to automatically install the necessary tools, check the box and continue the installation. 

2. Install Expo CLI globally: to install Expo CLI you should already have installed Node.js version 12.0.0 or higher. Next you are going to want to open your command prompt window and in the root directory run the command “npm I –g npm-cli". This will install Expo CLI.  

3. Expo Client App: on a mobile device, navigate to the Apple app store or Google Play store. From here search the app name “Expo Client” and download the one with the developer “Nametag”.  

4. Install VS Code: To install VS Code, navigate to https://code.visualstudio.com/ in your browser. Select the “Download for Windows” button and open the installer when it is downloaded. No additional boxes need to be checked for this installation. 

5. Install Git: To install Git navigate to https://gitforwindows.org/ and download the latest version of Git. Follow the instructions from the install wizard and when finished navigate to your command prompt. Run the command “git version” to ensure that Git was installed correctly. 

6. Download the Classy Schedule repository locally: in your command prompt ,and navigate to where you would like the classy schedule repository to be stored locally. Next, Navigate to https://github.com/grantoenges/classy-schedule-mobile in your browser and under the green “code” button copy the HTTPS URL. Go back to your command prompt window and run “git clone <URL>”. This will copy the repository to your computer. You can then open VS Code and open the folder where you stored the classy schedule repository locally.  

7. Install node packages: To install the node packages open the repository in VS Code. In the VS Code terminal navigate to the directory that contains the file “package.json”. Once in this directory, run the command “npm install” and the node packages and their dependencies will be installed so you can start the app locally. 

8. Start the application locally: To start the app locally, you are going to want to be in the same directory as step 7. Run the command “npm start” and the app will begin to run. In the terminal there will be a localhost URL that you should navigate to. From the window the localhost URL opens, in the bottom left there should be a QR code and a selection of 3 options right above it. Select the “tunnel” option and wait for the QR code to reload. Once reloaded, scan the QR code with your mobile device and select the link the QR code registers. This will trigger the Expo Client app to open, and the app will be loaded on your mobile device 

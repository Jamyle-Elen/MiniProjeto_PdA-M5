# **Amazon Rainforest - Action and Preservation**

[![Versão Português](https://img.shields.io/badge/Versão-PortuguêsBR-blue)](./README.md)

## 📝 **About**
The **Amazon Rainforest** application is an interactive landing page developed with the goal of raising awareness about the preservation of the Amazon Rainforest and the devastating consequences of its destruction. With a visually impactful approach, the project presents two versions of the ecosystem: one showing the forest in its natural state and another showing it degraded by fires and environmental destruction.

By toggling between **dark** and **light** modes, the user can view the preserved and destroyed versions of the forest, respectively. Additionally, the **Report** button automatically connects the user to the phone number **192**, allowing them to report illegal fires and contribute to the protection of the Amazon biome.

This project utilizes several technologies, including **Node.js** for the backend, with routes that provide information about fires, forest destruction, and recent updates.

## 🌍 **Problem Statement**
The Amazon Rainforest, the largest tropical biome in the world, is facing one of the greatest environmental challenges in recent history: destruction caused by illegal fires and rampant deforestation. This devastation threatens biodiversity, contributes to climate change, and directly impacts local populations who rely on the forest for their livelihood.

The lack of accessible reporting mechanisms and the rapid spread of fires often hinder authorities' ability to respond effectively. This project aims to address this issue by facilitating direct communication between the public and the relevant authorities, providing a practical tool for anyone to report illegal activities in the Amazon.

## 🌱 **Impact**
The **Amazon Rainforest** application seeks not only to raise awareness but also to empower people to take action against forest destruction. By facilitating communication with the relevant authorities and disseminating accurate information, the project hopes to actively contribute to the preservation of this important biome and promote a more sustainable future.

## 💡 **Technological Solution: Amazon Rainforest**
The **Amazon Rainforest** application was designed to be an accessible tool for awareness and reporting, providing a simple and intuitive way for users to inform authorities about illegal fires. Through visual mode switching and dynamic routes, the project offers:

- **Dual Visualization**: A way to toggle between the preserved and destroyed state of the forest, raising public awareness of environmental impacts.
- **Direct Reporting**: With just one click on the "Report" button, the user is connected to the number **192**, making it easier to report illegal fires directly to the authorities.
- **Near Real-Time Information**: Displaying the latest data on affected areas, endangered species, and fire hotspots, constantly updated.

## 🔄 **API Routes**
The following routes are implemented to manage information about the forest and fires:

| Method | Route                      | Function                                                                      |
| ------ | -------------------------- | ----------------------------------------------------------------------------- |
| POST   | `/createData`              | Adds new data about fires and destruction in the Amazon                       |
| GET    | `/getFireData`             | Returns current information about fire hotspots                               |
| GET    | `/getLastUpdate`           | Returns the date of the last data update about fires                          |
| POST   | `/createForest`            | Adds new data about the state of the forest                                   |
| GET    | `/getForestData`           | Returns data on the current state of the forest (preserved and destroyed)     |

# 📥 Installation/Environment Setup
Before installing the project's dependencies, ensure that Node.js is installed on your system. [Node.js](https://nodejs.org/en/download/prebuilt-installer) is a JavaScript platform that allows you to run JavaScript code outside of a browser and is necessary for managing packages and running the project scripts.

Once Node.js is installed, you can install all project dependencies by running the following command in the project's root directory:
```
  npm install
```
or 
```
  npm i
```
This command will read the project's package.json file and automatically install all the libraries and packages necessary for the project to function.

### 💻 How to execute the project?
- Open the terminal
- Check if it is in the correct folder `/frontend/src` if it is not:
```
cd /frontend/src
```

- Then put it in the terminal like this:
```
npm i
```
```
npm run dev
```

Now to run the backend:
  
- Open another terminal
- Double check that you are in the correct folder `/backend/src`, otherwise:
```
cd /backend/src
```

- Then put it in the terminal like this:
```
npm i
```
```
npm start
```

- Okay, now just test

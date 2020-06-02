# eco-state

Light Weight Asynchronous JavaScript Eco friendly State Management Library.

# Install using npm

```
npm install -S eco-state
```

# Usage

```
import { createListeners, registerToUpdate, eventCreator, getCurrentState } from "eco-state";

createListeners('localData', null, (state, action) => {
    return {
        date: action.payload
    }
});

registerToUpdate((sta,,,te) => console.log('new data', state['localData']));

eventCreator('localData', {payload: 423423});

eventCreator('localData', {payload: 454});

console.log('get the state', getCurrentState());
```

# Library development setup

## Setup using docker.

Clone the repository.

1. Install the Community edition Docker application and, [Docker Installation Link](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
2. Install the Docker-Compose application and, [Docker-Compose Installation Link](https://docs.docker.com/compose/install/) 
3. Once Docker installation setup is done please logut or restart your system.

```
docker-compose up --build -d
```

```
docker exec -it eco_state bash
```

```
npm install
```

## Setup manually

Clone the repository

```
cd eco-state
```

```
npm install
```
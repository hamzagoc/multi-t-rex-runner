# Multi T-rex Runner 

This T-Rex Runner game sourced from Chromium, has been modified to train AI models by allowing players to control multiple dinosaurs.

![](assets/mutli_trex.gif)

## How To Use
Helper functions in trainer-command.js

```javascript
    // Create game with 100 t-rex
    createGame(100)
  
    // Jump for the 5th
    jump(5)
    // Duck for the 5th
    duck(5)

    // Get score
    const instance = window.getRunnerInstance();
    const { distanceMeter, distanceRan } = instance;
    const score = distanceMeter.getActualDistance(distanceRan);
```

Simple demo
```javascript
randomPlay(100)
```

### Resources
- Game extracted from Chromium by @liuwayong.  Original repo is [here](https://github.com/wayou/t-rex-runner)

Verlet Simulation
=================

A port to javascript from: http://gamedev.tutsplus.com/tutorials/implementation/simulate-fabric-and-ragdolls-with-simple-verlet-integration/

## Build

To build the app we use [component](http://github.com/component). It should either be installed using a global npm (recommended) like this: `npm i -g component` or locally using `npm i`.

Then to build you simply call:

```
$ component build
```

While developing I'd recommend using [watch](http://github.com/visionmedia/watch) so you don't have to keep running that command manually.

## TODO

* Use linked lists to avoid using Array#splice? Something is fishy with the GC
* Add a third dimension! 
* It would be great to test a WebGL renderer vs the Canvas one.
* Add friction on the paddles
* Refactor Rect -> Polygon and make the collision detection more generic
# Smartphone INS Demo

Educational demo of a very simple inertial navigation system (INS) using smartphone sensors.

## How it works

1. Read smartphone acceleration
2. Integrate acceleration → velocity
3. Integrate velocity → position

## Important

This demo intentionally shows **INS drift**.

Even when the phone is not moving, the calculated position will drift away.

This demonstrates why real navigation systems must combine INS with GPS or other sensors.

## Try this

1. Put your phone on a table
2. Start the sensor
3. Watch the position drift

This is INS error accumulation.

## Demo

You can run this using GitHub Pages.

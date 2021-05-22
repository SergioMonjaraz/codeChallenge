# CodeChallenge Fibonacci in NodeJS

This is my code for an implementation of fibonacci series with API Rest in Node JS .

## Installation

```bash
npm install
```

## Usage
Run node 
```bash
node index.js
```
Go to browser and access to http://localhost:3000/fibonacci/10 where de last url param is the number n for the fibonacci serie

## Description

El problema se abordo de manera de crear un servidor simple en Node que por medio de una llamada GET pueda obtener el resultado de fibonacci . Tome la desicion de usar Node JS ya que es una manera rapida y sencilla de lanzar un microservicio API, ademas es facil escalarlo y el lenguaje de Javascript es sencillo y versatil.

La serie de fibonacci es un problema donde se suma apartir de 0 y 1 y suecesivamente se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores.

por logica se entiende entonces que se necesita entonces un par de numeros para la sucession de fibonacci entonces si el numero es 0 en la sucesion entonces el resultado es 0 ya que no tiene numeros previos para sumarse
ahora bien si el numero es 1 o 2 el resultado de la suma sera 1 ya que los unicos numeros previos para sumar solamente son 0 y 1
para numeros > 2 se hizo un ciclo donde primeramente se suman los previos (que para el entendido que si el numero es mayor a 2 los primeros numeros pares previos a 2 es 1 y 1)
posteriormente esa suma se asigna a uno de los numeros previos de forma que en cada suma se guarda la suma de los pares previos y se pasa al siguiente ciclo.
 
 se va haciendo la suma hasta que el ciclo llegue al numero dado y se regresa la suma


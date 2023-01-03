# Getting Started

Encharting is an Angular library designed to simplify the process of 2D charts generation.

# Installation

After creating a new Angular project simply run:

```properties
npm install encharting
``` 

# Usage

- Firstly, import EnchartingModule in your app module (or any other proper Angular module).
  
    ```typescript
    import { KiwiChartModule } from '@kiwibit/chart';

    @NgModule({
        imports: [
            KiwiChartModule
        ],
    })
    export class AppModule {}
    ```
- Then use the **encharting** directive in the HTML of your Angular component:
  
  ```html
  <div encharting></div>
  ```

# API

| Name                | Type   | Default            | Description                      |
| ------------------- | ------ | ------------------ | -------------------------------- |
| **@Input** [config] | Chart  | { components: [] } | The chart configuration object   |
| **@Input** [width]  | string | 600px              | The width of the canvas element  |
| **@Input** [height] | string | 400px              | The height of the canvas element |